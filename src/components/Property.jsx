import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import star from '../assets/star.svg'

const style ={

}

function Property(props){
    const {superHost, type, rating, title, photo} = props
    return(
        <div style={{width:400, height:310, backgroundColor:'rgba(240, 248, 255, 0.626)', margin:'1%', borderRadius:'3%'}}>
            <div style={{width:400, height:240}}> 
                <img src={photo} style={{width:400, height:240, borderRadius:'3%'}}/>
            </div>
            <div style={{ width:'90%', marginLeft:'5%'}}>
                <div style={{display:'grid', gridTemplateColumns:'35% 40% 20%', justifyContent:'space-between', marginTop:'1%'}}>
                    {
                        superHost ? <button class='btn btn-outline-dark btn-sm' style={{height:'75%'}}>
                                        SuperHost
                                    </button> 
                                  : null
                    }
                    <p>{type}</p>
                    <span>
                        <img src={star} />
                        {rating}
                    </span>
                </div>
                <div>
                    <h6><strong>{title}</strong></h6>
                </div>
            </div>
        </div>
    )
}

export default Property