import React, { Component } from 'react'
import  {Card, Button} from 'react-bootstrap'


 class favDigimon extends Component {
    render() {
        return (
            <>
           
            <Card style={{ width: '18rem' }} key={this.props.idx}>
  <Card.Img variant="top" src={this.props.favdigimon.img} />
  <Card.Body>
    <Card.Title>{this.props.favdigimon.name}</Card.Title>
    <Card.Text>{this.props.favdigimon.level}</Card.Text>
    <Button variant="primary" onClick={()=>this.props.deleteFav(this.props.idx)}>delete</Button>
    <Button variant="primary" onClick={()=>this.props.showForm(this.props.idx)}>Update</Button>
  </Card.Body>
</Card>      
                
            </>
        )
    }
}

export default favDigimon
