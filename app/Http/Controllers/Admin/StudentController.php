<?php

namespace App\Http\Controllers\Admin;

use App\School;
use App\SchoolClass;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function doneUpdate(Request $request, $id)
    {
        $user = User::findOrFail($id);
        if($user->done == 1){
            $user->update(['done'=>0]);
            SchoolClass::where('id', $user->class_id)->update(['done'=>0]);
            School::where('id', $user->school_id)->update(['done'=>0]);
        }else{
            $score = StudentRecord::where('user_id', $id)->avg('score');
            $user->update(['done'=>1, 'score'=>$score]);
            $classNotDone = User::where([['class_id', $user->class_id], ['done', 0]])->first();
            if(empty($classNotDone)){
                $class = SchoolClass::where('id', $user->class_id)->first();
                $class->update(['done'=>1]);
                $schoolNotDone =  SchoolClass::where([['school_id', $class->school_id], ['done', 0]])->first();
                if(empty($schoolNotDone)){
                    School::where('id', $class->school_id)->update(['done'=>1]);
                }
            }
        }

        return back()->with('success', 'Student updated successfully!');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $student = User::findOrFail($id);
        if($student->hasRole('student')){
            return view('admin.student.edit', compact('student'));
        }

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $data = $request->only('name', 'ic_number');
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'ic_number' => 'required',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }
        if(strlen($data['ic_number']) != 12){
            return back()->withInput()->with("error", "Please insert correct IC number!");
        }
        $old = User::where("username", $data["ic_number"])->first();

        if(!empty($old) && $old->id != $id){
            return back()->with('error', 'Ic Number exist!');
        }
        $student = User::findOrFail($id);

        if($student->hasRole('student')){
            $data["username"] = $data["ic_number"];
            $data["password"] = substr($data["ic_number"], -4, 4);
            $student->update($data);
            return back()->with('success', 'User updated!');
        }
        return back()->with('error', 'User not found!');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = User::findOrFail($id);
        if($student->hasRole('student')) {
            $student->delete();
            return back()->with('success', 'Student deleted successfully!');
        }
        return back()->with('error', 'User not found!');
    }

}
