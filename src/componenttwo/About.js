import React, { Component } from 'react'
import { Card,Spinner,Container,Row, Col } from 'react-bootstrap';
import HNavbar from '../componenttwo/HNavbar'
import axios from 'axios'
import ReadMoreReact from 'read-more-react'

export default class About extends Component {
    state={
        about:[],
        lan:true
    }
    componentDidMount(){
        this.setState({lan:true})
        const b = axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`);
        b.then((v)=>{
            console.log(v.data)
            this.setState({about:v.data.meals})
            
})
.catch(error=>console.log(error))
      .finally(()=>{
        this.setState({lan:false})
    })
    }
    render() {
        return (
            <>
            {/* <HNavbar/> */}
            {   this.state.lan ? 
          <div className="text-center" style={{marginTop:"250px"}}>
                   <Spinner animation="border" size="sm"/>
                   </div>:null}
            <div className='d-flex justify-content-around flex-wrap'>
                <Container className="shadow">
            {this.state.about.map((h)=>{
                 return(
                     <>
                     <Card.Title className="text-center" style={{fontSize:"3rem"}}>{h.strMeal}</Card.Title>
                    <Row>
                        <Col xs={12} md={12} lg={7}>
                            <img style={{width:"450px"}} src={h.strMealThumb}/>
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                             <h2>Area:{h.strArea}</h2> 
                             {h.strInstructions}<ReadMoreReact readMoreText="read more" min={10} ideal={30} max={40} text={h.strInstructions} />
                        </Col>
                        </Row>
                     </>
                   

                 )
             })}
             </Container>
         </div>
         </>
        )
    }
}
