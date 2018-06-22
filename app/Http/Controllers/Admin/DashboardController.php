<?php

namespace App\Http\Controllers\Admin;

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
        return view("admin.home.index");
    }




    /**
     * @return resource
     */
    public function setting()
    {
        return view("admin.home.setting");
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
        return view("admin.home.help");
    }


    /**
     * @return resource
     */
    public function search(Request $request)
    {
        $q = $request->q;
        $schools = School::where("name", 'LIKE', '%'.$q.'%')->get();
        $students = User::where([["name", 'LIKE', '%'.$q.'%'], ['type', 4]])->get();
        return view("admin.home.search", compact('schools', 'students'));
    }

}
