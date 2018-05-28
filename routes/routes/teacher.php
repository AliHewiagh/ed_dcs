<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'teacher_dashboard_path', 'uses' => 'Teacher\HomeController@index']);
Route::get('/setting', 'Teacher\HomeController@setting');
Route::patch('/setting', 'Teacher\HomeController@settingUpdate');

// Update IC
Route::post('/ic/update', ['as' => 'teacher_ic_update', 'uses' => 'Teacher\HomeController@icUpdate']);
Route::get('/info/update', ['as' => 'teacher_info_update', 'uses' => 'Teacher\HomeController@infoUpdate']);
Route::post('/info/update/store', ['as' => 'teacher_info_update_store', 'uses' => 'Teacher\HomeController@infoUpdateStore']);

// Class
Route::resource('/classes', 'Teacher\ClassController');

// Students
Route::resource('/class/{classId}/student', 'Teacher\StudentController');
// Upload
Route::post('/class/{classId}/students/upload', 'Teacher\StudentExcelController@uploadFile');

//progress
Route::get('/progress', 'Teacher\ProgressController@index');
Route::get('/progress/{classId}', 'Teacher\ProgressController@classProgress');
Route::get('/progress/{classId}/{studentId}', 'Teacher\ProgressController@studentProgress');
Route::get('/progress/{classId}/{studentId}/detail', 'Teacher\ProgressController@progressDetail');