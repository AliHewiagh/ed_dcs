<?php

namespace App\Http\Controllers\API;

use App\RecordItem;
use App\School;
use App\SchoolClass;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecordController extends Controller
{
    /**
     * @return array
     */
    public function update(Request $request)
    {
        $userId = $request->userId;
        $stage = $request->stage;
        $items = $request->qItem;
        if(empty($userId) || empty($stage)){
            $data = ['status'=>101, 'message'=>'required data are missing!'];
            return $data;
        }

        foreach($items as $item){
            StudentRecord::create(['user_id'=>$userId, 'stage'=>$stage, "qId"=>$item["qId"], "qDomain"=>$item["qDomain"],
                "qParam"=>$item["qParam"], "qSkill"=>$item["qSkill"], "qResult"=>$item["qResult"], "userAns"=>$item["userAns"], "time"=>$item["time"], "score"=>$item["score"]]);
        }
        $user = User::find($userId);
        if($stage == 20 || $request->last_screen == "end"){
            $score = StudentRecord::where('user_id', $userId)->avg('score');
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
        $data = ['status'=>100, 'message'=>'success'];
        return $data;
    }


    /**
     * @return array
     */
    public function overallScore($userId)
    {
        $total = StudentRecord::where('user_id', $userId)->count();
        $data['status'] = 100;
        $data['totalItems'] = $total;
        if(!empty($userId) && ($total>0)){
            $totalScore = StudentRecord::where('user_id', $userId)->sum('score');
            $data['score'] = round(($totalScore/$total), 1);
        }else{
            $data['score'] = 0;
        }
        return $data;
    }


}
