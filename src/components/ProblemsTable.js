import Link from "next/link"
import TableFilters from "./TableFilters"

const ProblemsTable =  ({data}) => {

 

console.log(data)

  
 

  


  return (
    <div className='problems-tbl-main'>
        <TableFilters />
        <div className='problems-tbl'>
            <div className='row' style={{borderBottom:"1px solid #f0f0f0"}}>
                <div>Status</div>
                <div>Problem</div>
                <div>Diffuculty</div>
                <div>Solution</div>
                <div>Acceptance</div>
                <div>Frequency</div>

            </div>

            {data.map(val=>{
               return (

                <div className='row row-tbl-body' >
                <div><i class="fas fa-clock" style={{color:"#ecc6a1"}}></i> Not tried</div>
                <div>{val.title}</div>
                <div style={val.difficulty=="Easy"?{color:"green"}:val.difficulty=="Medium"?{color:"#ecc6a1"}:{color:"rgb(255,0,0)"}}>{val.difficulty}</div>
                <div>{"Solution"}</div>
                <div>{"58.6%"}</div>
                <div><Link href={"/code-editor?id="+val.id}><button className="run-btn">Solve</button></Link></div>
            
                </div>
               )
            })}
            {/* <div className='row row-tbl-body'></div> */}

        </div>
    </div>
  )
}





export default ProblemsTable