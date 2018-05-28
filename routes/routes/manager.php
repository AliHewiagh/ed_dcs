<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'manager_dashboard_path', 'uses' => 'Manager\HomeController@index']);

// Update IC
Route::post('/ic/update', ['as' => 'manager_ic_update', 'uses' => 'Manager\HomeController@icUpdate']);
Route::get('/info/update', ['as' => 'manager_info_update', 'uses' => 'Manager\HomeController@infoUpdate']);
Route::post('/info/update/store', ['as' => 'manager_info_update_store', 'uses' => 'Manager\HomeController@infoUpdateStore']);

Route::get('/profile/edit', ['as' => 'manager_profile_edit', 'uses' => 'Manager\HomeController@editProfile']);

// Teachers
Route::resource('/teacher', 'Manager\TeacherController');