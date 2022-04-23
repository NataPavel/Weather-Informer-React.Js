import React from 'react';

class Info extends React.Component{
    render(){
        return(
            <div className='content'>
               <h4>Город: {this.props.city}</h4>
               <h4>Страна: {this.props.country} </h4>
               <h4>Температура: {this.props.temp}&#176; </h4>
               <h4>Погода: {this.props.condition} <img src={this.props.icon}/> </h4>
            </div>
        )
    }
}

export default Info;