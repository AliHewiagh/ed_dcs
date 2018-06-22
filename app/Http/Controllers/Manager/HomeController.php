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
        $pass = Auth::user()->password;
        if(strlen($pass)>4){
            return view("manager.home.insertIC");
        }elseif(empty(Auth::user()->email)){
            return redirect("/manager/info/update");
        }
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
        $pass = substr($ic, -4, 4);
        Auth::user()->update(["ic_number"=>$ic, "username"=>$ic, "password"=>$pass]);
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
        $data = $request->only("school_code", "name", "state_id", "pkg", "type", "school_type_id", "location_id", "area", "mypib", "sekolahi", "sekolahk", "sbt");
        if($data["school_type_id"] == "other"){
            if(empty($request->other_type)){
                return back()->withInput()->with("error", "Please specify type of school!");
            }
            $newType = SchoolType::create(["group"=>$request->type, "name"=>$request->other_type]);
            $data["school_type_id"] = $newType->id;
        }
        $school = School::where("user_id", Auth::user()->id)->first();
        if(empty($school)){
            return back()->with("error", "School does not exist anymore!");
        }
        Auth::user()->update(["email"=>$request->email, "phone"=>$request->phone]);
        $school->update($data);
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
        $students = User::where([["name", 'LIKE', '%'.$q.'%'], ['type', 4], ['school_id', Auth::user()->school_id]])->get();
        return view("manager.home.search", compact('students'));
    }
}
