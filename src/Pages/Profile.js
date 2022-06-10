import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
   axios
   .get (`https://jsonplaceholder.typicode.com/users/?id=${id}`)
   .then((res)=>setUser(res.data[0]))
   .catch ((err)=>console.log(err))
  })
  
  return (
    <div>
      <h2>user profile</h2>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.emil}</Card.Text>
    <Card.Text>{user.phone}</Card.Text>
    <Button variant="primary">
      <Link to={`/users`}>Go back</Link>
    </Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Profile