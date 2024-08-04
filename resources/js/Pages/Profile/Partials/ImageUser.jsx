import { useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function ImageUser({ className, auth }) {
    const { data, setData, post, processing, errors } = useForm({
        image: null,
    });
    const [preview, setPreview] = useState(auth.user.image ? `/storage/${auth.user.image}` : null);

    useEffect(() => {
        // Update the preview when auth.user.image changes
        if (auth.user.image) {
            setPreview(`/storage/${auth.user.image}`);
        }
    }, [auth.user.image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/profile/image', {
            onSuccess: () => {
                // Handle success if needed
            },
            onError: () => {
                // Handle error if needed
            },
            forceFormData: true, // Ensure form data is sent as multipart/form-data
        });
    };

    return (
        <div className={`p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg ${className}`}>
            <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">Profile Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    {preview ? (
                        <img src={preview} alt="Profile Preview" className="rounded-full w-32 h-32 object-cover mx-auto" />
                    ) : (
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-150"
                        disabled={processing}
                    >
                        {processing ? 'Uploading...' : 'Modifier'}
                    </button>
                </div>
            </form>
        </div>
    );
}