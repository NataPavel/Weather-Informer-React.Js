import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherGet}>
                <label><h3>Введите город: &nbsp;</h3></label>
                <input type="text" name='city' placeholder='Город'/><br/>
                <button className='btn btn-outline-info'>Узнай погоду</button>
            </form>
        );
    }
}

export default Form;