import React, { useContext } from 'react'
import { dataCollection } from '../../Context/Context'



const Select = ({name, value, option_val }) => {
    const {userData} = useContext(dataCollection)
    return (
        <select name={name} className='form-select'>
            <option selected>--select--</option>
            {
                userData.map(user => (
                    <option value={value}>{option_val}</option>
                ))
            }
        </select>
    )
}

export default Select