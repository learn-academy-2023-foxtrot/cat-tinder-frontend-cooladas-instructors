import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const RapperShow = ({ rappers, deleteRapper }) => {
  const { id } = useParams()
  let currentRapper = rappers?.find((rapper) => rapper.id === +id)
  return (
    <>
      <h2>RapperShow page</h2>
      <main className="card">
        {currentRapper && (
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt={`profile picture for ${currentRapper.name}`}
              src={currentRapper.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                Flow Master: {currentRapper.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {currentRapper.age}
              </CardSubtitle>
              <CardText>
                {currentRapper.enjoys}
              </CardText>
            </CardBody>
            <NavLink to={`/rapperedit/${currentRapper.id}`}>
              <Button name="submit">
                Edit this Flow Master
              </Button>
            </NavLink>
            <NavLink to="/rapperindex">
              <Button name="submit" onClick={() =>{deleteRapper(`${currentRapper.id}`)}}>
                Delete this Flow Master
              </Button>
            </NavLink>
          </Card>
        )}
      </main>
    </>
  )
}

export default RapperShow