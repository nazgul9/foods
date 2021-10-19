import React, { Component } from 'react'
import "react-bootstrap";
import Category from '../componenttwo/Category'
import { Switch, Route } from "react-router-dom"
import Item from "../componenttwo/Item"
import About from '../componenttwo/About';
import Basket from '../componenttwo/Basket'
// import Swit from "react-switch";
import CountFoods from '../componenttwo/CountFoods';
import Search from '../componenttwo/Search';

export default class Ap extends Component {

    render() {
        return (
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
        )
    }
}
