import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'

const CodeProblemModal = ({problemData}) => {
    const [openProblem,setOpenProblem] = useState(false);

    if(problemData)
    return (
        <i onClick={()=>setOpenProblem(!openProblem)}>
            <span>View Problem :</span><i className="fas fa-code" ></i>
            <Modal className='problem-display-modal' isOpen={openProblem}>
                <ModalBody>
                    <h2 className='text-grey-900 text-xl mb-8'>{problemData.title} <i className='fas fa-times' style={{marginLeft:"auto",marginRight:"10px",float:"right"}} onClick={()=>setOpenProblem(!openProblem)}></i></h2>
                    <span className={problemData.difficulty+"-lbl"}> {problemData.difficulty}</span>

                    <span style={{background:"#000a200d",borderRadius:"999px",color:"#ffa116",margin:"20px 10PX",padding:"7px",fontSize:"11PX"}}> <i className="fas fa-lock"></i>Companies</span>
                    <div style={{margin:"20px 10px"}} dangerouslySetInnerHTML={{__html:problemData.problemStatement}}>
                        

                    </div>

                    <div>

                     {problemData.examples && problemData.examples.map((val,i)=>{
                        return <div className='problem-example-sect'>
                            <h1><b>Example: {i+1}</b></h1>
                             <p><b>Input :</b>{val.inputText}</p>
                             <p><b>Output :</b>{val.outputText}</p>
                             <p><b>Explanation :</b>{val.explanation}</p>

                        </div>
                        
                     })}
                            <h1><b>Constraints:</b></h1>

<div style={{margin:"20px 10px"}} dangerouslySetInnerHTML={{__html:problemData.constraints}}>
                        

                        </div>
                    </div>
                </ModalBody>
            </Modal>

        </i>
    )
    else
    return null;
}

export default CodeProblemModal