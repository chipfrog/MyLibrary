import React from 'react'
import { Image } from 'react-bootstrap'

const Book = ({ info }) => {
  const bookInfo = info.volumeInfo

    return (
      <p>
        <Image src={bookInfo.imageLinks.thumbnail} />
      </p>
    )
    // return (
    //   <Card style={{ width: '10rem' }}>
    //     <Row>
    //       <Col>
    //         <Card.Img variant="top" src={bookInfo.imageLinks.thumbnail} style={{ width: '9rem' }}/>
    //       </Col>
    //       <Col>
    //         {/* <Card.Body>
    //           <Card.Title>{bookInfo.title}</Card.Title>
    //           <Card.Subtitle>{bookInfo.authors}</Card.Subtitle>
    //         </Card.Body> */}
    //       </Col>
    //     </Row>
    //   </Card>
    // )

}

export default Book