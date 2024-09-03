// src/pages/builder.tsx
import React from 'react';
import { Editor } from '@craftjs/core';
import Toolbox from '../components/builder/Toolbox';
import Canvas from '../components/builder/Canvas/Canvas';
import Inspector from '../components/builder/Inspector';
import Header from '../components/builder/Header';
import ActiveComponents from '../components/builder/ActiveComponents';
import EditingPanel from '../components/builder/EditingPanel';
import { craftConfig } from '@/config/craftConfig';
import Sidebar from '../components/builder/Sidebar';
import { Layers } from '@craftjs/layers';

const BuilderPage = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Editor resolver={craftConfig.resolver}>
                <Header />
                <div className='flex flex-row h-screen overflow-hidden'>
                    <Sidebar />
                    <div className="flex flex-1 overflow-hidden p-5 gap-3 rounded-tl-2xl">
                        <Toolbox />
                        {/* <Layers /> */}
                        <Canvas />
                        <Inspector />
                    </div>
                </div>
                <EditingPanel />
            </Editor>
        </div>
    );
};

export default BuilderPage;
