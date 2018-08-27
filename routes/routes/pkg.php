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
Route::get('/progress/{schoolId}/{classId}', 'PKG\ProgressController@classProgress');
Route::get('/progress/{schoolId}/{classId}/{studentId}', 'PKG\ProgressController@studentProgress');
Route::get('/progress/{schoolId}/{classId}/{studentId}/detail', 'PKG\ProgressController@progressDetail');

// Student
Route::PATCH('/student/done/update/{id}', 'PKG\StudentController@doneUpdate');
Route::get('/student/edit/{id}', 'PKG\StudentController@edit');
Route::post('/student/edit/{id}', 'PKG\StudentController@store');
Route::delete('/student/delete/{id}', 'PKG\StudentController@destroy');

// Leader Board
Route::get('/top/school/{type}', 'PKG\LeaderBoardController@index');
Route::get('/top/student/{type}', 'PKG\LeaderBoardController@topStudents');


