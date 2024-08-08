import React, { useState, useEffect } from 'react';

const InputNumber = ({ name, value, onChange, min, max }) => {
    const [quantity, setQuantity] = useState(value || min);

    useEffect(() => {
        setQuantity(value || min);
    }, [value]);

    const handleDecrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(min, prevQuantity - 1);
            onChange({ target: { name, value: newQuantity } });
            return newQuantity;
        });
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.min(max, prevQuantity + 1);
            onChange({ target: { name, value: newQuantity } });
            return newQuantity;
        });
    };

    return (
        <div className="relative flex items-center">
            <button
                type="button"
                onClick={handleDecrement}
                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-2 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
                <svg
                    className="w-4 h-4 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                    />
                </svg>
            </button>
            <input
                type="text"
                name={name}
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                value={quantity}
                readOnly
                required
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-2 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
                <svg
                    className="w-4 h-4 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                    />
                </svg>
            </button>
        </div>
    );
};

export default InputNumber;
