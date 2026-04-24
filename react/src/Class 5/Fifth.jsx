import React, { useEffect, useState } from 'react'

const Fifth = () => {
    const [products, setProducts] = useState([])
    const [current,setCurrent]=useState(0);
    const PRODUCT_PER_PAGE=10

    let start=current*PRODUCT_PER_PAGE; // 0*10 =0
    let end= start + PRODUCT_PER_PAGE; // 0+10=10

    let url = `https://dummyjson.com/products?limit=10&skip=${current*10}`;

    function dataFetch() {
        fetch(url)
            .then((res) => {
                return res.json() // promise
            })
            .then((data) => {
                // console.log(data.products);
                setProducts(data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let totalNoOfPages=Math.ceil(products.length/PRODUCT_PER_PAGE)
    // console.log(totalNoOfPages)

    // let [count,setCount]=useState(0)
    // let [count1,setCount1]=useState(0)

    // Case 1:
    // useEffect(()=>{
    //     console.log(count)
    // })

    // Case 2: 
    // useEffect(()=>{
    //     console.log(count)
    // },[])

    // Case 3: 
    // useEffect(()=>{
    //     console.log(count)
    // },[count])




    // Now see the example with api fetching
    // Case 1: 
    // useEffect(()=>{
    //     dataFetch()
    // })

    // Case 2: Mostly Recommended
    useEffect(() => {
        dataFetch()
    }, [current])

    // Case 3:
    // useEffect(()=>{
    //     dataFetch()
    // },[count1])



    console.log(products)
    console.log(current)

    return (
        <div>
            {/* {count}
        <button onClick={()=>{setCount(count+10)}}>+</button>
        <br />
        <br />
        {count1}
        <button onClick={()=>{setCount1(count1+10)}}>+</button> */}

            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",padding:"40px"}}>

                {
                    products.map((el) => (
                        <div style={{width:"300px",border:"2px solid white",padding:"10px 30px"}}>
                            <h1>{el.title}</h1>
                            <img src={el.thumbnail} alt="" />
                            <p>{el.description}</p>
                            <p>Rs {Math.ceil(el.price * 93)}/-</p>
                            <button>Add To Cart</button>
                        </div>
                    )
                    )
                }
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>

            {
                Array(20).keys().map((el)=>(
                    <button onClick={()=>{setCurrent(el)}}>{el+1}</button>
                ))
            }
            </div>
        </div>
    )
}

export default Fifth;
