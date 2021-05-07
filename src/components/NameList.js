import React from 'react'

function NameList() {
    //const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {id: 1,name: 'Bruce',age: 30,skill: 'React'},
        {id: 2,name: 'Clark',age: 29,skill: 'Angular'},
        {id: 3,name: 'Diana',age: 28,skill: 'Deno'},
    ]
const personList = persons.map(person =><h2>I am { person.name } ,i am {person.age} years old, and i am instrate in {person.skill}</h2>)
    return <div> {personList}</div>
}

export default NameList
