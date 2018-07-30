<?php

namespace App\Http\Controllers\State;

use App\School;
use App\SchoolClass;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LeaderBoardController extends Controller
{
    /**
     * @return resource
     */
    public function index($type)
    {
        if($type == 'year6'){
            $t = 'Year 6';
        }elseif($type == 'form3'){
            $t = 'Form 3';
        }else{
            $t = 'Form 5';
        }
        $schoolIds = SchoolClass::where('type', $t)->pluck('school_id')->toArray();
        $schoolIds = array_unique($schoolIds);
        $schools = School::where('state_id', Auth::user()->state_id)->whereIn('id', $schoolIds)->get();
        $schools = $this->schoolSortByScore($schools, $t)->take(10);
        return view('state.leaderboard.school', compact('schools', 'type'));
    }



    /**
     * @return resource
     */
    public function schoolSortByScore($schools, $type)
    {
        foreach ($schools as $school){
            $classIds = SchoolClass::where([['school_id', $school->id], ['type', $type]])->pluck('id')->toArray();
            $s = User::whereIn('class_id', $classIds)->where('done', 1)->avg('score');
            $school->score = round($s, 2);
        }
        $sortedSchools = $schools->sortBy('score');
        return $sortedSchools;
    }


    /**
     * @return resource
     */
    public function topStudents($type)
    {
        if($type == 'year6'){
            $t = 'Year 6';
        }elseif($type == 'form3'){
            $t = 'Form 3';
        }else{
            $t = 'Form 5';
        }
        $schoolIds = School::where('state_id', Auth::user()->state_id)->pluck('id')->toArray();
        $classIds = SchoolClass::where('type', $t)->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
        $students = User::whereIn('class_id', $classIds)->where('done', 1)->orderBy('score', 'DESC')->take(10)->get();
        return view('state.leaderboard.students', compact('students', 'type'));
    }
    
}
