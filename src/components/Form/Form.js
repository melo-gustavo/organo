import { useState } from "react"
import Button from "../InputsForm/Button"
import Input from "../InputsForm/Input"
import Select from "../InputsForm/Select"
import "./Form.css"

const Form = (props) => {
  const teamsSelect = props.teamItems.map((element) => element.name)

  const [name, setName] = useState("")
  const [charge, setCharge] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState(teamsSelect[0])

  const saveData = (event) => {
    event.preventDefault()
    props.getCollaborator({
      name,
      charge,
      image,
      team,
    })
    setName("")
    setCharge("")
    setImage("")
  }

  return (
    <section className="form">
      <form onSubmit={saveData}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          changeInput={(name) => setName(name)}
        />
        <Input
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={charge}
          changeInput={(charge) => setCharge(charge)}
        />
        <Input
          required={false}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          changeInput={(image) => setImage(image)}
        />
        <Select
          required={true}
          label="Time"
          items={teamsSelect}
          value={team}
          changeSelect={(team) => setTeam(team)}
        />
        <Button text="Criar Card" />
      </form>
    </section>
  )
}

export default Form
