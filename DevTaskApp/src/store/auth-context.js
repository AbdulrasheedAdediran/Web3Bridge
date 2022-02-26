
import React from 'react';

export const AuthContext = React.createContext({
    isLoggedIn: false,
    token: "",
    login: (email,password) => {},
    logout: () => {}
});




export const AuthContextProvider = (props) => {
    // const [token, setToken] = useState(false);
    // const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Provider>{ props.children}</AuthContext.Provider>
    )
}