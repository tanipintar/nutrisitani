import React, {Component} from 'react'

class Statefull extends Component{
    constructor(props){
        super(props);
        this.state = {
            nutrisi: "",
            harga: 0,
            pekerjaan :"",
            qty : "" ,
            total : 0
        }
    }
    handleChange = (e) => 
    {
        this.setState({ 
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => 
    {
        this.setState({ 
            total:this.state.harga * this.state.qty,
         //   total:this.state.harga + this.state.qty
        })
    }
    //disini tempat menulis method, render adalah menampilkan
    render(){
        return(
            <div style={{padding:"20px" }}>
                <input type="text" name="nutrisi"
                onChange={this.handleChange}
                /><br></br><br></br>
                <label>Nutrisi : {this.state.nutrisi} </label>

            <br></br> <br></br>

                <input type="number" name="harga" placeholder="harga"
                onChange={this.handleChange}
                /><br></br><br></br>

            <br></br> 

                <input type="number" name="qty" placeholder="Qty"
                onChange={this.handleChange}
                /><br></br><br></br>
                <label>Total : {this.state.total} </label><br></br>
                <button onClick={this.handleClick}>Hitung</button>
            
            </div>

        )
    }
}
export default Statefull