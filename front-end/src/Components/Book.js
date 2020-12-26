import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBookInfo } from '../Reducers/bookInfoReducer'

const Book = ({ info }) => {
  const dispatch = useDispatch()
  
  const setInfo = async () => {
    dispatch(setBookInfo(info))
    console.log(info)
    // try {
    //   await setBookInfo(info)
    // } catch (error) {
    //   console.log(error)
    // }
  }

    return (
      <p>
        <Link to={`/search/${info.etag}`}>
          <Image src={info.volumeInfo.imageLinks.thumbnail} onClick={() => setInfo()} />
        </Link>
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