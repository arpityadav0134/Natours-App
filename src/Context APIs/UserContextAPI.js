import { createContext, useState, useEffect } from 'react'
const UserContext = createContext()


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        isLoggedIn: false,
        user: {}
    })

    const verifyJwt = async () => {

        const res = await fetch("https://natours-by-arpit.herokuapp.com/api/v1/users/me", {
            method: 'GET',
            credentials: 'include'
        })

        const resJson = await res.json()
        if (resJson.status !== "success") {
            setUser({ isLoggedIn: false, user: {} })
        }
        else {
            setUser({ isLoggedIn: true, user: resJson.data.data })
        }
    }

    useEffect(() => {
        try {
            verifyJwt()
        } catch {
            setUser({ isLoggedIn: false, user: {} })
        }
        //eslint-disable-next-line
    }, [])

    return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider }