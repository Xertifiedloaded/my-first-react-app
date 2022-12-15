import React, { useEffect } from "react";

const Products = () => {
    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(console.log)
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h1>products page</h1>
        </>

    )
}
export default Products;