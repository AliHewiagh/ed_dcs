<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'teacher_dashboard_path', 'uses' => 'Teacher\HomeController@index']);

// Update IC
Route::post('/ic/update', ['as' => 'teacher_ic_update', 'uses' => 'Teacher\HomeController@icUpdate']);
Route::get('/info/update', ['as' => 'teacher_info_update', 'uses' => 'Teacher\HomeController@infoUpdate']);
Route::post('/info/update/store', ['as' => 'teacher_info_update_store', 'uses' => 'Teacher\HomeController@infoUpdateStore']);


// Students
Route::resource('/student', 'Teacher\StudentController');
// Upload
Route::post('/students/upload', 'Teacher\StudentExcelController@uploadFile');