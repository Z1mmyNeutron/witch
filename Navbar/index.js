import React from "react"
import Grid from '@material-ui/core/Grid'
import Moment from 'moment'


import "./Navbar.css"

//navbar works
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";



//styling
//Browser
const navBrow = {
  textAlign:"center", 
  justifyContent:"center",
  fontSize:21,
  paddingTop:"2%",
  color:"white",
  fontFamily: 'Times New Roman',
  minWidth:"20vw",
  minHeight:"5vh",

}
const leftBrow = {
  textAlign:"right", 
  
}

//Mobile
const navMob = {
  textAlign:"right",
  fontSize:16,
  minWidth:"50vw",
  
}

const leftMob = {
  textAlign:"left",
  fontSize:16,

}
const moment = require('moment')


  

export default class Navbar extends React.Component{

    render(){

     
     //browser view 
     var brow = (
       <div>
        
        <Grid padding={0} container spacing={0}>  

          <Grid item xs={4} style={leftBrow}>
            <NavLink to="/" >
                      </NavLink>
          </Grid>

          <Grid  item xs={4}style={leftBrow}> 
            <div style={navBrow}> 
                {moment().format('LLL')}
              </div>
            </Grid>

            <Grid item xs={4} style={navBrow} >
            <div style={{backgroundColor:"#334667"}}>
              <NavLink to="/" >
              <span>
                <NavLink exact className="Link" to="/" style={{paddingRight:"5%", fontFamily:""}}> Home. </NavLink>
                <NavLink  className="Link" to="/Mind"  style={{paddingRight:"5%", fontFamily:""}}>Mind.</NavLink>
                <NavLink className="Link" to="/Body"style={{paddingRight:"5%", fontFamily:""}}> Body.</NavLink></span>
                <NavLink className="Link" to="/Soul"style={{fontFamily:"3%"}}> Soul.</NavLink>
              <span>
              <NavLink className="Link" to="/Spellbook"style={{fontFamily:"3%"}}> Spellbook.</NavLink>
              </span>
              </NavLink>
              </div>
          </Grid>
        </Grid>

      </div>)

        return(
        

        <div className="navBrow">
          {brow}
        </div>
        )
    }
}

