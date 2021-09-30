import React, { useState, useEffect } from 'react';
import { getUserDetails } from '../../api/apiUser';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const id = props.match.params.id;
        getUserDetails(id)
            .then(response => setUser(response.data))
    }, [])

    const userDetails = () => {
        return (
            <div>
                <div style={{ height: "70px", backgroundColor: "#1E3163" }}></div>
                <div className="user-form">
                    <h4 style={{marginBottom:"30px"}}>User Information</h4>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Name:</span>{user.name}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Email:</span>{user.email}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Phone:</span>{user.phone}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Country:</span>{user.country}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>City:</span>{user.city}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Address:</span>{user.address}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Religion:</span>{user.religion}</p>
                    <p><span style={{fontWeight:"bold",marginRight:"8px"}}>Nationality:</span>{user.nationality}</p>
                    <Link to="/"><button style={{width:"100px"}}>Back</button></Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            {userDetails()}
        </div>
    );
}

export default UserDetails;

