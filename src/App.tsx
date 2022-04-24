import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">GXWishlist</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl 
              type="search"
              placeholder="Search game..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light outline-success" onClick={ () => { searchGame() }}>Search</Button>
          </Form>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function searchGame(): void {
  console.log("Test")
}
