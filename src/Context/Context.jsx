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

    useEffect(() => {
        UserAPIdata()
        console.log('chala')
    }, [])

    return (
        <div className='Context'>
            <dataCollection.Provider value={{ userData, handleFormSubmit, handleSrchInput, age, filterData }}>
                {children}
            </dataCollection.Provider>
        </div>
    )
}

export default Context