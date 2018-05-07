<?php

namespace App\Http\Controllers\Teacher;

use App\School;
use App\SchoolClass;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $classes = SchoolClass::where("teacher_id", Auth::user()->id)->get();
        return view("teacher.class.index", compact("classes"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $school = School::where('id', Auth::user()->school_id)->first();
        if(!empty($school)){
            $type = $school->type;
        }else{
            $type = 1;
        }
        return view("teacher.class.create", compact('type'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name", "type");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'type' => 'required|max:40',
        ]);

        if ($validator->fails()) {
            return redirect('/teacher/classes/create')
                ->withErrors($validator)
                ->withInput();
        }

        $data["school_id"] = Auth::user()->school_id;
        $data["teacher_id"] = Auth::user()->id;
        SchoolClass::create($data);
        return redirect('/teacher/classes')->with("success", "Class created successfully!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = SchoolClass::findOrFail($id);
        $user->delete();
        return redirect('/teacher/classes')->with("success", "Class deleted successfully!");
    }
}