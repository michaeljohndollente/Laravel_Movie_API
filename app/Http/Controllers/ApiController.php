<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use Hash;
use App\Models\User;
use Auth;

class ApiController extends Controller
{
    public function register (Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()]);
        }

        $newuser = $request->all();
        $newuser['password'] = Hash::make($newuser['password']);
        $user = User::create($newuser);
        $success['token'] = $user->createToken('AppName')->accessToken;

        return response()->json(['success'=>$success], 200);
    }

    public function login(Request $request)
    {
        $crdtls =[
            'email' => $request->email,
            'password' => $request->password,
        ];

        if(auth()->attempt($crdtls)){
            $user = Auth::user();

            $success['token'] = $user->createToken('AppName')->accessToken;
            return response()->json(['success' => $success], 200);
        }

        else{
            return response()->json(['error'=>'Unauthorized'], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function user_info()
    {
        $user = Auth::user();

        return response()->json(['success' => $user], 200);
    }
}
