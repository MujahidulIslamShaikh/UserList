import React from 'react'

import './Userlist.css'

const UserCard = ({user}) => {
    // console.log(user)
  return (
    <tr className='UserCard'>
            <td>{user.id}</td>
            <td>{'img'}</td>
            <td>{user.firstName} {user.maidenName} {user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.role}</td>
            <td>{user.company.title}</td>
            <td>{user.address.state}, {(user.address.country === "United States") ? `USA` : 'Not in USA'}</td>
    </tr>
  )
}

export default UserCard 