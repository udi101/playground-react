import { ReactChildren, ReactNode, useEffect, useState } from "react"
import { Men } from "../Men"
import { Women} from '../Women'
import classes from './Child.module.scss'
import { ExpensiveComponent } from "../ExpensiveComponent"
import { Person } from "../../interfaces/person.interface"

interface ChildProps{
    list: Person[]
    setList:Function
    children?: ReactNode
}

export const Child = ({list, setList,children}:ChildProps) => {

const [name,setName] = useState('') 

const handleInput = (e:any) => {
    setName(e?.target?.value)
}

const addHandler = () => {
    setList((list:string[]) => ([...list, 'Michal']))
}

    return (
        <div>
        <div>This is the Child</div>
        <div>
            {children}
            {/* <ExpensiveComponent /> */}
        </div>
        <div className={classes.container}>
            <div><Men list={filterByGender('Male', list)}  /></div>
            <div><Women list={filterByGender('Female', list)} /></div>
        </div>
        <div className="actions">
            <input type="text" onInput={handleInput} />
            <button onClick={addHandler}>Add to the list</button>
        </div>
        </div>
    )
}


const filterByGender = (gender: 'Male'| 'Female', personList:Person[]):Person[] => {
    console.log('Filtering...')
    return personList.filter(a => a.gender === gender)
}