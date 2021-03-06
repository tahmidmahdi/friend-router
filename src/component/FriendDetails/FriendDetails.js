import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    //take data from link
    const {friendId} = useParams();

    //api data 
    const [friend, setFriend] =useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    const {name, email, phone, website} = friend;
    
    return (
        <div>
            <h1>Details of user: {friendId}</h1>
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default FriendDetails;