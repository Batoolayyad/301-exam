import axios from 'axios';
import React, { Component } from 'react';
import favDigimon from './favDigimon';


 class FavoriteDigimons extends Component {
    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
             digimon:[],
             showFav:false,
             showForm:false,
             img:'',
             level:'',
             name:'',
             index:0
        }

    }
    componentDidMount=async()=>{
        const digimon=await axios.get(`${this.state.serverLink}/getFavorit`)
        this.setState({
            digimon:digimon.data,
            showFav:true
        })
    }

    deleteFav=async(idx)=>{
        const id=this.state.digimon[idx]._id
        const digimon=await axios.delete(`${this.state.serverLink}/deleteFav/${id}`) 
        this.setState({
            digimon:digimon.data
        })
    }

        showForm=(idx)=>{
            this.setState({
                showForm:true,
                img:this.state.digimon[idx].img,
                name:this.state.digimon[idx].name,
                level:this.state.digimon[idx].level,
                index:idx,
            })
        }

        changeImg=(e)=>{
            this.setState({
                img:e.target.value,
            })
        }
        changeName=(e)=>{
            this.setState({
                name:e.target.value,           
            })
        }
        changeName=(e)=>{
            this.setState({
                level:e.target.value,           
            })
        }

        updateData=async(e)=>{
            e.preventDefault()
            const id=this.state.digimon[this.state.index]._id;
            const obj={
                name:this.state.name,  
                img:this.state.img,
                level:this.state.level
            }
            const digimon= await axios.put(`${this.state.serverLink}/updateData/${id}`,obj)
            this.setState({
                digimon:digimon.data
            })
        }



    render() {
        return (
            <>
            {this.state.showForm && 
            <updateForm
            img={this.state.img}
            name={this.state.name}
            level={this.state.level}
            changeName={this.changeName}
            changeImg={this.changeImg}
            changeLevel={this.changeLevel}
            updateData={this.updateData}
            />
            }
            {this.state.showFav && this.state.digimon.map((item,idx)=>{
                return(
                    <favDigimon
                    favdigimon={item}
                    idx={idx}
                    deleteFav={this.deleteFav}
                    showForm={this.showForm}
                    />
                )
            })}
                
            </>
        )
    }
}

export default FavoriteDigimons
