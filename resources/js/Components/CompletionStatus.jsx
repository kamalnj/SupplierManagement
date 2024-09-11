import React, { useEffect, useState } from 'react';

const CompletionStatus = () => {
    const [completionData, setCompletionData] = useState({
        completion_percentage: 0,
        filled_fields: 0,
        total_fields: 0,
    });

    useEffect(() => {
        fetch('/supplier/calculate-completion')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setCompletionData(data))
            .catch(error => console.error('Error fetching completion data:', error));
    }, []);

    return (
        <div>
            <h2>Completion Status</h2>
            <p>Completion Percentage: {completionData.completion_percentage}%</p>
            <p>Filled Fields: {completionData.filled_fields} / {completionData.total_fields}</p>
        </div>
    );
};

export default CompletionStatus;
