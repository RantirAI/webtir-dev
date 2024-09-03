// src/components/builder/Canvas.tsx
import React from 'react';
import { useEditor, Element, Frame } from '@craftjs/core';

const CanvasWrapper = (props: { onRef: (ref: any) => void }) => {
    const { connectors } = useEditor();

    React.useEffect(() => {
        props.onRef(connectors)
    })

    return (
        <div>
            <Frame>
                <Element
                    is="div"
                    canvas
                    className="relative"
                    ref={(ref: any) => {
                        if (ref) {
                            connectors.connect(ref, "")
                        }
                    }}
                    style={{
                        minHeight: '400px',
                        minWidth: "100px",
                        outline: '1px solid #ccc',
                        position: 'relative',
                    }}
                >
                    {/* Child components go here */}
                </Element>
            </Frame>
        </div>
    );
};

export default CanvasWrapper;
