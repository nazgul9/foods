import React from 'react';
import { Card, Container, Spinner, Nav, Navbar, NavDropdown, FormControl, Form, Button, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Switch from "react-switch";
import { RiHome4Line, RiShoppingBasketLine } from "react-icons/ri";


class Category extends React.Component {
  state = {
    categories: [],
    lan: true,
    text: "",
    categor: [],
    checked: "",
    search: ""
  }
  componentDidMount() {
    this.setState({ lan: true })
    const a = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    a.then((response) => {
      console.log(response)
      this.setState({ categories: response.data.categories })
    })


      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ lan: false })
      })
    const t = axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    t.then((o) => {
      console.log(o.data)
      this.setState({ categor: o.data.meals })
    })
  }
  // Add = () => {
  //   console.log(this.state.search);

  //   this.state.search !== '' ?
  //     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.search}`)
  //       .then((m) => {
  //         console.log(m)
  //         this.setState({ searchs: m.data.meals })
  //         console.log(this.state.searchs)
  //       }) : this.setState({ searchs: [] })
  // };
  render() {
    //    console.log(this.state.categorys) 
    //   const categories = axios.filter(
    //     v => v.title.toLowerCase().indexOf(this.state.text && this.state.text.toLowerCase()) !== -1
    // )
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
                <Nav.Link as={Link} to="/" ><RiHome4Line />
                </Nav.Link>
                <Nav.Link as={Link} to="/Basket" ><RiShoppingBasketLine />
                </Nav.Link>
                <NavDropdown title="Countries" id="navbarScrollingDropdown">

                  {this.state.categor.map((g) =>
                    <NavDropdown.Item as={Link} to={`/countfoods/${g.strArea}`} href="#action3" value={g.strArea}>{g.strArea}</NavDropdown.Item>)}
                </NavDropdown>
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
        <div className="row">
          <Container className="d-flex justify-content-around flex-wrap mt-3">
            {this.state.categories.map((v) => {
              return (
                <Card style={{ width: "18rem", marginTop: "20px" }}>
                  <Card.Img className="p-3" variant="top" src={v.strCategoryThumb} />
                  <Card.Body>
                    <Card.Title as={Link} to={`/Item/${v.strCategory}`}>{v.strCategory}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </div>
      </>
    );
  }
}

export default Category;