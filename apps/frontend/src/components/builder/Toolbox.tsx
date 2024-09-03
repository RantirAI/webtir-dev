// src/components/builder/Toolbox.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';
import { formatDate } from '../../utils/helpers';

const Toolbox = () => {
    const { connectors } = useEditor();

    return (
        <div className="w-1/5 bg-white p-4 shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Components</h2>
            <button
                ref={(ref) => {
                    if (ref) {
                        connectors.create(ref, <div className="p-4 bg-blue-200 rounded">New Box</div>)
                    }
                }
                }
                className="w-full p-2 bg-blue-500 text-white rounded mb-2"
            >
                Add Box
            </button>
            <button
                ref={(ref) => {
                    if (ref) {
                        connectors.create(ref, <h1 className="text-2xl">Header</h1>)
                    }
                }}
                className="w-full p-2 bg-green-500 text-white rounded mb-2"
            >
                Add Header
            </button>
            <button
                ref={(ref) => {
                    if (ref) {
                        connectors.create(ref, <p>Paragraph</p>)
                    }
                }}
                className="w-full p-2 bg-yellow-500 text-white rounded mb-2"
            >
                Add Paragraph
            </button>
        </div>
    );
};

export default Toolbox;
