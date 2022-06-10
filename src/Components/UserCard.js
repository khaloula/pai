import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UserCard = (user) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" />
  <Card.Body>
    <Card.Title> {user.name}</Card.Title>
    <Card.Text>{user.emil}</Card.Text>
    <Card.Text>{user.phone}</Card.Text>
    
    <Button variant="primary">
      <Link to ={`/${ user.di}`}> Go check my profile</Link>
    </Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard