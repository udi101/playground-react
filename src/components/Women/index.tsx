import { Person } from "../../interfaces/person.interface"

interface WomenProps {
    list: Person[]
}

export const Women = ({list}:WomenProps) => {
    return (
        <div>
            {list.map(person => (
                <div key={person.id}>{person.name}</div>
            ))}
        </div>
)
}