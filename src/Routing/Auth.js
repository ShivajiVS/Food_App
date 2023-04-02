import React, { useState, useEffect } from 'react'
import SignedInStack from './SignedInStack'
import { SignedOutStack } from './Stacks'
import { firebaseApp } from '../config/firebase-config'

const AppStack = () => {
    const [currentUser, setcurrentUser] = useState(null)
    const userHandler = (user) => {
        // this function called inside in the useEffect hook
        user ? setcurrentUser(user) : setcurrentUser(user)
    }
    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(user => userHandler(user))
    }, [])

    return (
        <>
            {
                currentUser ? <SignedInStack /> : <SignedOutStack />
            }
        </>
    )
}

export default AppStack;