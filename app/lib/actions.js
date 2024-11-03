"use server";

export async function fetchData() {
    let data = [];
    try {
        const result = await fetch('https://fakestoreapi.com/products')
        data = await result.json()
        return data
    } catch (error) {
        console.log(error)
    }
    
}