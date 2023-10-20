import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const RapperNew = ({createRapper}) => {
 const [newRapper, setNewRapper] = useState({
  name: "",
  age: "",
  enjoys: "",
  image: ""
 })

 const navigate = useNavigate()

 const handleChange = (e) => {
  // console.log(e.target.name)
  // console.log(e.target.value)
  setNewRapper({...newRapper, [e.target.name]: e.target.value})
}
console.log("newRapper:", newRapper)

const handleSubmit = () => {
  createRapper(newRapper)
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
            placeholder="Place your name here"
            type="text"
            onChange={handleChange}
            value={newRapper.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="Place your age here"
            type="number"
            onChange={handleChange}
            value={newRapper.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="Place your enjoys here"
            type="text"
            onChange={handleChange}
            value={newRapper.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="Place your image url here"
            type="url"
            onChange={handleChange}
            value={newRapper.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default RapperNew