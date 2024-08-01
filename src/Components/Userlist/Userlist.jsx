import React, { useContext, useEffect, useState } from 'react'

import './Userlist.css'
import UserCard from './UserCard'
import { dataCollection } from '../../Context/Context'
import Input from '../Input/Input'

const Userlist = () => {
	const { username, userData, filterData, setFilterData } = useContext(dataCollection)
	const { allInput, handleSrchInput, handleFormSubmit, age } = useContext(dataCollection)
	const { handSortById, handSortByName, handSortByAge, pageNumbers, currentPage, currentUsers, paginate } = useContext(dataCollection)




	// const [currentPage, setCurrentPage] = useState(1);
	// const usersPerPage = 10; // 10 users per page

	// const indexOfLastUser = currentPage * usersPerPage;
	// const indexOfFirstUser = indexOfLastUser - usersPerPage;
	// const currentUsers = filterData.slice(indexOfFirstUser, indexOfLastUser);
	


	// const pageNumbers = [];
	// for (let i = 1; i <= Math.ceil(filterData.length / usersPerPage); i++) {
	// 	pageNumbers.push(i);
	// }

	// const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// console.log(userData)



	return (
		<div className='Userlist pt-2'>
			<div className="container ">
				<h3 className=''>Employees</h3>

				<div className="row mt-2 ">
					<form onSubmit={handleFormSubmit} className='rounded col-12 col-lg-6'>
						<div className="row ">
							<Input InpParclass={'col-8'} type={'text'} name={'allSearch_Input'} inpPlceHold={'Search By ID, Name, Designation, Location'} InpVal={allInput} inputChange={handleSrchInput} />
							<Input InpParclass={'col-4'} type={'number'} name={'age'} inpPlceHold={'By Age'} InpVal={age} inputChange={handleSrchInput} />
						</div>
						{/* <input type="submit" value={'submit'} className='btn btn-outline-dark mt-3 ' /> */}
					</form>
					<div className="col-12 col-lg-6 row mt-3 mt-lg-0">
						{/* ================ gender ============== */}
						<div className='col-4'>
							<select name="gender" onChange={handleSrchInput} className='form-select'>
								<option selected>Gender</option>
								<option value={'male'}>Male</option>
								<option value={'female'}>Female</option>
							</select>
						</div>
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

					</div>
				</div>
				<div className="table-responsive">

					<table className='mt-3 table table-striped table-hover'>
						<thead className='table-light'>
							<tr>
								<th>
									<div className='d-flex align-items-center gap-1'>
										ID <i className='bx bx-vertical-bottom' onClick={handSortById}></i>
									</div>
								</th>
								<th>Image</th>
								<th>
									<div className='d-flex align-items-center gap-1'>
										Name <i className='bx bx-vertical-bottom' onClick={handSortByName}></i>
									</div>
								</th>
								<th>
									<div className='d-flex align-items-center gap-1'>
										Age <i className='bx bx-vertical-bottom' onClick={handSortByAge}></i>
									</div>
								</th>
								<th>Gender</th>
								<th>Demography</th>
								<th>Designation</th>
								<th>City</th>
								<th>Location</th>
							</tr>
						</thead>
						<tbody>
							{
								filterData.length === 0 ? <tr><td colSpan={9} className='text-center p-3 fs-2 '>Value not found!!</td></tr> :
									currentUsers.map(user => (
										<UserCard key={user.id} user={user} />
									))
							}
						</tbody>
					</table>
					<nav className='d-flex justify-content-center mb-4'>
						<div className='pagination btn-group d-flex gap-2' role='group' aria-label="Basic radio toggle button group">
							{pageNumbers.map(number => (
								<React.Fragment key={number}>
									<input
										type="radio"
										className="btn-check"
										name="pagination"
										id={`page${number}`}
										autoComplete="off"
										onClick={() => paginate(number)}
									/>
									<label className="btn btn-outline-dark" htmlFor={`page${number}`}>
										{number}
									</label>
								</React.Fragment>
							))}
						</div>
					</nav>


				</div>

			</div>
		</div>
	)
}

export default Userlist