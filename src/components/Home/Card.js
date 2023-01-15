import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} className="roundedCircle" />
      <Card.Body>
        <Card.Title className='me-5'>{props.title}</Card.Title>
        <Button variant="secondary" className='col-md-12 mx-auto'>{props.button}</Button>
      </Card.Body>
    </Card>
  )
}

export default BasicExample
