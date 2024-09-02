<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Http\Resources\SupplierResource;
use App\Mail\SupplierRegistrationMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str; // Import Str for random password

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::paginate(10)->onEachSide(1);
    
        $categories = Supplier::distinct('categorie')->pluck('categorie');
        $qualifications = Supplier::distinct('qualification')->pluck('qualification');
    
        return Inertia::render('Supplier/Index', [
            'suppliers' => SupplierResource::collection($suppliers),
            'categories' => $categories,
            'qualifications' => $qualifications,
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
        // Validate and sanitize the request
        $validatedData = $request->validated();
    
        // Generate a random password
        $password = Str::random(8);
    
        // Create the user first
        $user = User::create([
            'name' => $validatedData['nom'],
            'email' => $validatedData['email'],
            'password' => Hash::make($password),
            'role' => 'supplier',
        ]);
    
        // Create the supplier with the created user ID
        $supplier = Supplier::create([
            'user_id' => $user->id, // Assign the created user ID
            'nom' => $validatedData['nom'],
            'adresse' => $validatedData['adresse'],
            'contact' => $validatedData['contact'],
            'email' => $validatedData['email'],
            'password' => Hash::make($password), // Hash the password
            'categorie' => $validatedData['categorie'],
        ]);
    
        // Send email to the supplier with login details
        Mail::to($validatedData['email'])->send(new SupplierRegistrationMail($password, $validatedData['email']));
    
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
