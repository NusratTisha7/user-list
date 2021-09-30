import { useState, useEffect } from "react";
import { getUser, deleteUser } from '../../api/apiUser';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser()
            .then(response => setUser(response.data))
    }, [])

    const DeleteUser = id => () => {
        deleteUser(id)
        .then(response=>{getUser().then(response=>setUser(response.data))})
    }

    return (
        <div>
            <div style={{ height: "70px", backgroundColor: "#1E3163" }}></div>
            <div className="userList">
                <Link to="add-user"><button style={{marginBottom:"50px",width:"100%",fontWeight:"bold"}}>Add User</button></Link>
                <h3 className="text-center">User List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.map((item,i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td className="a"><Link to={`/user-details/${item._id}`}><button className="btn btn-success">View Details</button></Link><Link to={`/edit-user/${item._id}`}><button className="btn btn-primary">Update</button></Link><button className="btn btn-danger" onClick={DeleteUser(item._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UserList;