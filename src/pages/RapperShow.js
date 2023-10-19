import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const RapperShow = ({ rappers }) => {
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
          </Card>
        )}
      </main>
    </>
  )
}

export default RapperShow