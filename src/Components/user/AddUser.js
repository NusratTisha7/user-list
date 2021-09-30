import React, { useState } from 'react';
import { addUser } from '../../api/apiUser';
import { Link,Redirect } from 'react-router-dom';

const CreateProperty = () => {
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

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values });
        addUser({ name, email, phone, country, city, address, religion, nationality })
            .then(response => {
                setValues({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    city: '',
                    address: '',
                    religion: '',
                    nationality: '',
                    redirect:true
                })
            })
            .catch(err=>{
                let errMessage='Something went wrong!'
                if(err.response){
                    errMessage=err.response.data
                }else{
                    errMessage='Something went wrong!'
                }
                setValues({...values})
            })
    }

    const userForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="user-form">
                <h4>Add User</h4>
                <hr className="mb-5" />
                <div className="form-group">
                    <label className="text-muted">Name:</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        value={email}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Phone:</label>
                    <input
                        name="phone"
                        onChange={handleChange}
                        type="phone"
                        className="form-control"
                        value={phone}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Country:</label>
                    <input
                        name="country"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={country}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">City:</label>
                    <input
                        name="city"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={city}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Address:</label>
                    <input
                        name="address"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={address}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Religion:</label>
                    <input
                        name="religion"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={religion}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Nationality:</label>
                    <input
                        name="nationality"
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        value={nationality}
                        required
                    />
                </div>
                <button type="submit" style={{marginTop:"10px",marginRight:"5px",width:"100px"}}>Submit</button>
                <Link to="/"><button style={{width:"100px"}}>Back</button></Link>

            </div>
        </form>
    );
    return (
        <div>
            {userForm()}
            {redirect ? <Redirect to="/"/> :''}
        </div>
    );
}

export default CreateProperty;

