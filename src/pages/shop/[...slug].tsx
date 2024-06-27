import { useRouter } from "next/router"

const ShopPage = () => {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>
            <h2>Detail Product</h2>
            <p>Product : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
        </div>
    )
}

export default ShopPage