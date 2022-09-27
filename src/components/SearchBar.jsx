import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import searchIcon from '../assets/search.svg'

function SearchBar({selectedRegion}){
    return(
        <>
         <div class="input-group input-group-sm">
            <span class="input-group-text">PAIS</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
            <span class="input-group-text"><img src={searchIcon}/></span>
        </div>
        </>
    )
}

export default SearchBar