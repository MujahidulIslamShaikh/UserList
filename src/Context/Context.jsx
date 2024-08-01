import React, { Children, createContext, useEffect, useState } from 'react'

export const dataCollection = createContext(null)



const Context = ({ children }) => {

    const [userData, setUserData] = useState([])
    const [filterData, setFilterData] = useState([])

    const url = 'https://dummyjson.com/users'
    // ================= Handle API Data =====================
    const UserAPIdata = async () => {
        try {
            const response = await fetch(url)
            const result = await response.json()
            setUserData(result.users)
            setFilterData(result.users)
        } catch (error) {
            console.log(error)
        }
        // setFilterData(userData)
    }


    // ================ Handle Search Input ==============
    const [age, setAge] = useState()


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(userData)

    }

    const handleSrchInput = (event) => {
        const { name, value } = event.target


        const filtered = userData.filter(user => {
            if (name === 'allSearch_Input')
                return `${user.firstName} ${user.lastName} ${user.id} ${user.company.title} ${user.address.state}`
                    .toLowerCase().includes(value.toLowerCase());

            if (name === 'age') return user.age === Number(value)

            if (name === 'gender') return user.gender === value

            if (name === 'city') return user.address.city === value

            if (name === 'state') return user.address.state === value
        })
        setFilterData(filtered)

        if (name === 'city' && value === 'City') return setFilterData(userData)
        if (name === 'state' && value === 'State') return setFilterData(userData)
        if (name === 'gender' && value === 'Gender') return setFilterData(userData)

        if (!value) setFilterData(userData)


    }
    // ========================= Sort Data =================
    const [isAscending, setIsAscending] = useState()

    const handSortById = () => {
        const sorted = [...userData].sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);
        setFilterData(sorted);
        setIsAscending(!isAscending);
    }

    const handSortByName = () => {
        const sorted = [...userData].sort((a, b) =>
            isAscending ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName)
        );
        setFilterData(sorted);
        setIsAscending(!isAscending);
    };

    const handSortByAge = () => {
        const sorted = [...userData].sort((a, b) => isAscending ? a.age - b.age : b.age - a.age);
        setFilterData(sorted);
        setIsAscending(!isAscending);
    }
    // ================================== Pagination =======================

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10; // 10 users per page

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filterData.slice(indexOfFirstUser, indexOfLastUser);



    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterData.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        UserAPIdata()
        console.log('chala')
    }, [])

    return (
        <div className='Context'>
            <dataCollection.Provider value={{ userData, handleFormSubmit, handleSrchInput, age, filterData,
                 setFilterData, handSortById, handSortByName, handSortByAge, pageNumbers, currentPage,
                 currentUsers, paginate }}>
                {children}
            </dataCollection.Provider>
        </div>
    )
}

export default Context