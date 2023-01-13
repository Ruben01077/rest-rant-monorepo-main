import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
useEffect(()=>{

    const getLoggedInUser = async () =>{
        let response = await fetch('http://localhost:3000/authentication/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let user = await response.json()
        setCurrentUser(user)
    }

    getLoggedInUser()

},[])
    const [currentUser, setCurrentUser] = useState(null)
    window.setCurrentUser = setCurrentUser
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider






