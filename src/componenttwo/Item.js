import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HNavbar from '../componenttwo/HNavbar'


export default class Item extends Component {
    state = {
        item:  [],
        asjan: JSON.parse(localStorage.getItem('key')) || [],
        t: '',
        lan: true
    }

    componentDidMount() {
        this.setState({ lan: true })
        const b = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.title}`);
        b.then((v) => {
            
            if (v.data.meals == null) {
                this.setState({ item: [] })
            } else {
                this.setState({ item: v.data.meals })
            }
        })
            // .catch(error => console.log(error))
            .finally(() => {
                this.setState({ lan: false })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.item !== prevState.asjan) {
            localStorage.setItem('key', JSON.stringify(this.state.asjan))
        }
        
    }
    todoAdd = (h) => {
        if (this.state.asjan.find(v => v.idMeal === h.idMeal)) {
            const del = this.state.asjan.filter(i => i.idMeal !== h.idMeal)
            this.setState((p) => {
                return { asjan: del }
            })
        } else {
            this.setState(pre => {
                const a = [...pre.asjan, h]
                return { asjan: a };
            })
        }
    }
    render() {
        console.log(this.props.match.params.title)

        return (
            <>
                {/* <HNavbar /> */}
                {this.state.lan ?
                    <div className="text-center" style={{ marginTop: "400px" }}>
                        <Spinner animation="border" size="lg" />
                    </div> :
                    <div className='d-flex justify-content-around flex-wrap'>{console.log(this.state.item)}
                        {this.state.item.map((h) => {
                            return (
                                <Card style={{ width: '18rem', marginTop: "20px",textDecoration:"none"}}>
                                    <Card.Img  className="p-3"variant="top" src={h.strMealThumb} />
                                    <Card.Body>
                                        <Card.Title  as={Link} to={`/about/${h.idMeal}`} style={{textDecoration:"none"}} className="ml-5">{h.strMeal}</Card.Title> </Card.Body>
                                        <Button type={'button'} className={this.state.asjan.find(v => v.idMeal === h.idMeal) ?'btn btn-danger'  : 'btn btn-success'} onClick={() => this.todoAdd(h)}>{this.state.asjan.find(v => v.idMeal === h.idMeal) ? 'Удалить' : ' Добавить '}</Button>
                                   
                                </Card>
                            )
                        })}
                    </div>}
            </>
        )
    }
}