import React, { useState, useEffect }  from 'react'
import Axios from 'axios'
import './static/Search.css'

const Search = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [copy, setCopy] = useState("")
    const [data, setData] = useState([])

            
    const searchRecordByName = () => {
        Axios.get(`http://localhost:3000/search/searchRecordByName/${name}`)
        .then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        searchRecordByName()
    }, [])

    const searchRecordByPhone = () => {
        Axios.get(`http://localhost:3000/search/searchRecordByPhone/${phone}`)
        .then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        searchRecordByPhone()
    }, [])

    const searchRecordByCopy = () => {
        Axios.get(`http://localhost:3000/search/searchRecordByCopy/${copy}`)
        .then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        searchRecordByCopy()
    }, [])

    const searchRecordByDate = () => {
        Axios.get(`http://localhost:3000/search/searchRecordByDate/${date}`)
        .then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        searchRecordByDate()
    }, [])

    const C = () => {
        <input></input> 
    }
    return(
        <>
        
        <h1 className="heading">SEARCH A ENTRY</h1>
        <div className="for">
        <form className="form">
            <input type="text" onKeyUp={searchRecordByName} onChange={(e) => {setName(e.target.value)}} placeholder="search by Name"></input> <br/>
            <input type="number" onKeyUp={searchRecordByPhone} onChange={(e) => {setPhone(e.target.value)}} placeholder="search by Phone no."></input><br/>
            <input type="number" onKeyUp={searchRecordByCopy} onChange={(e) => {setCopy(e.target.value)}} placeholder="search by copy no."></input><br/>
            <input type="date" onKeyUp={searchRecordByDate} onChange={(e) => {setDate(e.target.value)}} placeholder="search by date"></input><br/>

            
        </form>
        </div>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">NAME</th>
                <th scope="col">PHONE NO.</th>
                <th scope="col">COPY</th>
                <th scope="col">DATE</th>
                </tr>
            </thead>
            <tbody>
                {data.map(client => (
                    <tr>
                        <td>{client.name} </td>
                        <td>{client.phone} </td>
                        <td onClick={C}>{client.copy}</td>
                        <td>{client.date}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Search

