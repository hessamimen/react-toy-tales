import React, { Component } from 'react';
import { useState } from 'react';
import { addToy } from '../APIs/toys';

function ToyForm() {
  
  const [newToy, setNewToy] = useState({
    name: '',
    image: ''
  })

  const handleInputChange = event => {
    setNewToy({
      ...newToy,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if([event.target.name] !=='') {
      addToy(newToy)
    }
    setNewToy({
       name: "",
       image: ""
    })
  }
  
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={newToy.name} onChange={handleInputChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={newToy.image} onChange={handleInputChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }
  

export default ToyForm