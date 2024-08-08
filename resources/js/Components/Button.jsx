import React from 'react';

export default function Button({ active = false, className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={
                'inline-flex items-center px-4 py-2 border text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 bg-indigo-100 dark:bg-indigo-700 focus:border-indigo-700 '
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ') +
                className
            }
        >
            {children}
        </button>
    );
}
