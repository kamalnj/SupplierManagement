<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Http\Resources\SupplierResource;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::paginate(10)->onEachSide(1);
        
        $categories = Supplier::distinct('categorie')->pluck('categorie');
        
        // dd([
        //     'suppliers' => $suppliers,
        //     'categories' => $categories
        // ]);
    
        // Return the paginated data and categories to the InertiaJS component
        return Inertia::render('Supplier/Index', [
            'suppliers' => SupplierResource::collection($suppliers),
            'categories' => $categories, // Pass categories to the component
        ]);
    }
    
    
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Pass the authenticated user to the Inertia page
        return inertia("Supplier/Create", [
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request)
    {
        // Create the supplier
        $supplier = Supplier::create([
            'nom' => $request->nom,
            'adresse' => $request->adresse,
            'contact' => $request->contact,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'categorie' => $request->categorie,

        ]);

        // Redirect or return response as needed
        return redirect()->route('supplier.index')->with('success', 'Le fournisseur a été créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        return Inertia::render('Supplier/Show', [
            'supplier' => $supplier
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        // Return the Inertia view for editing the supplier with the supplier data
        return Inertia::render('Supplier/Edit', [
            'supplier' => $supplier
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        // Validate the request data
        $validatedData = $request->validated();

        // Update the supplier with validated data
        $supplier->update($validatedData);

        // Redirect back to the suppliers list or another appropriate page
        return redirect()->route('supplier.index')->with('success', 'Supplier updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete();

        // Redirect back to the supplier index page with a success message
        return redirect()->route('supplier.index')->with('success', 'Supplier deleted successfully.');
    }
}
