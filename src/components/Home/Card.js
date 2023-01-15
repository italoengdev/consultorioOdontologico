import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function BasicExample(props) {
  return (
    <Card style={{ width: '20rem',height:"25rem" , borderRadius: "20%"}}>
      <Card.Img style={{ borderRadius: "15%",height:"25rem"}} src={props.img}/>
      <Card.ImgOverlay>
      <Card.Body style={{ marginTop:"15rem"}}>
        <Card.Title style={{ width: '16rem',fontWeight:"bold"}} className='me-5'>{props.title}</Card.Title>
        <Button variant="secondary" className='col-md-12 mx-auto'>{props.button}</Button>
      </Card.Body>
      </Card.ImgOverlay>
      
    </Card>
  )
}

export default BasicExample
