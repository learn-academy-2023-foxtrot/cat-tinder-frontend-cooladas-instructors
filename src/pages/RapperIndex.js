import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"

const RapperIndex = ({ rappers }) => {

  return (
    <>
      <h2>View the Flow Masters</h2>
      <main className="card">
        {rappers?.map((rapper, index) => {
          return (
            <div key={index} className="rapper-index-cards">
              < Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  alt={`profile picture for ${rapper.name}`}
                  src={rapper.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {rapper.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {rapper.age}
                  </CardSubtitle>
                  <Button>
                    <NavLink to={`/rappershow/${rapper.id}`} className="nav-link">
                      Click to view more
                    </NavLink>
                  </Button>
                </CardBody>
              </Card >
            </div>
          )
        })}
      </main>
    </>
  )
}

export default RapperIndex