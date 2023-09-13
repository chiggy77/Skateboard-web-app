import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../Redux/action'
import { Card, CardBody, Text, Image, Box, Grid } from "@chakra-ui/react"
import axios from "axios"
import { Link } from 'react-router-dom'
import {FilterComponent} from './FilterComponents'
const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, price, image } = product
        return (
            <Box key={id} style={{boxShadow:"3px 3px 5px 6px #ccc",borderRadius:"12px 12px 0 0"}}>
                <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
                <Card>
                    <CardBody>
                        <Image boxSize='220px' src={image} alt={title} />
                        <Text style={{color:"black",fontFamily:"monospace",fontSize:"15px"}}>{title.substring(0,15)}</Text>
                        <Text style={{color:"red",fontFamily:"sans-serif", fontSize:"17px"}}>Rs. {price}</Text>
                    </CardBody>
                </Card>
                </Link>
            </Box>
        )
    })
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios
            .get("http://localhost:8080/allProducts")
            .catch((err) => {
                console.log(err)
            })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Box m={"20px"}>
            <Grid templateColumns='0.2fr 0.8fr'>
            <Box className="filterSection">
                <FilterComponent/>
            </Box>
            <Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={"16px"}>
                {renderList}
            </Grid>
            </Box>
            </Grid>
        </Box>
    )
}

export default ProductList