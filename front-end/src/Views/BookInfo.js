import React from 'react'

const BookInfo = ({ bookInfo }) => {

  if (bookInfo === null) {
    return (
      <h2>undefined</h2>
    )
  }

  
  return (
    <h2 className="mt-3 text-center">{bookInfo.volumeInfo.title}</h2>
  )


}

export default BookInfo