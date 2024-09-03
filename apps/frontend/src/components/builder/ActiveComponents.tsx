// src/components/builder/ActiveComponents.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';

const ActiveComponents = () => {
    const { query } = useEditor();

    const nodes = query.getNodes();
    const activeNodes = Object.values(nodes).filter(node => node.data.isCanvas);

    return (
        <div className="active-components p-4 bg-gray-100 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Active Components</h2>
            <ul>
                {activeNodes.map((node, index) => (
                    <li key={index} className="p-2 bg-white mb-2 rounded shadow">
                        {node.data.displayName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActiveComponents;
