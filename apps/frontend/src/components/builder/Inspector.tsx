// src/components/builder/Inspector.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';

const Inspector = () => {
    const { selected } = useEditor((state) => ({
        selected: state.events.selected,
    }));

    console.log(process.env.API_URL)
    return (
        <div className="w-1/5 bg-white p-4 shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Inspector</h2>
            {selected && (
                <div>
                    <p className="text-gray-700">Selected Node ID: {selected}</p>
                    {/* Add more controls for node properties */}
                </div>
            )}
        </div>
    );
};

export default Inspector;
