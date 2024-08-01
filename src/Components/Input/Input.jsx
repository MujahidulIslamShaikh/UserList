import React, { useContext, useState } from 'react'
import { dataCollection } from '../../Context/Context'

const Input = ({ type,name, InpVal, inputChange, InpParclass, LabelName, inpPlceHold }) => {


    return (
            <div className={InpParclass}>
                {/* <label className='form-label'>{LabelName}</label> */}
                <input type={type} name={name} value={InpVal} placeholder={inpPlceHold} onChange={inputChange} className='form-control' />
            </div>
    )
}

export default Input