<?php

namespace App\Http\Controllers\Admin;

use App\Role;
use App\State;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class StateAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('type', 5)->get();
        return view('admin.user.stateIndex', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $states = State::all();
        return view('admin.user.stateCreate', compact('states'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name", "state_id");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'state_id' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/manage/admin/state/create')
                ->withErrors($validator)
                ->withInput();
        }
        $username = "sa".time();
        $pass = str_random(8);
        $user = User::create(["name"=>$data['name'], "username"=>$username, "password"=>$pass, "type"=>5, 'state_id'=>$data['state_id']]);
        $role = Role::where("id", 5)->first();
        $user->attachRole($role);
        return redirect('/admin/manage/admin/state')->with("success", "State Admin created successfully!");
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
        $states = State::all();
        return view('admin.user.stateEdit', compact('states', 'user'));
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
        $user = User::find($id);
        $data = $request->only("name", "state_id", "username", "password");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'state_id' => 'required',
            'password' => 'required|min:3',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/manage/admin/state/'.$user->id.'/edit')
                ->withErrors($validator)
                ->withInput();
        }
        $exist = User::where("username", $data['username'])->first();
        if(!empty($exist)){
            if($exist->id != $id){
                return back()->with('error', 'This username exist!');
            }
        }

        $user->update($data);
        return redirect('/admin/manage/admin/state')->with("success", "State Admin updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return back()->with("success", "State Admin deleted successfully!");
    }
}
