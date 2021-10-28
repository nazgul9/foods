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

  render() {
 
    return (
      <> 
      {this.state.lan ? 
        <div className="text-center" style={{marginTop:"400px"}}>
                 <Spinner animation="border" size="lg"/>
                 </div>:
        <div className="row">
          <Container className="d-flex justify-content-around flex-wrap ">
            {this.state.categories.map((v) => {
              return (
                <Card as={Link} to={`/Item/${v.strCategory}`}style={{ width: "18rem", marginTop: "20px",textDecoration:"none" }}>
                  <Card.Img className="p-3" variant="top" src={v.strCategoryThumb} />
                  <Card.Body>
                    <Card.Title >{v.strCategory}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </div>}
      </>
    );
  }
}

export default Category;