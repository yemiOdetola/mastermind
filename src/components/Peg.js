import  React  from 'react';
import '../css/Peg.css';

const Peg = (props) => {
    console.log(props);
    return (
        <div className="emptyPeg" pegid={props.pegId} pegbgcolor={props.pegBgColor}></div>
    )
}

export default Peg;