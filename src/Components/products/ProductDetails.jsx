import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../../Redux/action'
import SIngleProduct from './SingleProduct'
const ProductDetails = () => {
    const { id } = useParams()
    //console.log(id)
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const fetchProductDetails = async () => {
        const response = await axios.get(`http://localhost:8080/allProducts/${id}`)
            .catch((err) => {
                console.log(err)
            })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (id && id != "") fetchProductDetails()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [id])
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div style={{display:"block"}}>...Loading</div>
            ) : <div>
                <SIngleProduct />
            </div>}
        </div>

    )
}

export default ProductDetails