import React from 'react'

class RowsCover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarColor : [
                {'color': 'yellow', id: 0},
                {'color': 'red', id: 2},
                {'color': 'blue', id: 3},
                {'color': 'green', id: 4},
                {'color': 'black', id: 5},
                {'color': 'indigo', id: 6},
            ]
        }
    }
}


export default RowsCover;

// This component covers the 'guess check', the 'peg inputs', 'the guess hint' 