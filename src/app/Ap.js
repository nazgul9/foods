import React, { Component } from 'react'
import "react-bootstrap";
import Category from '../componenttwo/Category'
import { Switch, Route, Link } from "react-router-dom"
import Item from "../componenttwo/Item"
import About from '../componenttwo/About';
import Basket from '../componenttwo/Basket'
import CountFoods from '../componenttwo/CountFoods';
import Search from '../componenttwo/Search';
import { FormControl, NavDropdown, Nav, Button, Navbar, Container, Form } from "react-bootstrap"
import Footer from '../componenttwo/Footer';
import axios from 'axios';

export default class Ap extends Component {
  state = {
    categor: []
  }
  componentDidMount(){
    const t = axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        t.then((o) => {
          console.log(o.data)
          this.setState({ categor: o.data.meals })
        })
  }
  
  render() {
    const r = this.state.categor || []
    return (
      <>
        <Navbar className="navbar navbar-secondary bg-secondary mb-5 navbar navbar-inverse navbar-fixed-top" expand="lg">
          <Container>
            <Link to="/" style={{ textDecoration: "none" }}><h3>Osh Food</h3></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" mr-auto my-2 my-lg-0 me-auto header__lyst"
              style={{ maxHeight: '100px' }}
              >
                <div className="header__item ">
                  <Nav.Link as={Link} to="/" className="header__link">Home
                  </Nav.Link>
                </div>
                <NavDropdown title="Countries" id="navbarScrollingDropdown">
                  {r.map((g) =>
                    // <NavDropdown.Item as={Link} to={`/countfoods/${g.strArea}`} href="#action3" value={g.strArea}>{g.strArea}</NavDropdown.Item>)}
                    <NavDropdown.Item as={Link} to={`/countfoods/${g.strArea}`} href="#action3" value={g.strArea}>{console.log(g.idArea)}{g.strArea}</NavDropdown.Item>)}
                </NavDropdown>
                <Nav.Link as={Link} to="/Basket">Basket
                </Nav.Link>
               
              </Nav>
              <label>
                <Form className="d-flex forms">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-4"
                    aria-label="Search"
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                  <Button type={'button'} variant="outline-success"
                    as={Link} to={`/Search/${this.state.search}`}>Search</Button>
                </Form>
              </label>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Search/:id" component={Search} />
          <Route path="/countfoods/:id2" component={CountFoods} />
          <Route path="/about/:id" component={About} />
          <Route path="/item/:title" component={Item} />
          <Route path="/Basket" component={Basket} />
          <Route path='/'>
            <Category />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  }
}
