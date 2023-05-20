import { FormEvent, useState } from "react"
import { Child } from "../Child"
import { ExpensiveComponent } from "../ExpensiveComponent"
import { Person } from "../../interfaces/person.interface"

export const Parent = () => {
    const [list,setList] = useState(initialList)
    const [text, setText] = useState<string>('')

    const inputHandler = (e:FormEvent<HTMLInputElement>) => {
        const {value} = e.target as HTMLTextAreaElement
        setText(value)
    }
    return (
        <div>
        <div>This is the Parent</div>
        <div><input className="border" type="text" onInput={inputHandler} /></div>
        <Child list={list} setList={setList}>
            <ExpensiveComponent />
        </Child>
        </div>
    )
}

const initialList:Person[] = [
    {id:'1', name: 'Udi',gender: 'Male' },
    {id:'2', name: 'Mazal', gender: 'Female'},
    {id:'3', name: 'Avigail', gender: 'Female'},
    {id:'5', name: 'Sabrina', gender: 'Female'},
    {id:'6', name: 'Maya', gender: 'Female'},
    {id: '7', name: 'Erez', gender: 'Male'}
]