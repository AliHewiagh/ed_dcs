<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * @return resource
     */
    public function index()
    {
        return view("welcome");
    }

    /**
     * @return string
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }

        $user = User::where("username", $request->username)->first();
        if(!empty($user)){
            if ($request->password == $user->password) {
                if($user->hasRole("student") === true){
                    Auth::login($user);
                    return redirect()->route("student_dashboard_path");
                }elseif($user->hasRole("teacher") === true){
                    Auth::login($user);
                    return redirect()->route("teacher_dashboard_path");
                }elseif($user->hasRole("manager") === true){
                    Auth::login($user);
                    return redirect()->route("manager_dashboard_path");
                }elseif($user->hasRole("admin") === true){
                    Auth::login($user);
                    return redirect()->route("admin_dashboard_path");
                }
            }
        }
        return back()->with("error", "Email or password is wrong!");
    }


    /**
     * @return resource
     */
    public function tLogin($id)
    {
        $user = User::findOrFail($id);
        Auth::login($user);
    }
    
}
