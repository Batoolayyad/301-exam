import React, { Component } from 'react'
import  {Form ,Button} from 'react-bootstrap'

 class updateForm extends Component {
    render() {
        return (
            <>
            <Form onSubmit={(e)=>this.props.updateData(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" value={this.props.name} onChange={(e)=>this.props.changeName(e)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" value={this.props.img} onChange={(e)=>this.props.changeImg(e)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>level</Form.Label>
    <Form.Control type="text" value={this.props.level} onChange={(e)=>this.props.changeLevel(e)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                
            </>
        )
    }
}

export default updateForm
