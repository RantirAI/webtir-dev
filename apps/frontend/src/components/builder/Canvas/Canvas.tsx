import React, { Component } from "react";
import CanvasWrapper from "./Wrapper";

interface CanvasProps {
}
class Canvas extends Component<CanvasProps> {
    editorRef: any;
    constructor(props: CanvasProps) {
        super(props)
        this.editorRef = React.createRef();

        console.log(this.editorRef);
        this.state = {
            editor: ''
        }
    }

    componentDidMount(): void {
        console.log(this.editorRef);
    }

    handleChange() {
        console.log(this.editorRef.current);
    }

    render() {
        return (
            <div className="canvas bg-white rounded shadow-md relative overflow-auto flex-1">
                <CanvasWrapper onRef={(ref: any) => (this.editorRef = ref)}>
                    {/* Children go here */}
                </CanvasWrapper>
            </div>
        );
    }
}

export default Canvas;