<?php

namespace App\Http\Controllers\API;

use App\Game;
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
        $data = ['status'=>100, 'message'=>'success', 'stage'=>$game->stage, "last_screen"=>$game->last_screen, "last_state"=>$game->last_state,
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
        if(empty($game)){
            $user = User::find($userId);
            if(empty($user)){
                $data = ['status'=>102, 'message'=>'User does not exist!'];
                return $data;
            }
            $game = Game::create(['user_id'=>$userId, 'school_id'=>$user->school_id, 'stage'=>$stage,
                "last_screen"=>$request->last_screen, "last_state"=>$request->last_state, "time_left"=>$request->time_left]);
        }else{
            $game->update(['stage'=>$stage, "last_screen"=>$request->last_screen, "last_state"=>$request->last_state, "time_left"=>$request->time_left]);
        }
        $data = ['status'=>100, 'message'=>'success'];
        return $data;
    }


}
