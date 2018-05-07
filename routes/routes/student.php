<?php



//dashboard
Route::get('/game/dashboard', ['as' => 'student_dashboard_path', 'uses' => 'Student\GameController@index']);

// Game
Route::get('/game/index', 'Student\GameController@index');

