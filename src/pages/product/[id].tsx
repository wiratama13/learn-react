import { useRouter } from "next/router"

const DetailProductPage = () => {
    const {query} = useRouter()
    // console.log(router)
    return (
        <div>
            <h2>Detail Product</h2>
            <p>Product : {query.id} </p>
        </div>
    )
}

export default DetailProductPage