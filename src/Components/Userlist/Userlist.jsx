import React, { useContext, useEffect, useState } from 'react'

import './Userlist.css'
import UserCard from './UserCard'
import { dataCollection } from '../../Context/Context'
import Input from '../Input/Input'

const Userlist = () => {
	const { username, userData, filterData } = useContext(dataCollection)
	const { allInput, handleSrchInput, handleFormSubmit, age } = useContext(dataCollection)

	// console.log(filterData.length)
	console.log(userData)

	return (
		<div className='Userlist pt-5'>
			<div className="container ">
				<h1 className=''>Employees</h1>

				<div className="row mt-4 ">
					<form onSubmit={handleFormSubmit} className='rounded col-12 col-lg-6'>
						<div className="row ">
							<Input InpParclass={'col-8'} type={'text'} name={'allSearch_Input'} inpPlceHold={'Search By ID, Name, Designation, Location'} InpVal={allInput} inputChange={handleSrchInput} />
							<Input InpParclass={'col-4'} type={'number'} name={'age'} inpPlceHold={'By Age'} InpVal={age} inputChange={handleSrchInput} />
						</div>
						{/* <input type="submit" value={'submit'} className='btn btn-outline-dark mt-3 ' /> */}
					</form>
					<div className="col-12 col-lg-6 row mt-3 mt-lg-0">
						{/* ============ city ============ */}
						<div className='col-4'>
							<select name="city" onChange={handleSrchInput} className='form-select'>
								<option selected>City</option>
								{
									userData.map(user => (
										<option value={user.company.address.city}>{user.company.address.city}</option>
									))
								}
							</select>
						</div>
						{/* ================= state ================== */}
						<div className='col-4'>
							<select name="state" onChange={handleSrchInput} className='form-select'>
								<option selected>State</option>
								{
									userData.map(user => (
										<option value={user.address.state}>{user.address.state}</option>
									))
								}
							</select>
						</div>
						{/* ================ gender ============== */}
						<div className='col-4'>
							<select name="gender" onChange={handleSrchInput} className='form-select'>
								<option selected>Gender</option>
								<option value={'male'}>Male</option>
								<option value={'female'}>Female</option>
							</select>
						</div>
					</div>
				</div>
				<div className="table-responsive">

					<table className='mt-5 table table-striped table-hover'>
						<thead className='table-light'>
							<tr>
								<th>ID</th>
								<th>Image</th>
								<th>Name</th>
								<th>Age</th>
								<th>Gender</th>
								<th>Demography</th>
								<th>Designation</th>
								<th>Location</th>
							</tr>
						</thead>
						<tbody>
							{
								filterData.length === 0 ? <tr><td colSpan={8} className='text-center p-3 fs-2 '>Value not found!!</td></tr> :
									filterData.map(user => (
										<UserCard key={user.id} user={user} />
									))
							}
						</tbody>
					</table>
				</div>

			</div>
		</div>
	)
}

export default Userlist