import axios from 'axios';
import React, { Component } from 'react'
import DogimonCard from './DogimonCard'
import  CardColumns from 'react-bootstrap/CardColumns'

 class Main extends Component {
     constructor(props){
         super(props);
         this.state={
             serverLink:process.env.REACT_APP_SERVER,
             digimon:[],
             showDigimon:false
         }
     }
     componentDidMount=async()=>{
        //  const digimon= await axios.get(`${this.state.serverLink}getDigimon?requery=digimon`)
       const digimon= await axios.get(`${this.state.serverLink}/getDigimon`)
         this.setState({
            digimon:digimon.data,
            showDigimon:true
         })
         console.log(digimon)
     }

     favDigimon=async(favData)=>{
         await axios.post(`${this.state.serverLink}/favDigimon`,favData)
     }

    render() {
        return (
            <>
            <CardColumns>
               {this.state.showDigimon && this.state.digimon.map((item,idx)=>{
                   return(
                       <DogimonCard
                       digimon={item}
                       idx={idx}
                       favDigimon={this.favDigimon}
                       />
                   )
               })

               }
               </CardColumns> 
            </>
        )
    }
}

export default Main
