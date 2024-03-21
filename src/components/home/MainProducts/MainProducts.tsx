
const getProducts = async ()=>{
    const res = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,{
        headers: new Headers({
            'x-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
        })
    })
    const data = await res.json()
    return data
}
export async function MainProducts(){

    const products = await getProducts()
    console.log(products)
    
    return (
        <section>
            <h1>Main Products</h1>
        </section>
    )
}