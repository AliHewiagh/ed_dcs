<?php

namespace App\Http\Controllers\API;

use App\RecordItem;
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
                "qParam"=>$item["qParam"], "qSkill"=>$item["qSkill"], "qResult"=>$item["qResult"], "time"=>$item["time"], "score"=>$item["score"]]);
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
