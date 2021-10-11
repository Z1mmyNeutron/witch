        
import React from "react"
import {Text} from "./Paragraph.js"
import G from "../../Grid"
import "./backdrop.css"
import { BottomNavigation } from "@material-ui/core"




export default class Header extends React.Component {
    render() {

//  <Text customStyles={t} paragraph="The quick brown fox tried to fuck the jack rabbit and it fucking worked!"/>

       
    //     let cuteWorkspace = (<div style={{ minHeight:"30vh", minWidth:"15vw", padding:"10%"}}>
    //             <span>
    //                  <img src={require('../../../images/CuteWorkSpace.jpg')}width="100%" height="100%"/>
    //             </span>
                
    //          </div>)

    //     let parisSelfie = (<div style={{minHeight:"30vh", minWidth:"15vw", padding:"10%"}}>
    //     <span>
    //          <img src={require('../../../images/ParisSelfie.jpeg')}width="100%" height="100%"/>
    //     </span>
        
    //  </div>)
     
       
        
    let heading = (<div style={{textAlign:"center"}}><Text paragraph="<span style='color:white'>Welcome Home.</span>"/></div>)
 
    

     return (
        <div className="Header">
            <div style={{minHeight:"100vh" }}>
                   <G count={1} dims={[0,12,0]} content={[heading]}/>
                   
            </div>
        </div>
        )
    
    }
}




