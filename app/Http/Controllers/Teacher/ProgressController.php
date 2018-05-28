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
        return view("teacher.progress.detail", compact("student", "classId", "records"));
    }
}
