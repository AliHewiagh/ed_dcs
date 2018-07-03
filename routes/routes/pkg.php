<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'pkg_dashboard_path', 'uses' => 'PKG\DashboardController@index']);

Route::get('/setting', 'PKG\DashboardController@setting');
Route::patch('/setting', 'PKG\DashboardController@settingUpdate');

// Help
Route::get('/help', 'PKG\DashboardController@helpPage');
Route::post('/search', 'PKG\DashboardController@search');

// Update IC
Route::post('/ic/update', 'PKG\DashboardController@icUpdate');

// Progress
Route::get('/progress', 'PKG\ProgressController@pkgProgress');
Route::get('/progress/{schoolId}', 'PKG\ProgressController@schoolProgress');
Route::get('/progress/{schoolId}/{teacherId}', 'PKG\ProgressController@teacherProgress');
Route::get('/progress/{schoolId}/{teacherId}/{classId}', 'PKG\ProgressController@classProgress');
Route::get('/progress/{schoolId}/{teacherId}/{classId}/{studentId}', 'PKG\ProgressController@studentProgress');
Route::get('/progress/{schoolId}/{teacherId}/{classId}/{studentId}/detail', 'PKG\ProgressController@progressDetail');

// Leader Board
Route::get('/top/school/{type}', 'PKG\LeaderBoardController@index');
Route::get('/top/student/{type}', 'PKG\LeaderBoardController@topStudents');


