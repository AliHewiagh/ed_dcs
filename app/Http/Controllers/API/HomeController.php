<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * @return resource
     */
    public function schoolLevel($userId)
    {
        if(empty($userId)){
            $data = ['status'=>101, 'message'=>'required data are missing!'];
            return $data;
        }


        $data = ['status'=>100, 'message'=>'success'];
        return $data;
    }




}
