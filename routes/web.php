<?php

use App\Http\Controllers\ContractController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route; 
use Inertia\Inertia;

// Redirect the root URL to the dashboard
Route::redirect('/', '/dashboard');

// Define routes that require authentication and email verification
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::resource('supplier',SupplierController::class);
    Route::resource('contract',ContractController::class);
    Route::resource('user',UserController::class);
    Route::resource('document',DocumentController::class);
});



// Group for authenticated users to manage suppliers


// Group for authenticated users to manage profiles
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
