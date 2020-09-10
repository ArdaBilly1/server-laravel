<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::get('/articles', 'ArticleController@index');
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/edit/{id}', 'ArticleController@getArticle');
Route::get('/article/{id}', 'ArticleController@getArticle');
Route::put('/article/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', 'ArticleController@delete');

Route::get('/students', 'StudentController@index');
Route::post('/student/store', 'StudentController@store');
Route::get('/student/edit/{id}', 'StudentController@getstudent');
Route::get('/student/{id}', 'StudentController@getStudent');
Route::put('/student/{id}', 'StudentController@update');
Route::delete('/student/delete/{id}', 'StudentController@delete');