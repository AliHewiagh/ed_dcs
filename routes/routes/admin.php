<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'admin_dashboard_path', 'uses' => 'Admin\DashboardController@index']);

// School
Route::resource('/school', 'Admin\SchoolController');
