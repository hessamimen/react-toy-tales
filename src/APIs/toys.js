

export function fetchToys () {
    return fetch('http://localhost:3000/toys')
    .then(res => res.json())
    // .then(data => data)
    }

export function addToy(newToy) {
  return (
    fetch('http://localhost:3000/toys',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        'name': newToy.name,
        'image': newToy.image,
        'likes': 0
      })
    })
    .then(res => res.json())
    .then(function(res){ console.log(res) })
  )
  }

  export function handleDelete (toy) {
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method:'DELETE'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
      
      });
  }

  export function handleLikes(toy) {
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method:'PATCH',
      headers: {
        'Content-type': 'application/json'
        },
      body: JSON.stringify({
        'likes': toy.likes +=1
      })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      
      });
  }

