<?php

namespace App\Http\Controllers\Teacher;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = User::where([["type", 4], ["school_id", Auth::user()->school_id]])->get();
        return view("teacher.student.index", compact("students"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("teacher.student.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name", "ic_number");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'ic_number' => 'required|max:20',
        ]);

        if ($validator->fails()) {
            return redirect('/teacher/student/create')
                ->withErrors($validator)
                ->withInput();
        }
        $old = User::where("username", $data["ic_number"])->first();
        if(!empty($old)){
            return redirect('/teacher/student')->with("error", "Student already exist!");
        }
        $data["username"] = $data["ic_number"];
        $data["password"] = substr($data["ic_number"], -4, 4);
        $data["school_id"] = Auth::user()->school_id;
        $data["type"] = 4;
        $user = User::create($data);
        $role = Role::where("id", 4)->first();
        $user->attachRole($role);
        return redirect('/teacher/student')->with("success", "Student created successfully!");
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
        $user = User::findOrFail($id);
        $user->delete();
        return redirect('/teacher/student')->with("success", "Student deleted successfully!");
    }
}
