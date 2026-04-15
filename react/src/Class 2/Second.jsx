export default function Second(){
    let name="Ayush";
    let city="Ghaziabad";

    let arr=["React","Node","express"]

    let detail={
        d1:"Detail1",
        d2:"Detail2"
    }

    function handleClick(){
        alert("Button Clicked")
    }

    let age=15;
    return(
        <>
            <h1>My name is {name} belongs to {city}</h1>

            <h2>
                {
                    arr.map((el)=>(
                        `${el} `
                    ))
                }
            </h2>

            <p>
                {detail.d1}
            </p>
            <p>
                {detail.d2}
            </p>
            
            <hr />

            <button onClick={handleClick}>Click Me</button>

            <hr />
            
            {
                (age>=19)?
                <h1>Eligible</h1>:
                <h1>Not Eligible</h1>
            }

        </>
    )
}