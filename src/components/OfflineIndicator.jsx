import React from 'react';

const OfflineIndicator = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
            <p className="text-sm font-medium">
                You are currently offline. Please checks your internet connection.
            </p>
        </div>  
    );
};

export default OfflineIndicator;
