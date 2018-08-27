<?php
/**
 * Created by PhpStorm.
 * User: Outsourcepro
 * Date: 7/10/2018
 * Time: 12:19 PM
 */

namespace App\export;


use App\School;
use App\SchoolClass;
use App\State;
use App\User;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class SchoolReportExport implements FromCollection, ShouldAutoSize
{

    use Exportable;


    public function forDates(string $dates)
    {
        $this->dates = $dates;

        return $this;
    }


    public function collection()
    {
//        $dates = $this->dates;
//        $dates = explode(" ", $dates);
//        $start = $dates[0]." 00:00:00";
//        $end = $dates[1]." 23:59:59";

        $schools = School::orderBy('school_code', 'ASC')->get();
        $transArray = [];
        $transArray[] = ['NO', 'SCHOOL CODE', 'SCHOOL NAME', 'STATE', 'LEVEL', 'TYPE', 'COMPLETION',
            'NO OF STUDENTS COMPLETE', 'NO OF STUDENTS PENDING', 'TOTAL STUDENTS'];
        $no = 1;
        foreach ($schools as $school) {

            if($school->type==2){
                $schoolLevel = "Secondary School";
                $classes = SchoolClass::where('school_id', $school->id)->get()->groupBy('type');
                if(count($classes) > 1){
                    $type = "Form 3/Form 5";
                }else if(count($classes) == 1){
                    $class = SchoolClass::where('school_id', $school->id)->first();
                    $type = $class->type;
                }else{
                    $type = "N/A";
                }

            }else{
                $schoolLevel = "Primary School";
                $type= "Year 6";
            }
            $complete = User::where([['school_id', $school->id], ['type', 4], ['done', 1]])->count();
            $pending = User::where([['school_id', $school->id], ['type', 4], ['done', 0]])->count();
            $total = $complete + $pending;
            if($pending == 0){
                $completion = "FULL";
                $pending = '0';
            }else{
                $completion = "PARTIAL";
            }

            if($complete == 0){
                $complete = '0';
            }
            if($total == 0){
                $total = '0';
            }

            $state = State::find($school->state_id);
            if(!empty($state)){
                $stateName = $state->name;
            }else{
                $stateName = "N/A";
            }
            $transArray[] = [$no, $school->school_code, $school->name, $stateName, $schoolLevel,
                $type, $completion, $complete, $pending, $total ];
            $no++;
        }
        $collection = collect($transArray);
        return $collection;
    }
}