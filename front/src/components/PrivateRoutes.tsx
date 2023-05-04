import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';


const PrivateRoutes = () => {

  const {user, setUser} = useContext(CurrentUserContext);

return (
    user ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes