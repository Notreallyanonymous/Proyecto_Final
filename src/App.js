import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard, Home , Login }  from './components'
import { app }  from './config/firebase.config'
import { getAuth } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion'
import { validateUser } from './api'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'
import Container from "./components/Container";
import Discover from "./routes/discover"
import "./App.css";


function App() {

  const firebaseAuth = getAuth(app)
  const navigate = useNavigate()

  const [{user}, dispatch] = useStateValue()

   const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") 
  === "true")

  useEffect(()=> {
      firebaseAuth.onAuthStateChanged((userCredentials)=>{
      console.log(userCredentials)
      if(userCredentials){
        userCredentials.getIdToken().then((token)=>{
          console.log(token)
          validateUser(token).then((data)=> {
            dispatch({
              type: actionType.SET_USER,
              user: data,
            })
          })
        })
      }else{
        setAuth(false)
        window.localStorage.setItem("auth"  ,"false");
        dispatch({
          type: actionType.SET_USER, 
          user: null,
        })
        navigate("/login")
      }
    })
  } , [])

  return (
    <AnimatePresence mode='wait'>
    <div className='h-auto min-w-[680px] bg-dark-grey-400 flex justify-center items-center text-teal-50 text-lg'>
      <Routes>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        <Route path='/*' element={<Discover />}/>
        <Route path='/dashboard/*' element={<Container />}/>
        <Route path='/container/*' element={<Container />}/>
        <Route path='/discover/*' element={<Discover />}/>

      </Routes>
    </div>
    </AnimatePresence>

    
  )
}

export default App
