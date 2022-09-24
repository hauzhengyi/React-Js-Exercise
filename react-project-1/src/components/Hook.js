import React, { useState } from 'react'

const Hook = props => {
    const [personState, setPersonState] = useState({
        person:[
            {name : 'Xin Hui', age : '23'},
            {name : 'Zheng Yi', age : '25'}
        ]
    })

    return (
        <div>
            <h1>My name is {personState.person[0].name}</h1>
            <h1>My name is {personState.person[1].name}</h1>
        </div>
    )
}

export default Hook