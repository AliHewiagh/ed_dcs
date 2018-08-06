<?php

namespace App\Http\Controllers\State;

use App\School;
use App\SchoolClass;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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




}
