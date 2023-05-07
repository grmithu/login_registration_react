import React from 'react'
import {useState} from 'react'
import { Alert, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import Left from './Left';
import Right from './Right';

const Home = () => {

  const navigate = useNavigate();
  const {state} = useLocation();
  const [msg, setMsg] = useState(true) 
  const [varifyemail, setVarifyemail] = useState(false) 
  // const [handleLogOut, setHandlelogout] = useState(true) 
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if(user.emailVerified){
        setVarifyemail(true)
      }
      const uid = user.uid;
    } else {
      navigate("/login", {state: "Please login for continue"})  
    }
  });


  // console.log(auth.current.user.emailVerified)
  // if(auth.current.user.emailVerified){
  //   setVarifyemail(true) 
  // }



  let handleLogOut = ()=>{
    
    signOut(auth).then(() => {
        navigate("/login");
    }).catch((error) => {
          console.log(error)
    });
  }

setTimeout(()=>{
  setMsg(false)
},2000)


  return (
    <div>
      {/* {msg
      ?
      <Alert variant='primary'><h1>{state}</h1></Alert>
      :
      ""} */}

        {varifyemail
        ?
            <Row>
              <Col lg={3}><Left /></Col>
              <Col lg={6}>Middle</Col>
              <Col lg={3}><Right /></Col>
            </Row>
          
          // <Button onClick={handleLogOut} variant='dark'>Logout</Button>
        :
          <>
          <Button variant='dark'>Please verify your email</Button>
          <Button onClick={handleLogOut} variant='dark' >Logout</Button>
          </>
        }

    </div>
  )
}

export default Home
