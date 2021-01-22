<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ActorController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ProducerController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\RateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by th   e RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [ApiController::class, 'login']);
Route::post('register', [ApiController::class, 'register']);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('logout', [ApiController::class, 'logout']);
    Route::post('details', [ApiController::class, 'user_info']);

    
    Route::resource('movie', MovieController::class);
    Route::resource('actor', ActorController::class);
    Route::resource('role', RoleController::class);
    Route::resource('producer', ProducerController::class);
    Route::resource('genre', GenreController::class);
    Route::resource('rate', RateController::class);
});