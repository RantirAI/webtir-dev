import React, { Component } from "react";

interface SidebarProps { }

class Sidebar extends Component<SidebarProps> {

    constructor(props: SidebarProps) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <div className="sidebar bg-gray-200">
                <ul className="p-2">
                    <li><i className="bx bx-plus-circle p-1" onClick={
                        () => {
                            console.log('Add button clicked');
                        }
                    }></i></li>
                    <li><i className='bx bx-data p-1' ></i></li>
                    <li><i className='bx bx-layer p-1' ></i></li>
                    <li><i className='bx bx-grid-alt p-1' ></i></li>
                </ul>
            </div>
        )
    }

}

export default Sidebar; 