import React from 'react'
import SearchBar from './SearchBar'
import logo from '../assets/logo.svg'

const style={
    display:'grid',
    gridTemplateColumns:'80% 20%',
    padding:'2% 5% 0 5%',
}

function Header(){
    return(
        <>
        <div style={style}>
            <img src={logo}/>
            <SearchBar/>
        </div>
        </>
    )
}

export default Header