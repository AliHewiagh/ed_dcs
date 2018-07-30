<?php

namespace App\Http\Controllers\State;

use App\Location;
use App\Pkg;
use App\School;
use App\SchoolClass;
use App\State;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $state = Auth::user()->state_id;
        $pkgs = Pkg::where('state_id', $state)->get();
        return view("state.progress.state", compact("pkgs", "state"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pkgProgress($pkg)
    {
        $state = Auth::user()->state_id;
        $pkgM = Pkg::find($pkg);
        $schools = School::where([['state_id', $state], ['pkg', $pkgM->pkg]])->get();
        return view("state.progress.pkg", compact("schools", "state", "pkg"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function schoolProgress($pkg, $schoolId)
    {
        $state = Auth::user()->state_id;
        $school = School::find($schoolId);
        $teachers = User::where([['school_id', $schoolId], ['type', 3]])->get();
        return view("state.progress.school", compact("teachers", "state", "school", "pkg"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function teacherProgress($pkg, $schoolId, $teacherId)
    {
        $state = Auth::user()->state_id;
        $classes = SchoolClass::where('teacher_id', $teacherId)->get();
        $teacher = User::find($teacherId);
        return view("state.progress.class", compact("classes", "state", "schoolId", "teacherId", 'teacher', "pkg"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function classProgress($pkg, $schoolId, $teacherId, $classId)
    {
        $state = Auth::user()->state_id;
        $students = User::where('class_id', $classId)->get();
        return view("state.progress.students", compact("students", "state", "schoolId", "teacherId", "classId", "pkg"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function studentProgress($pkg, $schoolId, $teacherId, $classId, $studentId)
    {
        $state = Auth::user()->state_id;
        $student = User::find($studentId);
        return view("state.progress.individual", compact("student", "state", "schoolId", "teacherId", "classId", "pkg"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function progressDetail($pkg, $schoolId, $teacherId, $classId, $studentId)
    {
        $state = Auth::user()->state_id;
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
        return view("state.progress.detail", compact("student", "state", "schoolId", "teacherId", "classId", "records", 'overAllScore', 'TScore', 'CScore', 'DScore', "pkg"));
    }


}
