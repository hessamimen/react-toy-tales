import React from 'react';
import { useState, useEffect } from 'react';
import { fetchToys, handleDelete, handleLikes } from '../APIs/toys';

function ToyCard() {

const [toys, setToys] = useState([])

  useEffect(() => {
    fetchToys()
    .then(toys => setToys(toys))
  }, [toys])

  return (
    toys.map((toy, index) => (
      <div className="card" key={index}>
      <h2>{toy.name /* Toy's Name */}</h2>
      <img src={toy.image /* Toy's Image */} alt={toy.name /* Toy's Name */} className="toy-avatar" />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={()=> handleLikes(toy)}>Like {'<3'}</button>
      <button className="del-btn" onClick={() => handleDelete(toy)}>Donate to GoodWill</button>
    </div>
    ))
  )
}

export default ToyCard