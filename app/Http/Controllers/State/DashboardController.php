<?php

namespace App\Http\Controllers\State;

use App\School;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    /**
     * @return resource
     */
    public function index()
    {
        if(empty(Auth::user()->ic_number)){
            return view("state.home.insertIC");
        }
        return view("state.home.index");
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
        return redirect("/state/dashboard");
    }


    /**
     * @return resource
     */
    public function setting()
    {
        return view("state.home.setting");
    }


    /**
     * @return resource
     */
    public function settingUpdate(Request $request)
    {
        $data = $request->only('name', 'username', 'email', 'phone');
        $validator = Validator::make($data, [
            'email' => 'required|max:100',
            'phone' => 'required|max:30',
            'username' => 'required|max:30',
            'name' => 'required|max:100',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }
        $usernameExist = User::where('username', $data['username'])->first();
        if(!empty($usernameExist) && $usernameExist->id != Auth::user()->id){
            return back()->withInput()->with('success', 'This username is taken!');
        }
        Auth::user()->update($data);
        return back()->with('success', 'Profile updated successfully!');
    }


    /**
     * @return resource
     */
    public function helpPage()
    {
        return view("state.home.help");
    }


    /**
     * @return resource
     */
    public function search(Request $request)
    {
        $q = $request->q;
        $stateId = Auth::user()->state_id;
        $schools = School::where([["name", 'LIKE', '%'.$q.'%'], ['state_id', $stateId]])
            ->orWhere([["school_code", 'LIKE', '%'.$q.'%'], ['state_id', $stateId]])->get();
        $schoolIds = School::where('state_id', $stateId)->pluck('id')->toArray();
        $students = User::where([["name", 'LIKE', '%'.$q.'%'], ['type', 4]])->whereIn('school_id', $schoolIds)
            ->orWhere([["ic_number", 'LIKE', '%'.$q.'%'], ['type', 4]])->whereIn('school_id', $schoolIds)->get();
        return view("state.home.search", compact('schools', 'students'));
    }

}
