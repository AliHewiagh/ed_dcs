<?php

namespace App\Http\Controllers\Admin;

use App\Location;
use App\Pkg;
use App\Role;
use App\School;
use App\SchoolType;
use App\State;
use App\User;
use foo\bar;
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
        $pps = Location::all();
        $states = State::all();
        $pkgs = Pkg::all();
        return view("admin.school.create", compact( "priTypes", "secTypes", "states", "pps", "pkgs"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("school_code", "name", "source", "state_id", "type", "school_type_id", "pkg", "location_id", "area", "mypib", "sekolahi", "sekolahk", "sbt");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'source' => 'required',
            'state_id' => 'required',
            'school_code' => 'required|min:3',
            'type' => 'required',
            'school_type_id' => 'required',
            'pkg' => 'required',
            'location_id' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/school/create')
                ->withErrors($validator)
                ->withInput();
        }
        $exist = School::where("school_code", $data['school_code'])->first();
        if(!empty($exist)){
            return back()->withInput()->with("error", "This school code exist in database!");
        }
        if($data["school_type_id"] == "other"){
            if(empty($request->other_type)){
                return redirect('/admin/school/create')->withInput()->with("error", "Please specify type of school!");
            }
            $newType = SchoolType::create(["group"=>$request->type, "name"=>$request->other_type]);
            $data["school_type_id"] = $newType->id;
        }
//        $username = "m".time();
//        $pass = str_random(8);
        $user = User::create(["name"=>null, "username"=>$data['school_code'], "password"=>$data['school_code'], "type"=>2]);
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
        $user = User::find($id);
        $school = School::where('user_id', $id)->first();
        $priTypes = SchoolType::where("group", 1)->get();
        $secTypes = SchoolType::where("group", 2)->get();
        $pps = Location::all();
        $states = State::all();
        $pkgs = Pkg::all();
        return view("admin.school.edit", compact("user", "school", "priTypes", "secTypes", "states", "pps", "pkgs"));
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
        $data = $request->only("school_code","name", "state_id", "pkg", "type", "school_type_id", "location_id", "area", "mypib", "sekolahi", "sekolahk", "sbt");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/school/'.$id.'/edit')
                ->withErrors($validator)
                ->withInput();
        }
        if($data["school_type_id"] == "other"){
            if(empty($request->other_type)){
                return redirect('/admin/school/create')->withInput()->with("error", "Please specify type of school!");
            }
            $newType = SchoolType::create(["group"=>$request->type, "name"=>$request->other_type]);
            $data["school_type_id"] = $newType->id;
        }

        $dataUser = $request->only("ic_number", "password");
        $dataUser['name'] = $request->manager_name;

        $ic = $dataUser['ic_number'];
        if(strlen($ic)>12 || strlen($ic)<12){
            return back()->with('error', 'Please insert correct IC number!');
        }
        $user = User::findOrFail($id);
//        $exist = User::where("ic_number", $dataUser['ic_number'])->first();
//        if(!empty($exist) && $exist->id != $id){
//            return back()->with('error', 'This ic number is registered already!');
//        }
        $school = School::where('user_id', $id)->firstOrFail();
        $exist = School::where("school_code", $data['school_code'])->first();
        if(!empty($exist) && $school->school_code!= $data['school_code']){
            return back()->with('error', 'This school code exist, please insert a unique school code!');
        }

        $dataUser['username'] = $data['school_code'];

        $user->update($dataUser);

        $school->update($data);
        return redirect('/admin/school')->with("success", "School updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $classes = \App\SchoolClass::where("school_id", $id)->count();
        if($classes > 0){
            return back()->with('error', 'This school have class, you can not delete it!');
        }

        School::where('id', $id)->delete();
        User::where('school_id', $id)->delete();
        return redirect('/admin/school')->with('success', 'School deleted successfully!');

    }
}
