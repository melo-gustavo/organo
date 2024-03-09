import TeamMember from "./TeamMember"
import "./css/Team.css"

const Team = ({ teams, collaborators }) => {
  return (
    <section className="team">
      {teams.map((team) => {
        const teamCollaborators = collaborators.filter(
          (col) => col.team === team.name
        )
        if (teamCollaborators.length > 0) {
          return (
            <div key={team.id} style={{ backgroundColor: team.primaryColor }}>
              <h3 style={{ borderColor: team.secondaryColor }}>{team.name}</h3>
              <div className="team-members">
                {teamCollaborators.map((col) => (
                  <TeamMember
                    key={col.id}
                    name={col.name}
                    charge={col.charge}
                    color={team.secondaryColor}
                    image={col.image}
                  />
                ))}
              </div>
            </div>
          )
        }
        return null
      })}
    </section>
  )
}

export default Team
