import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Upload() {
    const { data, setData, post, errors } = useForm({
        document: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('supplier.documents.upload'));
    }

    return (
        <div>
            <h1>Upload Documents</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="document">Choose Document</label>
                    <input
                        type="file"
                        id="document"
                        onChange={(e) => setData('document', e.target.files[0])}
                    />
                    {errors.document && <span>{errors.document}</span>}
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
