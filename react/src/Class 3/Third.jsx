import { useState } from "react"
import "./third.css"
import { FaMoon, FaSun } from "react-icons/fa";


export default function Third(){
    const [current,setCurrent]=useState(10)
    console.log(current)

    function increment(){
        setCurrent(current+10)
    }
    function decrement(){
        setCurrent(current-10)
    }

    const [status,setStatus] = useState(true)
    function updateStatus(){
        setStatus(!status)
    }

    const[theme,setTheme]=useState(false)

    console.log(status)
    return(
        <>
            <button onClick={increment}>
                +
            </button>
            <h1>{current}</h1>
            <button onClick={decrement}
                disabled={current==10}
            >
                -
            </button>

            <hr />

            { status &&
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat maxime, eveniet sit consectetur mollitia animi voluptatum impedit hic dolore rem rerum facilis culpa iusto corrupti obcaecati iste? Vel dicta corporis rerum quo, vero molestiae non. Obcaecati animi temporibus nisi, ab aut nesciunt natus illum at ducimus numquam facere eos blanditiis ea minus veniam cumque, error fuga, vero officiis soluta dolores consectetur reprehenderit adipisci! Fugiat in corrupti, unde culpa repellat id error vero, natus rerum ut molestiae autem minus illo sit velit? Rem facere, illum hic eos ullam reprehenderit debitis quia nemo alias quae! Ab obcaecati non hic repellat, unde voluptates.
            </p>
            }
            <button onClick={updateStatus}>
                {(status)?"Hide Content":"Show Content"}
            </button>

            <hr />

            <div className={(theme)?"light":"dark"}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"30px"}}>
                    <h1>Logo</h1>
                    {(theme)?<FaSun onClick={()=>{setTheme(!theme)}} size={40} style={{color:"yellow"}}/>:<FaMoon onClick={()=>{setTheme(!theme)}} size={40} style={{color:"white"}}/>}
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora eum iste, quis soluta, earum similique deserunt facilis consequatur labore possimus impedit exercitationem numquam maxime consectetur voluptatem fugiat fuga a est omnis praesentium. Provident esse, dolores dolorum fuga commodi eius quibusdam culpa? Reprehenderit voluptates autem beatae voluptatibus sapiente magnam corporis mollitia ab facere nihil similique iste distinctio cupiditate dignissimos dolorum, voluptas blanditiis, labore veritatis eum maxime quidem qui voluptatum ratione iusto. Repellat necessitatibus totam cumque ipsum, corrupti non vero facilis eaque, dolorum ut accusamus impedit assumenda eius veniam. Facere deleniti odio itaque vitae quis? Nisi nostrum sapiente est. Corrupti, sit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora eum iste, quis soluta, earum similique deserunt facilis consequatur labore possimus impedit exercitationem numquam maxime consectetur voluptatem fugiat fuga a est omnis praesentium. Provident esse, dolores dolorum fuga commodi eius quibusdam culpa? Reprehenderit voluptates autem beatae voluptatibus sapiente magnam corporis mollitia ab facere nihil similique iste distinctio cupiditate dignissimos dolorum, voluptas blanditiis, labore veritatis eum maxime quidem qui voluptatum ratione iusto. Repellat necessitatibus totam cumque ipsum, corrupti non vero facilis eaque, dolorum ut accusamus impedit assumenda eius veniam. Facere deleniti odio itaque vitae quis? Nisi nostrum sapiente est. Corrupti, sit.
                </p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dignissimos necessitatibus cupiditate, aperiam, neque sunt non corporis adipisci maiores provident nostrum dolorem, obcaecati nesciunt? Eveniet, dolorem ipsum? Fugit, sapiente. Adipisci provident rem vero eveniet illum iure magnam natus esse quibusdam laudantium vel, debitis fuga, labore inventore facere deserunt. Sint, recusandae.
                </p>
                
            </div>
        </>
    )
}