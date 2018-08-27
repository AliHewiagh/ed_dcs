<?php

namespace App\Http\Controllers\Manager;

use App\Location;
use App\Pkg;
use App\School;
use App\SchoolType;
use App\State;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * @return resource
     */
    public function index()
    {
//        if(empty(Auth::user()->ic_number)){
//            return view("manager.home.insertIC");
//        }elseif(empty(Auth::user()->email)){
//            return redirect("/manager/info/update");
//        }
        return view("manager.home.index");
    }


    /**
     * @return resource
     */
    public function icUpdate(Request $request)
    {
        $data = $request->only("ic_number");
        $validator = Validator::make($data, [
            'ic_number' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }
        $ic = $data['ic_number'];
        if(strlen($ic)>12 || strlen($ic)<12){
            return back()->with('error', 'Please insert correct IC number!');
        }
//        $pass = substr($ic, -4, 4);
        Auth::user()->update(["ic_number"=>$ic]);
        return redirect("/manager/info/update");
    }


    /**
     * @return resource
     */
    public function infoUpdate()
    {
        $authId = Auth::user()->id;
        $priTypes = SchoolType::where("group", 1)->get();
        $secTypes = SchoolType::where("group", 2)->get();
        $pps = Location::all();
        $states = State::all();
        $pkgs = Pkg::all();
        $school = School::where('user_id', $authId)->first();
        return view("manager.home.insertInfo", compact("priTypes", "secTypes", "pps", "pkgs", "states", "school"));
    }


    /**
     * @return resource
     */
    public function infoUpdateStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:100',
            'phone' => 'required|max:30',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }
        //$data22 = $request->only("school_code", "name", "state_id", "pkg", "type", "school_type_id", "location_id", "area", "mypib", "sekolahi", "sekolahk", "sbt");
        $data22 = $request->only( "mypib", "sekolahi", "sekolahk", "sbt");
//        if($data["school_type_id"] == "other"){
//            if(empty($request->other_type)){
//                return back()->withInput()->with("error", "Please specify type of school!");
//            }
//            $newType = SchoolType::create(["group"=>$request->type, "name"=>$request->other_type]);
//            $data["school_type_id"] = $newType->id;
//        }
        $school = School::where("user_id", Auth::user()->id)->first();
        if(empty($school)){
            return back()->withInput()->with("error", "School does not exist anymore!");
        }
        if($request->edit_profile == 1){
            $school->update($data22);
        }
//
//        $exist = School::where("school_code", $data['school_code'])->first();
//        if(!empty($exist) && $school->school_code!= $data['school_code']){
//            return back()->with('error', 'This school code exist, please insert a unique school code!');
//        }

        $user = Auth::user();
        $dataUser = $request->only("email", "phone");
        $dataUser['name'] = $request->manager_name;
        //$dataUser['username'] = $data['school_code'];
        $ic = $request->ic_number;
        if(!empty($ic)){
            if(strlen($ic)>12 || strlen($ic)<12){
                return back()->with('error', 'Please insert correct IC number!');
            }
            $dataUser['ic_number'] = $ic;
//            $exist = User::where("ic_number", $dataUser['ic_number'])->first();
//            if(!empty($exist) && $exist->id != $user->id){
//                return back()->with('error', 'This ic number is registered already!');
//            }
//        $dataUser['password'] = substr($ic, -4, 4);

        }

        $user->update($dataUser);
        return redirect('/manager/dashboard')->with('success', 'Profile updated successfully!');
    }


    /**
     * @return resource
     */
    public function editProfile()
    {
        $authId = Auth::user()->id;
        $priTypes = SchoolType::where("group", 1)->get();
        $secTypes = SchoolType::where("group", 2)->get();
        $pps = Location::all();
        $states = State::all();
        $pkgs = Pkg::all();
        $school = School::where('user_id', $authId)->first();
        return view("manager.home.profileEdit", compact("priTypes", "secTypes", "pps", "pkgs", "states", "school"));
    }


    /**
     * @return resource
     */
    public function helpPage()
    {
        return view("manager.home.help");
    }

    /**
     * @return resource
     */
    public function search(Request $request)
    {
        $q = $request->q;
        $students = User::where([["name", 'LIKE', '%'.$q.'%'], ['type', 4], ['school_id', Auth::user()->school_id]])
            ->orWhere([["ic_number", 'LIKE', '%'.$q.'%'], ['type', 4], ['school_id', Auth::user()->school_id]])->get();
        return view("manager.home.search", compact('students'));
    }
}
