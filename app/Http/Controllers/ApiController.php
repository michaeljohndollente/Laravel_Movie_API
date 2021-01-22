<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    public function register (Request $request)
    {
        $newuser = $request->all();     
        $newuser['password'] = Hash::make($newuser['password']);
        $user = User::create($newuser); 
        return response()->json($user);
    }

    public function login(Request $request)
    {
        try {
            
            $crdtls =[
                'email' => $request->email,
                'password' => $request->password,
            ];

            if(!Auth::attempt($crdtls)){
                return response()->json([
                    'status' => 500,
                    'message' => 'Unauthorized'
                ]); 
            }

            $user = User::where('email', $request->email)->first();
            
            if(!Hash::check($request->password, $user->password,[])){
                throw new \Exception("Error in Login");
            }

            $tokenResult = $user->createToken('access_token')->plainTextToken;
            return response()->json([
                'user' => auth()->user(),
                'message' => 'success',
                'status_code' => 200,
                'access_token' => $tokenResult, 
                'token_type' => 'Bearer',
            ]);
            
        } catch (Exception $error){
            return response()->json([
                'status_code' => 500,
                'error' => $error,
            ]);
        }
        
        

        // else{
        //     return response()->json(['error'=>'Unauthorized'], 401);
        // }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function user_in ()
    {
        $user = Auth::user();

        return response()->json(['success' => $user], 200);
    }
}
