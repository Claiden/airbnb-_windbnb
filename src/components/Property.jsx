import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import objects from '../utils/stays.json'
import star from '../assets/star.svg'

const style ={

}

function Property(props){
    const [superHost, type, rating, title] = props
    return(
        <div style={{width:300, height:300, position:'relative'}}>
            <div style={{width:300, height:240,}}> 
                <img src=''/>
            </div>
            <div>
                <div style={{display:'grid', gridTemplateColumns:'30% 30% 30%', justifyItems:'space-evenly'}}>
                    {
                        superHost ?<button class='btn btn-outline-dark'>Super Host</button> : null
                    }
                    <p>{type}</p>
                    <span><img src={star}/> {rating}</span>
                </div>
                <div style={{marginTop:'4%'}}>
                    <h6>{title}</h6>
                </div>
            </div>
        </div>
    )
}

export default Property