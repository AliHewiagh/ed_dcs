<?php



// Dashboard Page
Route::get('/dashboard', ['as' => 'admin_dashboard_path', 'uses' => 'Admin\DashboardController@index']);

Route::get('/setting', 'Admin\DashboardController@setting');
Route::patch('/setting', 'Admin\DashboardController@settingUpdate');

// Help
Route::get('/help', 'Admin\DashboardController@helpPage');
Route::post('/search', 'Admin\DashboardController@search');

// School
Route::resource('/school', 'Admin\SchoolController');

// Upload
Route::post('/schools/upload', 'Admin\SchoolExcelController@uploadFile');

// Progress
Route::get('/progress', 'Admin\ProgressController@index');
Route::get('/progress/{state}', 'Admin\ProgressController@stateProgress');
Route::get('/progress/{state}/{schoolId}', 'Admin\ProgressController@schoolProgress');
Route::get('/progress/{state}/{schoolId}/{classId}', 'Admin\ProgressController@classProgress');
Route::get('/progress/{state}/{schoolId}/{classId}/{studentId}', 'Admin\ProgressController@studentProgress');
Route::get('/progress/{state}/{schoolId}/{classId}/{studentId}/detail', 'Admin\ProgressController@progressDetail');

// Student
Route::PATCH('/student/done/update/{id}', 'Admin\StudentController@doneUpdate');
Route::get('/student/edit/{id}', 'Admin\StudentController@edit');
Route::PUT('/student/edit/{id}', 'Admin\StudentController@store');
Route::delete('/student/delete/{id}', 'Admin\StudentController@destroy');


// Leader Board
Route::get('/top/school/{type}', 'Admin\LeaderBoardController@index');
Route::get('/top/student/{type}', 'Admin\LeaderBoardController@topStudents');

// Manage state admin
Route::resource('/manage/admin/state', 'Admin\StateAdminController');

// Manage pkg admin
Route::resource('/manage/admin/pkg', 'Admin\PkgAdminController');

//export the cvs report
Route::get('/export/cvs/report', 'Admin\ExportReportController@schoolReport');