<?php

use App\Http\Controllers\ContractController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\SupplierEvaluationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    // Redirect to login or dashboard
    return redirect()->route('login'); // or use Inertia::render('Welcome') if you have a Welcome component
});
// Routes for admins
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::resource('supplier', SupplierController::class);
    Route::resource('contract', ContractController::class);
    Route::get('/contracts/{contract}/download', [ContractController::class, 'showPdf'])->name('contracts.download');
    Route::resource('user', UserController::class);
    Route::resource('document', DocumentController::class);
    Route::resource('supplierEvaluation', SupplierEvaluationController::class);
});

// Routes for general authenticated users (non-admin)
Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/fournisseur/dashboard', fn() => Inertia::render('SupplierDashboard'))->name('supplier.dashboard');
});

// Routes for profile management
Route::middleware(['auth','admin'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/image', [ProfileController::class, 'updateImage'])->name('profile.updateImage');
});

require __DIR__.'/auth.php';
