import Productdetail from "./Productdetail"

export default function Product(){
    let products=[
        {
            title:"Iphone 17",
            price:85000,
            ratings:9.5
        },
        {
            title:"Google Pixel 10",
            price:80000,
            ratings:9.0
        },
        {
            title:"Samsung s26",
            price:80000,
            ratings:9.2
        },
        {
            title:"Oneplus 15",
            price:77000,
            ratings:8.9
        },
        {
            title:"Nothing 4",
            price:60000,
            ratings:8.4
        },
        {
            title:"Samsung F Fold4",
            price:150000,
            ratings:9.9
        }
    ]
    return(
        <>
            {
                products.map((el)=>(
                    <Productdetail name={el.title} price={el.price} ratings={el.ratings}/>
                ))
            }
        </>
    )
}