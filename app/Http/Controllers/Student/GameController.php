<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GameController extends Controller
{
    /**
     * @return resource
     */
    public function index()
    {
        return view("student.game.index");
    }
    
}
