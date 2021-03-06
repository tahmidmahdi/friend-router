import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, website,id} = props.friend
    console.log(props);

    // const 

    const friendStyle = {
        border: '1px solid purple',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p><Link to={`/friend/${id}`}>Show Details About User {id}</Link>
            <button></button>
</p>
        </div>
    );
};

export default Friend;