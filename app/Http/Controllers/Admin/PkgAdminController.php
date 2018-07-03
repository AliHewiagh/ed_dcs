<?php

namespace App\Http\Controllers\Admin;

use App\Pkg;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PkgAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('type', 6)->get();
        return view('admin.user.pkgIndex', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pkgs = Pkg::all();
        return view('admin.user.pkgCreate', compact('pkgs'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only("name", "pkg_id");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'pkg_id' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/manage/admin/pkg/create')
                ->withErrors($validator)
                ->withInput();
        }
        $username = "pkg".time();
        $pass = str_random(8);
        $user = User::create(["name"=>$data['name'], "username"=>$username, "password"=>$pass, "type"=>6, 'pkg_id'=>$data['pkg_id']]);
        $role = Role::where("id", 6)->first();
        $user->attachRole($role);
        return redirect('/admin/manage/admin/pkg')->with("success", "PKG Admin created successfully!");
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
        $pkgs = Pkg::all();
        return view('admin.user.pkgEdit', compact('pkgs', 'user'));
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
        $data = $request->only("name", "pkg_id", "password");
        $validator = Validator::make($data, [
            'name' => 'required|max:200',
            'pkg_id' => 'required',
            'password' => 'required|min:3',
        ]);

        if ($validator->fails()) {
            return redirect('/admin/manage/admin/pkg/'.$user->id.'/edit')
                ->withErrors($validator)
                ->withInput();
        }
        $user->update($data);
        return redirect('/admin/manage/admin/pkg')->with("success", "PKG Admin updated successfully!");
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
