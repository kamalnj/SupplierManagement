<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\CampagneController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierContractController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\SupplierEvaluationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return redirect()->route('login');
});
// Routes for admins
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::resource('supplier', SupplierController::class);
    Route::resource('contract', ContractController::class);
    Route::get('/contracts/{contract}/download', [ContractController::class, 'showPdf'])->name('contracts.download');
    Route::resource('user', UserController::class);
    Route::get('/document', [DocumentController::class, 'index'])->name('document.index');
    Route::get('/documents/{document}/download', [DocumentController::class, 'download'])->name('documents.download');
    Route::resource('campagnes', CampagneController::class);
    Route::get('campagnes/{campagne}/evaluate', [CampagneController::class, 'evaluate'])->name('campagnes.evaluate');
    Route::post('campagnes/{campagne}/evaluate', [CampagneController::class, 'storeEvaluation']);
    Route::get('campagnes/{campagne}/stats', [CampagneController::class, 'stats'])->name('campagnes.stats');
});

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/fournisseur/dashboard', fn() => Inertia::render('SupplierDashboard'))->name('supplier.dashboard');
    Route::get('/fournisseur/contracts', [SupplierContractController::class, 'index'])->name('supplier.contracts.index');
    Route::get('/fournisseur/documents', [DocumentController::class, 'Documentsindex'])->name('documents.index');
    Route::post('/fournisseur/documents/upload', [DocumentController::class, 'upload'])->name('supplier.documents.upload');
    Route::post('/fournisseur/contracts/{contract}/accept', [SupplierContractController::class, 'accept'])->name('supplier.contracts.accept');
    Route::get('/contracts/{contract}/download', [ContractController::class, 'showPdf'])->name('contracts.download');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/image', [ProfileController::class, 'updateImage'])->name('profile.updateImage');
});

require __DIR__ . '/auth.php';
