<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'state_dashboard_path', 'uses' => 'State\DashboardController@index']);

Route::get('/setting', 'State\DashboardController@setting');
Route::patch('/setting', 'State\DashboardController@settingUpdate');

// Help
Route::get('/help', 'State\DashboardController@helpPage');
Route::post('/search', 'State\DashboardController@search');


// Progress
Route::get('/progress', 'State\ProgressController@index');
Route::get('/progress/{state}', 'State\ProgressController@stateProgress');
Route::get('/progress/{state}/{pkg}', 'State\ProgressController@pkgProgress');
Route::get('/progress/{state}/{pkg}/{schoolId}', 'State\ProgressController@schoolProgress');
Route::get('/progress/{state}/{pkg}/{schoolId}/{teacherId}', 'State\ProgressController@teacherProgress');
Route::get('/progress/{state}/{pkg}/{schoolId}/{teacherId}/{classId}', 'State\ProgressController@classProgress');
Route::get('/progress/{state}/{pkg}/{schoolId}/{teacherId}/{classId}/{studentId}', 'State\ProgressController@studentProgress');
Route::get('/progress/{state}/{pkg}/{schoolId}/{teacherId}/{classId}/{studentId}/detail', 'State\ProgressController@progressDetail');

// Leader Board
Route::get('/top/school/{type}', 'State\LeaderBoardController@index');
Route::get('/top/student/{type}', 'State\LeaderBoardController@topStudents');


