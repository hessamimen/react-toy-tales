import React, {useState, useEffect} from 'react'

function ToyCard() {
    

    const [toys, setToys] = useState([]);

    const [number, setNumber] = useState(0);
    
    useEffect(() => {
      // first
      console.log(number)
    
      return () => { // cleanup function
      }

    }, [number])

    // let handleClick = () => {}
    


    // fetchToys = () =>{
    // fetch('http://localhost:3000/toys')
    // .then(res => res.json())
    // .then(data => {
    //     this.setState({
    //         toys: data
    //     })
    //     console.log(this.state.toys)
    // }
    //     )
    // }
    
    // componentDidMount(){
    //     this.fetchToys() 
    // }
    
    // handleDelete = (toy) => {
    //   fetch(`http://localhost:3000/toys/${toy.id}`,{
    //     method:'DELETE'})
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
        
    //     });
    // }
    
    // handleLikes = (toy) =>{
    //   fetch(`http://localhost:3000/toys/${toy.id}`,{
    //     method:'PATCH',
    //     headers: {`
    //       'Content-type': 'application/json'
    //       },
    //     body: JSON.stringify({
    //       'likes': toy.likes +=1
    //     })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
        
    //     });
    // }

  return (
    <button className="like-btn" onClick={() => setNumber(number => number+1)}> {number} Like {'<3'}</button>
    // this.state.toys.map((toy, index) => (
    //     <div className="card" key={index}>
    //     <h2>{toy.name /* Toy's Name */}</h2>
    //     <img src={toy.image /* Toy's Image */} alt={toy.name /* Toy's Name */} className="toy-avatar" />
    //     <p>{toy.likes /* Toy's Likes */} Likes </p>
    //     <button className="like-btn" onClick={()=> this.handleLikes(toy)}>Like {'<3'}</button>
    //     <button className="del-btn" onClick={() => this.handleDelete(toy)}>Donate to GoodWill</button>
    //   </div>
    //   ))`
  )
}

export default ToyCard