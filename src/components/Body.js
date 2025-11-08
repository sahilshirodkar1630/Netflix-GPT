import React, { useEffect } from 'react'
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import {onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';


const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ]);


    useEffect(() =>{
           console.log("Working");
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            console.log("Working");
            console.log("User details " + {uid:uid,email:email,displayName:displayName,photoURL:photoURL});
            console.log("User details " + {user});
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            // ...
        } else {
            // User is signed out
            dispatch(removeUser());

            // ...
        }
        });
    },[]);

  return (
    <div>
        <RouterProvider router={appRouter}> </RouterProvider>
    </div>
  )
}

export default Body;
