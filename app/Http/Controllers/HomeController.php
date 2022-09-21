<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $data = Book::all();
        return Inertia::render('Home', [
            'books' => $data,
        ]);
    }
}
