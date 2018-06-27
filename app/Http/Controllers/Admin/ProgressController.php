<?php

namespace App\Http\Controllers\Admin;

use App\Location;
use App\School;
use App\SchoolClass;
use App\State;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $locs = State::all();
        return view("admin.progress.index", compact("locs"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function stateProgress($state)
    {
        $locationIds = Location::where("state_id", $state)->pluck('id')->toArray();
        $schools = School::whereIn('location_id', $locationIds)->get();
       return view("admin.progress.state", compact("schools", "state"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function schoolProgress($state, $schoolId)
    {
        $school = School::find($schoolId);
        $teachers = User::where([['school_id', $schoolId], ['type', 3]])->get();
        return view("admin.progress.school", compact("teachers", "state", "school"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function teacherProgress($state, $schoolId, $teacherId)
    {
        $classes = SchoolClass::where('teacher_id', $teacherId)->get();
        $teacher = User::find($teacherId);
        return view("admin.progress.class", compact("classes", "state", "schoolId", "teacherId", 'teacher'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function classProgress($state, $schoolId, $teacherId, $classId)
    {
        $students = User::where('class_id', $classId)->get();
        return view("admin.progress.students", compact("students", "state", "schoolId", "teacherId", "classId"));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function studentProgress($state, $schoolId, $teacherId, $classId, $studentId)
    {
        $student = User::find($studentId);
        return view("admin.progress.individual", compact("student", "state", "schoolId", "teacherId", "classId"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function progressDetail($state, $schoolId, $teacherId, $classId, $studentId)
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
        return view("admin.progress.detail", compact("student", "state", "schoolId", "teacherId", "classId", "records", 'overAllScore', 'TScore', 'CScore', 'DScore'));
    }
}
