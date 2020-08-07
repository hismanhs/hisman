import "./Searchpost.css";
import React, { useState, useEffect } from "react";
import {Search} from './icons/search'
import {Close} from './icons/close'


export const Show = () => {
return(
<div>
    <div className='search'>
        <div className='wrapper'> 
            <span className='icon'><Search/></span>
            <span className='searchbox'>
                <input/>
            </span>
            <span className='clearicon'><Close/></span>
        </div>
    </div>
    
    <div className='buttonbar'>
        <div className='newpost'>New Post</div>
        <div className='piblisher'>Publisher</div>
    </div>
    <div className='inputtable'>
        <tr>
            <td>
                Title
            </td>
            
            <td>
                <input/>
            </td>
        </tr>

        <tr>
            <td>
                Summary
            </td>
            <td>
                <textarea type="text" cols="30" rows="5" />        
            </td>
        </tr>
    
    </div>

</div>)
}