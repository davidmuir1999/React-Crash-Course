import React, { useEffect, useState } from "react"
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])
    async function fetchUsers() {
        const { data } = (await axios.get("https://jsonplaceholder.typicode.com/users"))
        setUsers(data)
    }
    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        },500)
        
    }, [])
    return <div>
        
    </div>
}

export default Home