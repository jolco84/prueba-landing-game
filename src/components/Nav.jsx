

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
//https://fontawesome.com/v5/docs/web/use-with/react

const Header = () => {

  return (
    <Navbar key="xl" bg="warning" expand="xl" className="mb-0" >
      <Container fluid>
      <FontAwesomeIcon icon={faGamepad } size="lg" /> 
      <FontAwesomeIcon icon={ faPlaystation } size="lg" />
        <FontAwesomeIcon icon={ faXbox } size="lg" />
        <Navbar.Brand href="#" className="text-light text-center"><h1>START GAME</h1></Navbar.Brand>        
        <FontAwesomeIcon icon={faGamepad } size="lg" /> 
      <FontAwesomeIcon icon={ faPlaystation } size="lg" />
        <FontAwesomeIcon icon={ faXbox } size="lg" />
      </Container>
    </Navbar>
  );

}

export default Header;