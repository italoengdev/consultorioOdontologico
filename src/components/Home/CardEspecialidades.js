import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function BasicExample(props) {
  return (
    <Card className='carousel-desk mx-auto' style={{ width: '16rem',height:"25rem" , borderRadius: "20%"}}>
      <Card.Img style={{ borderRadius: "15%",height:"25rem"}} src={props.img}/>
      <Card.ImgOverlay>
      <Card.Body className='p-1' style={{ marginTop:"15rem", fontWeight:"bolder"}}>
        <Card.Title style={{ width: '16rem',fontWeight:"bold"}} className='me-5'>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
        {props.button ? <Button variant="secondary" className='col-md-12 mx-auto'>{props.button}</Button> : ""}
      </Card.Body>
      </Card.ImgOverlay>
      
    </Card>
  )
}

export default BasicExample
