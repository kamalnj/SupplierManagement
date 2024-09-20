// import React, { useState } from 'react';
// import { useForm } from '@inertiajs/react';

// export default function Upload() {
//     const { data, setData, post, errors } = useForm({
//         document: null,
//     });

//     const [fileError, setFileError] = useState('');

//     function handleFileChange(e) {
//         const file = e.target.files[0];
//         if (file) {
//             const allowedExtensions = ['application/pdf', 'image/jpeg'];
//             const smallFileTypes = ['RC', 'Attestation de régularité fiscale', 'Attestation CNSS', 'Attestation de RIB'];
//             const largeFileTypes = ['Bilan des 3 dernières années', 'CGA'];
//             const maxSmallSize = 2 * 1024 * 1024; // 2 MB
//             const maxLargeSize = 20 * 1024 * 1024; // 20 MB

//             if (!allowedExtensions.includes(file.type)) {
//                 setFileError('Only PDF and JPEG files are allowed.');
//                 setData('document', null);
//             } else if (smallFileTypes.some(type => file.name.includes(type)) && file.size > maxSmallSize) {
//                 setFileError('The selected document must not exceed 2 MB.');
//                 setData('document', null);
//             } else if (largeFileTypes.some(type => file.name.includes(type)) && file.size > maxLargeSize) {
//                 setFileError('The selected document must not exceed 20 MB.');
//                 setData('document', null);
//             } else {
//                 setFileError('');
//                 setData('document', file);
//             }
//         }
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (data.document) {
//             post(route('supplier.documents.upload'));
//         }
//     }

//     return (
//         <div>
//             <h1>Upload Documents</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="document">Choose Document</label>
//                     <input
//                         type="file"
//                         id="document"
//                         onChange={handleFileChange}
//                     />
//                     {errors.document && <span>{errors.document}</span>}
//                     {fileError && <span>{fileError}</span>}
//                 </div>
//                 <button type="submit" disabled={!!fileError}>Upload</button>
//             </form>
//         </div>
//     );
// }
