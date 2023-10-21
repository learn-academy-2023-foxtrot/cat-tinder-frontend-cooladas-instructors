import React, {useState} from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const RapperEdit = ({rappers, updateRapper}) => {
  const {id} = useParams()
  let currentRapper = rappers?.find((rapper) => rapper.id === +id)

  const [editRapper, setEditRapper] = useState({
    name: currentRapper?.name,
    age: currentRapper?.age,
    enjoys: currentRapper?.enjoys,
    image: currentRapper?.image
  })

  
  const handleChange = (e) => {
    setEditRapper({...editRapper, [e.target.name]: e.target.value})
  }
  
  const navigate = useNavigate()

  const handleSubmit = () => {
    updateRapper(editRapper, currentRapper.id)
    navigate("/rapperindex")
  }

  return (
    <>
      <h2>Add a Flow Master</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={editRapper.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            type="number"
            onChange={handleChange}
            value={editRapper.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            type="text"
            onChange={handleChange}
            value={editRapper.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            type="url"
            onChange={handleChange}
            value={editRapper.image}
          />
        </FormGroup>
        <Button name="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )

}

export default RapperEdit