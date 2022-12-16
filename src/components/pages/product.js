import React, { useEffect, useState } from "react";
const url = 'https://api.github.com/users'
// const url = 'https://dummyjson.com/products'
const Products = () => {
    // API
    // const fetchProducts = () => {
    //     // fetch('https://dummyjson.com/products')
    //     fetch('https://reqres.in/api/users')
    //         .then(response =>
    //             response.json())
    //         .then(console.log)
    //         .catch(error => console.log(error))
    // }
    // // useEffect

    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    // useState
    //     const [value, setValue] = useState(0)
    //     // ---------------------------------
    //     // function cleanup
    //     const [size, setsize] = useState(window.innerWidth)
    //     // console.log(size)
    //     const checkSize = () => {
    //         setsize(window.innerWidth)
    //     }
    //     useEffect(() => {
    //         window.addEventListener("resize", checkSize)
    //     },[])
    // // ------------------------------
    //     // useEffect
    //     useEffect(() => {
    //         // console.log("helloooooo")
    //         document.title = `messages ${value}`
    //     }, [])
    //     useEffect(() => {
    //         // console.log("helloooooo")
    //         document.title = `messages ${value}`
    //     })



    const [users, setUser] = useState([])
    const fetchUser = async () => {
        const response = await fetch(url)
        const users = await response.json()
        setUser(users)
        console.log(users)
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <>
            <h1 className="github">github users</h1>
            <ul className="users">
                {users.map((users) => {
                    const { id, login, avatar_url, html_url,events_url } = users
                    return (
                        <li className="list" key={id}>
                            <div className="git-img-cont">
                                <img className="git-img" src={avatar_url} alt={login}></img>
                            </div>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} ></a>
                                <button onClick={{ events_url }}>visit</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>
                +
            </button>
            <h2>{size} px</h2> */}
        </>

    )
}
export default Products;