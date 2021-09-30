import { Switch,Route } from 'react-router-dom';
import UserList from './user/UserList';
import AddUser from './user/AddUser';
import UserDetails from './user/UserDetails';
import EditUser from './user/EditUser';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" strict exact component={UserList}/>
                <Route path="/add-user" exact component={AddUser}/>
                <Route path="/user-details/:id" exact component={UserDetails}/>
                <Route path="/edit-user/:id" exact component={EditUser}/>
            </Switch>
        </div>
    )
}

export default Main;