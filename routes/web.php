<?php


use App\Http\Controllers\ContractController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\SupplierContractController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\SupplierDashboardController;
use App\Http\Controllers\SupplierInformations;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return redirect()->route('login');
});

// Routes for admins
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::resource('supplier', SupplierController::class);
    Route::get('/supplier/{id}/informations', [SupplierInformations::class, 'indexinfos'])->name('supplier.indexinfo');
    Route::resource('contract', ContractController::class);
    Route::post('/contrats/store', [ContractController::class, 'store'])->name('contrats.store');
    Route::get('/contracts/view/{path}', [ContractController::class, 'viewContract'])->name('contracts.view');
    Route::resource('user', UserController::class);
    Route::delete('document/{document}', [DocumentController::class, 'destroy'])->name('document.destroy');
    Route::get('/documents/{path}', [DocumentController::class, 'view'])->where('path', '.*')->name('documents.view');
   

    
    
});

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/fournisseur/dashboard', fn() => Inertia::render('SupplierDashboard'))->name('supplier.dashboard');
    Route::get('/fournisseur/contracts', [SupplierContractController::class, 'index'])->name('supplier.contracts.index');
    Route::get('/fournisseur/informationsgénérales', [SupplierInformations::class, 'indexinfoGenerales'])->name('supplier.infogénérales.index');
    Route::get('/fournisseur/informationsfinancelegale', [SupplierInformations::class, 'indexinformationsFinancieresLegales'])->name('supplier.infofinancelegale.index');
    Route::get('/fournisseur/informationscontacts', [SupplierInformations::class, 'indexInformationsContact'])->name('supplier.infocantact.index');
    Route::get('/fournisseur/informationsréférencesClient', [SupplierInformations::class, 'indexRéférenceClients'])->name('supplier.inforeferenceclient.index');
    Route::get('/fournisseur/informationsCommentairesRemarques', [SupplierInformations::class, 'indexCommentairesRemarques'])->name('supplier.infocomments.index');
    Route::post('/fournisseur/informationsgénérales/upload', [SupplierInformations::class, 'storeInfoGenerales'])->name('supplier.infogénérales.upload');
    Route::post('/fournisseur/informationsfinancelegale/upload', [SupplierInformations::class, 'storeInformationsFinancieresLegales'])->name('supplier.infofinancelegale.upload');
    Route::post('/fournisseur/informationscontacts/upload', [SupplierInformations::class, 'storeInformationsContact'])->name('supplier.infocontact.upload');
    Route::delete('/fournisseur/infocontact/{supplierContact}', [SupplierInformations::class, 'destroyContact'])->name('supplier.infocontact.destroy');
    Route::post('/fournisseur/informationsréférencesClient/upload', [SupplierInformations::class, 'storeRéférenceClients'])->name('supplier.inforeferenceclient.upload');
    Route::post('/fournisseur/informationsCommentairesRemarques/upload', [SupplierInformations::class, 'storeCommentairesRemarques'])->name('supplier.commentaireremarque.upload');
    Route::get('/fournisseur/documents', [DocumentController::class, 'Documentsindex'])->name('documents.index');
    Route::post('/fournisseur/documents/upload', [DocumentController::class, 'upload'])->name('supplier.documents.upload');
    Route::get('/fournisseur/contracts/{id}/download', [SupplierContractController::class, 'download'])->name('supplier.contracts.download');


});


require __DIR__ . '/auth.php';