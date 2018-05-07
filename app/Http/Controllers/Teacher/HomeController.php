<?php

namespace App\Http\Controllers\Teacher;

use App\SchoolType;
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
        $ic = $request->ic_number;
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
}
