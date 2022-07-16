// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
    const handle = () =>{
        console.log("Good!")
    }
    const blur = () => {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={handle} onBlur={blur}>Eyes on me</button>
    )
}

export default EyesOnMe