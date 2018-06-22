<?php

namespace App\Http\Controllers\Teacher;

use App\SchoolClass;
use App\SchoolType;
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
            return view("teacher.home.insertIC");
        }elseif(empty(Auth::user()->email)){
            return redirect("/teacher/info/update");
        }
        return view("teacher.home.index");
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
        return redirect("/teacher/info/update");
    }


    /**
     * @return resource
     */
    public function infoUpdate()
    {
        return view("teacher.home.insertInfo");
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

        Auth::user()->update(["email"=>$request->email, "phone"=>$request->phone]);
        return redirect('/teacher/dashboard');
    }


    /**
     * @return resource
     */
    public function setting()
    {
        return view("teacher.home.setting");
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
        return view("teacher.home.help");
    }


    /**
     * @return resource
     */
    public function search(Request $request)
    {
        $q = $request->q;
        $classIds = SchoolClass::where('teacher_id', Auth::user()->id)->pluck('id')->toArray();
        $students = User::where([["name", 'LIKE', '%'.$q.'%'], ['type', 4]])->whereIn('class_id', $classIds)->get();
        return view("teacher.home.search", compact('students'));
    }
    
}
