// src/components/builder/Toolbar.tsx
import React from 'react';

const Header = () => {
    return (
        <div className="toolbar bg-gray-200 p-2 flex justify-between items-center shadow">
            <div className="flex space-x-4">
                <button className="px-2 font-sans text-xs leading-4 bg-blue-500 text-white rounded">Save</button>
                <button className="px-2 font-sans text-xs leading-4 bg-red-500 text-white rounded">Delete</button>
                <button className="px-2 font-sans text-xs leading-4 bg-green-500 text-white rounded">Undo</button>
                <button className="px-2 font-sans text-xs leading-4 bg-yellow-500 text-white rounded">Redo</button>
            </div>
        </div>
    );
};

export default Header;
