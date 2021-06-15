import React, { useContext, useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { auth } from '../firebase';
// import { exp } from "prelude-ls";

const AuthContext = React.createContext();

export const useAuth =() => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user , setUser] =useState(null);
    const history = useHistory();
    console.log(user);
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            console.log(user);
            if(user)history.push('/chats');

        })
    },[user,history]);

    const value = {user};

    return(
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}