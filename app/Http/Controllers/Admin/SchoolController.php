<?php

namespace App\Http\Controllers\Admin;

use App\Location;
use App\Role;
use App\School;
use App\SchoolType;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schools = School::all();
        return view("admin.school.index", compact("schools"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $priTypes = SchoolType::where("group", 1)->get();
        $secTypes = SchoolType::where("group", 2)->get();
        $states = Location::where('active', 1)->get()->groupBy("group");
        return view("admin.school.create", compact("priTypes", "secTypes", "states"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name");
        //$data = $request->only("school_code", "name", "type", "school_type_id", "location_id", "area", "mypib", "sekolahi", "sekolahk", "sbt");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/school/create')
                ->withErrors($validator)
                ->withInput();
        }
//        if($data["school_type_id"] == "other"){
//            if(empty($request->other_type)){
//                return redirect('/admin/school/create')->withInput()->with("error", "Please specify type of school!");
//            }
//            $newType = SchoolType::create(["group"=>$request->type, "name"=>$request->other_type]);
//            $data["school_type_id"] = $newType->id;
//        }
        $username = "m".time();
        $pass = str_random(8);
        $user = User::create(["name"=>$data["name"], "username"=>$username, "password"=>$pass, "type"=>2]);
        $role = Role::where("id", 2)->first();
        $user->attachRole($role);
        $data["user_id"] = $user->id;
        $school = School::create($data);
        $user->update(["school_id"=>$school->id]);
        return redirect('/admin/school')->with("success", "School created successfully!");

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
        //
    }
}
