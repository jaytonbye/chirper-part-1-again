import React from 'react';

function Chirp(props){
    return (
        <div className='container'>
            <div className='jumbotron border rounded'>
                <h4>{props.usr}</h4>
                <h1>{props.text}</h1>
                <button>Admin only</button>
            </div>
        </div>
    )
}

export default Chirp