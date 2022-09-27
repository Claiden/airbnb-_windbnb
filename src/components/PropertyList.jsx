import React from 'react'
import Property from './Property'
import objects from '../utils/stays.json'

const style ={
    marginTop:'30px',
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
}

function PropertyList (){
    const properties = objects.map((objects) =>{
        return <Property 
                  superHost = {objects.superHost}
                  type = {objects.type}
                  rating = {objects.rating}
                  title = {objects.title}
                  photo = {objects.photo}
               />
    })

    return(
        <div style={style}>
            {properties}
        </div>
    )
}

export default PropertyList