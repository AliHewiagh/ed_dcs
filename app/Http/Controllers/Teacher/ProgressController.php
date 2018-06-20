<?php

namespace App\Http\Controllers\Teacher;

use App\SchoolClass;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProgressController extends Controller
{
    /**
     * @return resource
     */
    public function index()
    {
        $authId = Auth::user()->id;
        $classes = SchoolClass::where('teacher_id', $authId)->get();
        return view('teacher.progress.index', compact('classes'));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function classProgress($classId)
    {
        $students = User::where('class_id', $classId)->get();
        return view("teacher.progress.students", compact("students", "classId"));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function studentProgress($classId, $studentId)
    {
        $student = User::find($studentId);
        return view("teacher.progress.individual", compact("student", "classId"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function progressDetail($classId, $studentId)
    {
        $student = User::find($studentId);
        $records = StudentRecord::where('user_id', $studentId)->get();
        if(count($records) > 0){
        $overAllScore = $records->sum('score')/count($records);
        $overAllScore = round($overAllScore, 1);
        }else{$overAllScore=0;}

        $recordsT = StudentRecord::where([['user_id', $studentId], ['qDomain', 1]])->get();
        if(count($recordsT) > 0){
        $TScore = $recordsT->sum('score')/count($recordsT);
        $TScore = round($TScore, 1);
        }else{$TScore=0;}

        $recordsC = StudentRecord::where([['user_id', $studentId], ['qDomain', 2]])->get();
        if(count($recordsC)>0){
        $CScore = $recordsC->sum('score')/count($recordsC);
        $CScore = round($CScore, 1);
        }else{$CScore=0;}

        $recordsD = StudentRecord::where([['user_id', $studentId], ['qDomain', 3]])->get();
        if(count($recordsD)>0){
            $DScore = $recordsD->sum('score')/count($recordsD);
            $DScore = round($DScore, 1);
        }else{$DScore=0;}
        return view("teacher.progress.detail", compact("student", "classId", "records", 'overAllScore', 'TScore', 'CScore', 'DScore'));
    }
}
