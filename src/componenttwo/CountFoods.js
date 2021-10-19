import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Spinner, Navbar } from 'react-bootstrap'
import HNavbar from '../componenttwo/HNavbar'
import {Link} from "react-router-dom"

export default class CountFoods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            lan: true,
            asan:[],
            item: JSON.parse(localStorage.getItem('key')) || []

        }
        this.setState({ lan: true })
        const a = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id2}`)
        a.then((s) => {
            console.log(s)
            this.setState({ meals: s.data.meals })
        })
            .catch(error => console.log(error))
            .finally(() => {
                this.setState({ lan: false })
            })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps !== this.props.match.params.id2) {
            const a = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id2}`)
            a.then((s) => {
                console.log(s)
                this.setState({ meals: s.data.meals })
            })
        }
    }
    todoAdd = (h) => {
        if (this.state.item.find(v => v.idMeal === h.idMeal)) {
            const del = this.state.item.filter(i => i.idMeal !== h.idMeal)
            this.setState((p) => {
                return { item: del }
            })
        } else {
            this.setState(pre => {
                const a = [...pre.item, h]
                return { item: a };
            })
        }
    }
    render() {

        return (
            <>
                {/* <HNavbar /> */}
                {   this.state.lan ? 
          <div className="text-center" style={{marginTop:"250px"}}>
                   <Spinner animation="border" size="sm"/>
                   </div>:
                <div className='d-flex justify-content-around flex-wrap '>
                    {this.state.meals.map((h) => {
                        return (
                            <>
                                <Card className="m-5 p-4" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className="mb-2 p-3" src={h.strMealThumb} />
                                    <Button type={'button'} className={this.state.asan.find(v => v.idMeal === h.idMeal) ?'btn btn-danger'  : 'btn btn-success'} onClick={() => this.todoAdd(h)}>{this.state.asan.find(v => v.idMeal === h.idMeal) ? 'Удалить' : ' Добавить '}</Button>
                                       <Card.Title as={Link} to={`/about/${h.idMeal}`}className="mt-2">{h.strMeal}</Card.Title>
                                </Card>
                            </>
                        )
                    })}
                    
                </div>}
            </>
        )
    }

}
