<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'state_dashboard_path', 'uses' => 'State\DashboardController@index']);

Route::get('/setting', 'State\DashboardController@setting');
Route::patch('/setting', 'State\DashboardController@settingUpdate');

// Help
Route::get('/help', 'State\DashboardController@helpPage');
Route::post('/search', 'State\DashboardController@search');

// Update IC
Route::post('/ic/update', 'State\DashboardController@icUpdate');

// Progress
Route::get('/progress', 'State\ProgressController@index');
Route::get('/progress/{schoolId}', 'State\ProgressController@schoolProgress');
Route::get('/progress/{schoolId}/{classId}', 'State\ProgressController@classProgress');
Route::get('/progress/{schoolId}/{classId}/{studentId}', 'State\ProgressController@studentProgress');
Route::get('/progress/{schoolId}/{classId}/{studentId}/detail', 'State\ProgressController@progressDetail');

// Leader Board
Route::get('/top/school/{type}', 'State\LeaderBoardController@index');
Route::get('/top/student/{type}', 'State\LeaderBoardController@topStudents');


// Student
Route::PATCH('/student/done/update/{id}', 'State\StudentController@doneUpdate');