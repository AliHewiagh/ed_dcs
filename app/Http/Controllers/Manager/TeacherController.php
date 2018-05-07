<?php

namespace App\Http\Controllers\Manager;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teachers = User::where([["school_id", Auth::user()->school_id], ["type", 3]])->get();
        return view("manager.teacher.index", compact("teachers"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("manager.teacher.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
        ]);

        if ($validator->fails()) {
            return redirect('/manager/teacher/create')
                ->withErrors($validator)
                ->withInput();
        }
        $username = "t".time();
        $pass = str_random(8);
        $user = User::create(["name"=>$data["name"], "school_id"=>Auth::user()->school_id,
            "username"=>$username, "password"=>$pass, "type"=>3]);
        $role = Role::where("id", 3)->first();
        $user->attachRole($role);
        return redirect('/manager/teacher')->with("success", "Teacher created successfully!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
