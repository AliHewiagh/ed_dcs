<?php

namespace App\Http\Controllers\Admin;

use App\Location;
use App\School;
use App\SchoolClass;
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

        $locs = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'Wilayah Persekutuan Kuala Lumpur', 'Wilayah Persekutuan Labuan', 'Wilayah Persekutuan Putrajaya'];
        return view("admin.progress.index", compact("locs"));
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function stateProgress($state)
    {
        $locationIds = Location::where("state", $state)->pluck('id')->toArray();
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

}
