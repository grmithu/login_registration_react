import React from 'react'
import { DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom'



const Left = () => {
    const auth = getAuth();
    const navigate = useNavigate();


    let handleLogOut = ()=>{
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => {
              console.log(error)
        });
      }

  return (
    <div className='left'>
      <DropdownButton
            as={ButtonGroup}
            id={`dropdown-variants-warning`}
            variant="warning"
            title="info"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4"><Button onClick={handleLogOut} variant='dark' >Logout</Button></Dropdown.Item>
          </DropdownButton>
    </div>
  )
}

export default Left
