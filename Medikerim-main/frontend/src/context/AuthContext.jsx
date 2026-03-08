import { createContext, useContext, useEffect, useReducer, useState } from "react";

const initialState = {
    user: null,
    role: null,
    token: null,
};

export const authContext = createContext(initialState);

const authReducer = (state,action)=>{
    switch (action.type) {
        case 'LOGIN_START' :

        return {
            user: null,
            role: null,
            token: null,
        };

        case "LOGIN_SUCCESS":
            return{
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role,
            };

            case 'LOGOUT':

            return {
                user: null,
                role: null,
                token: null,
            }

        default:
            return state;
    }
}

export const AuthContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        try {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');
            
            if (user && token && role) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {
                        user: JSON.parse(user),
                        token,
                        role,
                    },
                });
            }
        } catch (error) {
            console.error("Error loading auth from localStorage:", error);
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            if (state.user) {
                localStorage.setItem("user", JSON.stringify(state.user));
            } else {
                localStorage.removeItem("user");
            }
            if (state.token) {
                localStorage.setItem("token", state.token);
            } else {
                localStorage.removeItem("token");
            }
            if (state.role) {
                localStorage.setItem("role", state.role);
            } else {
                localStorage.removeItem("role");
            }
        }
    }, [state, isInitialized]);

    return <authContext.Provider value={{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
}