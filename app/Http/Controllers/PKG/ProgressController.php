<?php

namespace App\Http\Controllers\PKG;

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
    public function pkgProgress()
    {
        $pkg = Auth::user()->pkg_id;
        $pkgM = Pkg::find($pkg);
        $schools = School::where('pkg', $pkgM->pkg)->get();
        return view("pkg.progress.pkg", compact("schools"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function schoolProgress($schoolId)
    {
        $school = School::find($schoolId);
        $teachers = User::where([['school_id', $schoolId], ['type', 3]])->get();
        return view("pkg.progress.school", compact("teachers", "school"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function teacherProgress($schoolId, $teacherId)
    {
        $classes = SchoolClass::where('teacher_id', $teacherId)->get();
        $teacher = User::find($teacherId);
        return view("pkg.progress.class", compact("classes", "schoolId", "teacherId", 'teacher'));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function classProgress($schoolId, $teacherId, $classId)
    {
        $students = User::where('class_id', $classId)->get();
        return view("pkg.progress.students", compact("students", "schoolId", "teacherId", "classId"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function studentProgress($schoolId, $teacherId, $classId, $studentId)
    {
        $student = User::find($studentId);
        return view("pkg.progress.individual", compact("student", "schoolId", "teacherId", "classId"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function progressDetail($schoolId, $teacherId, $classId, $studentId)
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
        return view("pkg.progress.detail", compact("student", "schoolId", "teacherId", "classId", "records", 'overAllScore', 'TScore', 'CScore', 'DScore'));
    }


}
