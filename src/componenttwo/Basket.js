import React, { Component } from 'react'
import { Button, Row, Container, Card, Modal, Form } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = "2067225875:AAF_e2uEQ6ROJmZGKQYvfDf4Kn-nZhYxh2Y"

export default class Basket extends Component {
  componentDidMount() {

    axios.get(`https://api.telegram.org/bot${token}/getUpdates`)
      .then((v) => {
        console.log(v);
      })
  }
  state = {
    item: JSON.parse(localStorage.getItem('key')) || [],
    show: false,
    number: "",
    name: "",
    Address: "",
    chec: [],
    remove: false,
    display: false,


  }
  componentDidUpdate(prevProps, prevState,) {
    if (this.state.item !== prevState.item) {
      localStorage.setItem('key', JSON.stringify(this.state.item));
    }
  }
  todo() {
    this.setState({ show: !this.state.show })
  }
  todoAdd = (h) => {
    if (this.state.item.find(v => v.idMeal === h.idMeal)) {
      const del = this.state.item.filter(i => i.idMeal !== h.idMeal)
      this.setState(() => {
        return { item: del }
      })
    } else {
      this.setState({
        item: [...this.state.item, h]

      })
    }
  }
  notify = () => toast.success("Wow so easy!")
  to = () => {

    this.setState({ show: !this.state.show })
    axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
      params: {
        parse_mode: "HTML",
        chat_id: "1148401412",
        text: `<b>aty</b>: <i>${this.state.name}</i>\n<b>number</b>: <i>${this.state.number}</i>\n<b>заказ</b>: <i>${this.state.chec.map(y => y.strMeal)}</i>`


      }
    })
      .then((v) => {
        console.log(v);
        this.notify()

      })

  }
  two = () => {
    if (this.state.remove) {
      const a = this.state.item.filter(s => !this.state.chec.find(t => t.idMeal === s.idMeal));
      this.setState({ item: a })
    }
    this.to();
  }

  check = (n) => {
    if (this.state.chec.find(v => v === n.strMeal)) {
      const b = this.state.chec.filter(x => x !== n.strMeal)
      this.setState((p) => {
        return { chec: b }
      })
    } else {
      this.setState(pre => {
        const f = [...pre.chec, n.strMeal]
        return { chec: f };
      })
    }
  }
  remov = () => {
    if (this.state.remove) {
      const a = this.state.item.filter(s => !this.state.chec.find(t => t.idMeal === s.idMeal));
      this.setState({ item: a })
    }
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-between m-5">
          <h1>Producs({this.state.item.length})</h1>
          <Button className=" btn btn-success" onClick={() => { this.todo() }}>Older({this.state.item.length})meals</Button></div>

        <Modal show={this.state.show} onHide={() => { this.todo() }}>
          <Modal.Header closeButton>Order Meals</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label >name</Form.Label>
                <Form.Control onChange={(e) => { this.setState({ name: e.target.value }) }} type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupNumber">
                <Form.Label >Contact phone number</Form.Label>
                <Form.Control onChange={(e) => { this.setState({ number: e.target.value }) }} type="text" placeholder="phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" onChange={(e) => { this.setState({ Address: e.target.value }) }} placeholder="Address" />
              </Form.Group >
              {this.state.item.map((v) => {
                return (
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={v.strMeal}
                      onChange={(e) => this.setState((prev) => {
                        const a = e.target.checked ? [...prev.chec, v] : prev.chec.filter(t => t.strMeal !== v.strMeal)
                        return { chec: a }
                      })}
                    />
                  </Form.Group>
                )
              })}
              <hr />
              <div className="d-block" style={{ display: "inline-block" }}>
                <input onChange={(e) => this.setState({ remove: e.target.checked })} type="checkbox" id="coding" name="interest" value="coding" />
                <label for="coding">Remove meal from trash after order</label>
              </div>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-secondary" onClick={() => { this.todo() }}>Close</Button>
            <Button type="button" disabled={this.state.number === '' || this.state.name === '' || this.state.Address === '' || this.state.chec.length === 0} class="btn btn-primary" onClick={() => this.two()}
            >
              Send this
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
        <ToastContainer />

          {!(this.state.item.length > 0) && <div align='center'style={{width:550,height:550,backgroundColor:"white",overflow:0.3,marginLeft:450,marginTop:"40px"}} ><h1 style={{fontSize:'3rem',marginTop:'25px'}}>там пусто</h1></div>}
        </div>
        <Container>
          <Row>
            {this.state.item.map((h) => {
              return (
                <Card className="p-3" style={{
                  width: '18rem', margin: '20px',
                }}>
                  <Card.Img className="mt-4" variant="top" src={h.strMealThumb} />
                  <Card.Body>
                    <Card.Title  style={{textDecoration:"none"}}as={Link} to={`/about/${h.idMeal}`}>{h.strMeal}</Card.Title> </Card.Body>
                  <Button type={'button'} className={this.state.item.find(v => v.idMeal === h.idMeal) ? 'btn btn-danger' : 'btn btn-success'} onClick={() => this.todoAdd(h)}>{this.state.item.find(v => v.idMeal === h.idMeal) ? 'Удалить' : ' Добавить '}</Button>
                </Card>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}
