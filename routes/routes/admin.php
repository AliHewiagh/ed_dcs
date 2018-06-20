<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'admin_dashboard_path', 'uses' => 'Admin\DashboardController@index']);

Route::get('/setting', 'Admin\DashboardController@setting');
Route::patch('/setting', 'Admin\DashboardController@settingUpdate');

// Help
Route::get('/help', 'Admin\DashboardController@helpPage');

// School
Route::resource('/school', 'Admin\SchoolController');

// Upload
Route::post('/schools/upload', 'Admin\SchoolExcelController@uploadFile');

// Progress
Route::get('/progress', 'Admin\ProgressController@index');
Route::get('/progress/{state}', 'Admin\ProgressController@stateProgress');
Route::get('/progress/{state}/{schoolId}', 'Admin\ProgressController@schoolProgress');
Route::get('/progress/{state}/{schoolId}/{teacherId}', 'Admin\ProgressController@teacherProgress');
Route::get('/progress/{state}/{schoolId}/{teacherId}/{classId}', 'Admin\ProgressController@classProgress');
Route::get('/progress/{state}/{schoolId}/{teacherId}/{classId}/{studentId}', 'Admin\ProgressController@studentProgress');
Route::get('/progress/{state}/{schoolId}/{teacherId}/{classId}/{studentId}/detail', 'Admin\ProgressController@progressDetail');

// Leader Board
Route::get('/top/school/{type}', 'Admin\LeaderBoardController@index');
Route::get('/top/student/{type}', 'Admin\LeaderBoardController@topStudents');

