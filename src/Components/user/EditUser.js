import React, { useState, useEffect } from 'react';
import { Redirect} from 'react-router';
import { getUserDetails, updateUser } from '../../api/apiUser';

const UserDetails = (props) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        religion: '',
        nationality: '',
        redirect:false
    });

    const { name, email, phone, country, city, address, religion, nationality,redirect } = values;

    useEffect(() => {
        const id = props.match.params.id;
        getUserDetails(id)
            .then(response => setValues(response.data))
    }, [])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        const id = props.match.params.id;
        e.preventDefault();
        updateUser(id, values)
        .then(response=>setValues({...values,redirect:true}))
    }

    const userDetails = () => {
        return (
            <div>
                <div style={{ height: "70px", backgroundColor: "#1E3163" }}></div>
                <div className="user-form">
                    <form onSubmit={handleSubmit}>
                        <label className="text-muted">Name:</label>
                        <input name="name" value={name} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Email:</label>
                        <input name="email" value={email} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Phone:</label>
                        <input name="phone" value={phone} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Country:</label>
                        <input name="country" value={country} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">City:</label>
                        <input name="city" value={city} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Address:</label>
                        <input name="address" value={address} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Religion:</label>
                        <input name="religion" value={religion} required className="form-control" onChange={handleChange} /><br/>
                        <label className="text-muted">Nationality:</label>
                        <input name="nationality" value={nationality} required className="form-control" onChange={handleChange} /><br/>
                        <button type="submit" style={{ marginTop: "15px",width:"100px"}}>Edit</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div>
            {userDetails()}
            {redirect ? <Redirect to="/"/> :''}
        </div>
    );
}

export default UserDetails;

