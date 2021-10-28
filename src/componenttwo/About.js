import React, { Component } from 'react'
import { Card,Spinner,Container,Row, Col } from 'react-bootstrap';
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
          <div className="text-center" style={{marginTop:"400px"}}>
                   <Spinner animation="border" size="lg"/>
                   </div>:
            <div className='d-flex justify-content-around flex-wrap'>
                <Container className="shadow">
            {this.state.about.map((h)=>{
                 return(
                     <div style={{backgroundColor:"white" , opacity: 0.7}}>
                     <Card.Title className="text-center" style={{fontSize:"2.3rem"}}>{h.strMeal}</Card.Title>
                    <Row>
                        <Col xs={10} md={6} lg={5}>
                            <img style={{width:"450px", marginLeft:10}} src={h.strMealThumb}/>
                        </Col>
                        <Col xs={12} md={12} lg={5}>
                             <h2 >Area:{h.strArea}</h2> 
                            <h5> {h.strInstructions}<ReadMoreReact readMoreText="read more..." min={10} ideal={30} max={40} text={h.strInstructions} /></h5>
                        </Col>
                        </Row>
                     </div>
                   

                 )
             })}
             </Container>
         </div>}
         </>
        )
    }
}
