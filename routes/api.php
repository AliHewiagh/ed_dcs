<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('stage/get/{userId}', 'API\StageController@index');
Route::post('stage/update', 'API\StageController@update');

Route::post('record/update', 'API\RecordController@update');

// User Overall Score
Route::get('get/score/{userId}', 'API\RecordController@overallScore');

// User School Level
Route::get('get/school/{userId}', 'API\HomeController@schoolLevel');

// User done all stages
Route::post('stage/complete', 'API\StageController@complete');