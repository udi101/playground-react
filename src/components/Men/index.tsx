import { Person } from "../../interfaces/person.interface"

interface MenProps {
    list: Person[]
}

export const Men = ({list}:MenProps) => {
    return (
        <div>
            {list.map(person => (
                <div key={person.id}>{person.name}</div>
            ))}
        </div>
    )
}