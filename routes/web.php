<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\CampagneController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierContractController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\SupplierDashboardController;
use App\Http\Controllers\SupplierEvaluationController;
use App\Http\Controllers\SupplierInformations;
use App\Http\Controllers\UserController;
use App\Models\InfoGenerales;
use App\Models\InformationsFinancieresLegales;
use App\Models\SupplierContact;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return redirect()->route('login');
});
// Routes for admins
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::resource('supplier', SupplierController::class);
    Route::get('/supplier/{id}/informations', [SupplierInformations::class, 'indexinfos'])->name('supplier.indexinfo');
    Route::resource('contract', ContractController::class);
    Route::post('/contrats/store', [ContractController::class, 'store'])->name('contrats.store');
    Route::get('/contracts/{contract}/download', [ContractController::class, 'showPdf'])->name('contracts.download');
    Route::resource('user', UserController::class);
    Route::get('/document', [DocumentController::class, 'index'])->name('document.index');
    Route::delete('document/{document}', [DocumentController::class, 'destroy'])->name('document.destroy');
    Route::get('/admin/download/{file}', [DocumentController::class, 'downloadDocument'])->name('admin.download');
    Route::resource('campagnes', CampagneController::class);
    Route::get('campagnes/{campagne}/evaluate', [CampagneController::class, 'evaluate'])->name('campagnes.evaluate');
    Route::post('campagnes/{campagne}/evaluate', [CampagneController::class, 'storeEvaluation']);
    Route::get('campagnes/{campagne}/stats', [CampagneController::class, 'stats'])->name('campagnes.stats');
   

    
    
});

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/fournisseur/dashboard', [SupplierDashboardController::class, 'index'])->name('supplier.dashboard');
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
    Route::post('/fournisseur/contracts/{contract}/accept', [SupplierContractController::class, 'accept'])->name('supplier.contracts.accept');
    Route::get('/fournisseur/contracts/{id}/download', [SupplierContractController::class, 'download'])->name('contracts.download');
    Route::post('/fournisseur/contracts/upload', [SupplierContractController::class, 'upload'])->middleware('auth');


});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/image', [ProfileController::class, 'updateImage'])->name('profile.updateImage');
});

require __DIR__ . '/auth.php';
