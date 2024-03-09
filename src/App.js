import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Team from "./components/Team/Team"
import Form from "./components/Form/Form"

function App() {
  const teamItems = [
    // {
    //   id: 0,
    //   name: "-",
    //   primaryColor: "",
    //   secondaryColor: "",
    // },
    {
      id: 1,
      name: "Programação",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      id: 2,
      name: "Back-end",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      id: 3,
      name: "Data Science",
      primaryColor: "#F0F8E2",
      secondaryColor: "#A6D157",
    },
    {
      id: 4,
      name: "DevOps",
      primaryColor: "#FDE7E8",
      secondaryColor: "#E06B69",
    },
    {
      id: 5,
      name: "Front-end",
      primaryColor: "#FAE9F5",
      secondaryColor: "#DB6EBF",
    },
    {
      id: 6,
      name: "Full Stack",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
    {
      id: 7,
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  const getCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form getCollaborator={(collaborator) => getCollaborator(collaborator)} teamItems={teamItems} />
      <Team teams={teamItems} collaborators={collaborators} />
    </div>
  )
}

export default App
