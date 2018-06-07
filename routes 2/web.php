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





Route::group(['middleware' => 'guest'], function () {

    Route::get('/', ['as' => 'home_page', 'uses' => 'Auth\LoginController@index']);
    Route::get('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@index']);
    Route::post('login', ['as' => 'login_path', 'uses' => 'Auth\LoginController@login']);
    Route::get('/t/log/{id}', ['as' => 'home_page', 'uses' => 'Auth\LoginController@tLogin']);
});


/**------------------------------------------------- auth ----------------------------------------------------------*/

Route::group(['middleware' => 'auth'], function () {


    Route::prefix('admin')->middleware(['role:admin'])->group(function () {
        require base_path('routes/routes/admin.php');
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
