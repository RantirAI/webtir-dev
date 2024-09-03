// src/components/builder/EditingPanel.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';

const EditingPanel = () => {
    const { selected } = useEditor((state) => ({
        selected: state.nodes[state.events.selected.size],
    }));

    if (!selected) return null;

    return (
        <div className="editing-panel bg-white p-4 rounded shadow-md absolute top-0 right-0 w-1/3 h-full">
            <h2 className="text-xl font-semibold mb-4">Edit Component</h2>
            <div>
                <p>Component ID: {selected.id}</p>
                {/* Additional editing controls based on component type */}
            </div>
        </div>
    );
};

export default EditingPanel;
