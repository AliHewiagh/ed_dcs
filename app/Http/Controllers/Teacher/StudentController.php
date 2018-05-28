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
    public function index($classId)
    {
        $students = User::where([["type", 4], ["class_id", $classId]])->get();
        return view("teacher.student.index", compact("students", "classId"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($classId)
    {
        return view("teacher.student.create", compact('classId'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $classId)
    {
        $data = $request->only("name", "ic_number");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'ic_number' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return redirect('/teacher/class/'.$classId.'/student/create')
                ->withErrors($validator)
                ->withInput();
        }
        if(strlen($data['ic_number']) != 12){
            return back()->withInput()->with("error", "Please insert correct IC number!");
        }
        $old = User::where("username", $data["ic_number"])->first();
        if(!empty($old)){
            return redirect('/teacher/class/'.$classId.'/student')->with("error", "Student already exist!");
        }
        $gender = substr($data["ic_number"], -1, 1);
        if ($gender % 2 == 0) {
            $data["gender"] = "Female";
        }else{
            $data["gender"] = "Male";
        }
        $data["username"] = $data["ic_number"];
        $data["password"] = substr($data["ic_number"], -4, 4);
        $data["school_id"] = Auth::user()->school_id;
        $data["class_id"] = $classId;
        $data["type"] = 4;
        $user = User::create($data);
        $role = Role::where("id", 4)->first();
        $user->attachRole($role);
        return redirect('/teacher/class/'.$classId.'/student')->with("success", "Student created successfully!");
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
    public function edit($classId, $id)
    {
        $student = User::findOrFail($id);
        return view('teacher.student.edit', compact('student','classId'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $classId, $id)
    {
        $data = $request->only("name", "ic_number");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'ic_number' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return redirect('/teacher/class/'.$classId.'/student/'.$id.'/edit')
                ->withErrors($validator)
                ->withInput();
        }
        $student = User::findOrFail($id);
        $data["username"] = $data["ic_number"];
        $data["password"] = substr($data["ic_number"], -4, 4);
        $student->update($data);
        return redirect('/teacher/class/'.$classId.'/student')->with("success", "Student updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($classId, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect('/teacher/class/'.$classId.'/student')->with("success", "Student deleted successfully!");
    }
}
