<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movie = Movie::all();
        // return [
        //     'featuredMovies' => $featuredMovies,
        //     'movies' => $movie,
        // ]; ini untuk cek datanya keluar apa belum
        return inertia('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movie,
        ]);
    }
}
