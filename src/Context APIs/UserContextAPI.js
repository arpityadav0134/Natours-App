import { createContext, useState } from 'react'
const UserContext = createContext()


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        isLoggedIn: false
    })


    return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}


export { UserContext, UserContextProvider }

// export default UserContext