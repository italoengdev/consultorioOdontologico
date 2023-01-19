
import Card from 'react-bootstrap/Card'



function BasicExample(props) {
  return (
    <Card className='carousel-desk mx-auto' style={{ width: '16rem',height:"25rem" , borderRadius: "10%"}}>
      <Card.Img style={{ borderRadius: "10%",height:"20rem"}} src={props.img}/>
      <Card.ImgOverlay>
      <Card.Body className='p-1' style={{ marginTop:"19rem", fontWeight:"bolder"}}>
        <Card.Title style={{ width: '16rem',fontWeight:"bold"}} className='me-5'>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
      </Card.Body>
      </Card.ImgOverlay>
      
    </Card>
  )
}

export default BasicExample
