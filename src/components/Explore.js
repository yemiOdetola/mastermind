import React from 'react';
import '../css/index.css';

export default class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noUseless: 'constructor'
        }
    }

    render() {
        return (
            <div className="explore">
                ExploreME!
                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="741" height="177" viewBox="0, 0, 741, 177">
                        <g id="Background">
                            <rect x="0" y="0" width="741" height="177" fill="#000000" fillOpacity="0" />
                        </g>
                        <defs>
                            <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="245.576" y1="215.479" x2="462.478" y2="-160.207" gradientTransform="matrix(1, 0, 0, 1, 0, 0)">
                                <stop offset="0.4" stopColor="#48CFFC" />
                                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <g id="Layer_1">
                            <path d="M0,0 L147.803,156.12 C163.831,173.055 188.213,179.292 210.402,172.072 L739.962,0 L0,0 z" fill="url(#Gradient_1)" opacity="0.1" />
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}