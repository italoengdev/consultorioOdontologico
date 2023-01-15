import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function BasicExample(props) {
  return (
    <Card style={{ width: '20rem',height:"22rem" }}>
      <Card.Img src={props.img}/>
     
      <Card.Body>
        <Card.Title style={{ width: '18rem' }} className='me-5'>{props.title}</Card.Title>
        <Button variant="secondary" className='col-md-12 mx-auto'>{props.button}</Button>
      </Card.Body>
     
      
    </Card>
  )
}

export default BasicExample
