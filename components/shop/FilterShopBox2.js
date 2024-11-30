'use client'
import { addCart } from "@/features/shopSlice"
import { addWishlist } from "@/features/wishlistSlice"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import products from "../../data/products"
import {
    addPerPage,
    addSort,
    addprice,
    clearBrand,
    clearCategory,
    clearColor,
} from "../../features/filterSlice"
import {
    clearBrandToggle,
    clearCategoryToggle,
    clearColorToggle,
} from "../../features/productSlice"
import ShopCard from "./ShopCard"

const FilterShopBox2 = ({ itemStart, itemEnd, selectedCategory }) => {
    const { shopList, shopSort } = useSelector((state) => state.filter)
    const {
        price,

        category,
        color,
        brand,
    } = shopList || {}

    const { sort, perPage } = shopSort

    const dispatch = useDispatch()

    const addToCart = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addCart({ product: item }))
    }

    const addToWishlist = (id) => {
        const item = products?.find((item) => item.id === id)
        dispatch(addWishlist({ product: item }))
    }


    // location filter
    const priceFilter = (item) =>
        item?.price?.min >= price?.min && item?.price?.max <= price?.max

    // // product-type filter



    // product-type filter
    const categoryFilter = (item) =>
        category?.length !== 0 && item?.category !== undefined ? category?.includes(item?.category[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item

    // product-type filter
    const colorFilter = (item) =>
        color?.length !== 0 && item?.color !== undefined ? color?.includes(item?.color[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item

    // product-type filter
    const brandFilter = (item) =>
        brand?.length !== 0 && item?.brand !== undefined ? brand?.includes(item?.brand[0]?.type.toLocaleLowerCase().split(" ").join("-")) : item

    // sort filter
    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1

    // Function to shuffle the products array
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle
        while (currentIndex !== 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swap it with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    // Shuffling the products array before filtering
    let shuffledProducts = shuffleArray([...products]); // Use a spread operator to avoid mutating the original array

    // Apply filtering after shuffle
    let filteredProducts = selectedCategory === "all"
        ? shuffledProducts
        : shuffledProducts.filter((product) => product.category === selectedCategory);


    let content = filteredProducts?.map((item, i) => (
        <Fragment key={i}>
            <ShopCard
                item={item}
                title={item?.title}
            />
        </Fragment>
        // End all products
    ));


    // sort handler
    const sortHandler = (e) => {
        dispatch(addSort(e.target.value))
    }

    // per page handler
    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value)
        dispatch(addPerPage(pageData))
    }

    // clear all filters
    const clearAll = () => {
        dispatch(addprice({ min: 0, max: 100 }))




        dispatch(clearCategory())
        dispatch(clearCategoryToggle())

        dispatch(clearColor())
        dispatch(clearColorToggle())

        dispatch(clearBrand())
        dispatch(clearBrandToggle())

        dispatch(addSort(""))
        dispatch(addPerPage({ start: 0, end: 0 }))
    }


    return (
        <>
            {content}

        </>
    )
}

export default FilterShopBox2
