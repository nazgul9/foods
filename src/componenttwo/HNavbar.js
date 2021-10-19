import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, NavDropdown, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Switch from "react-switch";
import axios from 'axios'

export default class HNavbar extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  state = {
    categor: [],
    search: "",
    checked:"",
  }
  componentDidMount() {
    const t = axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    t.then((o) => {
      console.log(o.data)
      this.setState({ categor: o.data.meals })
    })

    const p = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.search}`);
    p.then((m)=>{
        console.log(m)
        console.log(this.state.search)
        this.setState({categor: m.data.meals})
    })
  }
  Add= () => {
    this.setState((p) => {
      if (this.state.search.find((v) => v.search === this.state.search))  {
        return { search: this.state.search.filter((r) => r.search !== this.state.search) };
      } else {
        const a = [...p.search, this.state.search];
        return { search: a };
      }
    });
  };
 
  render() {
    const r = this.state.categor || []
    
    return (
      <>
      
        <Navbar className="navbar navbar-dark bg-dark mb-5" expand="lg">
          <Container>
            <Link to="/"><h3>Osh Food</h3></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" mr-auto my-2 my-lg-0 me-auto "
                style={{ maxHeight: '100px' }}
              >
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/Basket" >Basket</Nav.Link>
                <NavDropdown href="#" title="Countries" id="navbarScrollingDropdown">
                  {r.map((g) =>
                    <NavDropdown.Item as={Link} to={`/countfoods/${g.strArea}`} href="#action3" value={g.strArea}>{console.log(g.idArea)}{g.strArea}</NavDropdown.Item>)}
                </NavDropdown>
              </Nav>
              <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
        <p style={{color:"red"}}>switch <b>{this.state.checked ? "ON" : "OFF" }</b></p>
      </label>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}