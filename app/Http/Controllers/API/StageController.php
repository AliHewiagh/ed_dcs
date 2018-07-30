<?php

namespace App\Http\Controllers\API;

use App\Game;
use App\School;
use App\SchoolClass;
use App\StudentRecord;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StageController extends Controller
{

    /**
     * @return resource
     */
    public function index($userId)
    {
        $user = User::find($userId);
        if(empty($user)){
            $data = ['status'=>102, 'message'=>'User does not exist!'];
            return $data;
        }
        $game = Game::where('user_id', $userId)->first();
        if(empty($game)){
            $game = Game::create(['user_id'=>$userId, 'school_id'=>$user->school_id, 'stage'=>0]);
        }
        $class = SchoolClass::where('id', $user->class_id)->first();
        $data = ['status'=>100, 'message'=>'success', 'stage'=>$game->stage, 'level'=>$class->type, "last_screen"=>$game->last_screen, "last_state"=>$game->last_state,
            "time_left"=>$game->time_left];
        return $data;
    }



    /**
     * @return resource
     */
    public function update(Request $request)
    {
        $userId = $request->userId;
        $stage = $request->stage;
        if(empty($userId) || empty($stage)){
            $data = ['status'=>101, 'message'=>'required data are missing!'];
            return $data;
        }
        $game = Game::where('user_id', $userId)->first();
        $user = User::find($userId);
        if(empty($game)){
            if(empty($user)){
                $data = ['status'=>102, 'message'=>'User does not exist!'];
                return $data;
            }
            $game = Game::create(['user_id'=>$userId, 'school_id'=>$user->school_id, 'stage'=>$stage,
                "last_screen"=>$request->last_screen, "last_state"=>$request->last_state, "time_left"=>$request->time_left]);
        }else{
            $game->update(['stage'=>$stage, "last_screen"=>$request->last_screen, "last_state"=>$request->last_state, "time_left"=>$request->time_left]);
        }
        if($stage == 21){
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
     * @return resource
     */
    public function complete(Request $request){
//        $userId = $request->userId;
//        if(empty($userId)){
//            $data = ['status'=>101, 'message'=>'required data are missing!'];
//            return $data;
//        }



    }

}
