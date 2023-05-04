import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';


const AdminPrivateRoute = () => {

  const {user, setUser} = useContext(CurrentUserContext);

return (
    user && user.isAdmin === 1 ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default AdminPrivateRoute