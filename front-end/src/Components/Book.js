import React from 'react'

const Book = ({ info }) => {
  if (info.volumeInfo.imageLinks !== undefined) {
    return (
      <div>
        <img src={info.volumeInfo.imageLinks.thumbnail} alt={info.volumeInfo.title} />
      </div>
    )
  }
  return null 
}

export default Book