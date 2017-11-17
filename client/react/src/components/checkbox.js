import React,{Component} from 'react'
class CheckBox extends Component{

    render(){
        return( <select className="custom-select">
                                        <option>Cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                   </select>)
    }
}

export default CheckBox