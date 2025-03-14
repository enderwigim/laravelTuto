<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Register API(name, email, password, password_confirmation)
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        // Encriptar la contraseña antes de guardar el usuario
        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return response()->json([
            'message' => 'User created successfully'
        ], 201);

    }
    public function login(Request $request){
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        
        if(Auth::attempt($request->only("email", "password"))){
            return response()->json([
                "message" => "Invalid login details"
            ], 401);
        }
        // Usar esto para decirle al IntelliSense que Auth::user() es un objeto de tipo User de los modelos.
        /**
         * @var \App\Models\User $user
         */
        $user = Auth::user();
        $token = $user->createToken("myToken")->plainTextToken;

        return response()->json([
            "message" => "User logged in",
            "token" => $token
        ], 200);
    }
    public function profile(){
        $user = Auth::user();

        return response()->json([
            "message" => "User profile data",
            "user" => $user
        ], 200);
    }

    public function logout(){
        Auth::logout();

        return response()->json([
            "message" => "User logged out"
        ], 200);
    }
}
