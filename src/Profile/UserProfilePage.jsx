import React, { useState } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Form from "./Form";

function UserProfilePage() {
    // Initialize state for user data, now including username
    const [userData, setUserData] = useState({
        name: 'Kevin Miranda', 
        email: 'kevin@gmail.com',
        username: 'loba' // New field
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState,
            ...updatedInfo
        }));
    };

    return (
        <div>
            <Navigation />
            <Profile user={userData} />
            <Form user={userData} onUpdate={handleUpdate} />
        </div>
    );
}

export default UserProfilePage;
