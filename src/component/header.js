import React,{Component} from 'react';
import './header.css';
const url = "https://zomato--api.herokuapp.com/location";
const restUrl = "https://zomato--api.herokuapp.com/restaurants";

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
            if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id} > {item.state} </option>
                )
            })
        }
    }

    renderRest = (data) => {
            if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id} > {item.restaurant_name} | {item.address} </option>
                )
            })
        }
    }

    handleCtiy= (event) =>{
        let stateId = event.target.value;
        console.log(stateId);
            fetch(`${restUrl}?state_id=${stateId}`,{method:'GET'})
            .then((res)=> res.json())
            .then((data) => {
                this.setState({restaurants:data})
            })
    }

    handleRest = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }

    render(){
        return(
            <header className="head">

        <nav className="navbar">
            <div className="container-fluid">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <div id="navbarCollapse" className="collapse navbar-collapse">

                    <ul className="nav navbar-nav navbar-left">
                        <li> Get The App</li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>Add Resturant</li>
                        <li>Sign Up</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
          </nav>
        <div className="heading">
            <h1>Zomato</h1>
            <h3>Discover the best food & drinks in Datia</h3>
        </div>
        <div className="row">
            

        <div className="dropdown">
                    <select className="dropdown-menu" onChange={this.handleCtiy}>
                        <option> ---- Select Your City---- </option>
                        {this.renderCity(this.state.location)}
                    </select>
                </div>
            

            

                <div className="dropdown">
                <select className="dropdown-menu left-select">
                    <option>----Select Resturant----</option>
                    {this.renderRest(this.state.restaurants)}
                    
                </select>
                </div>
            
        </div>
          
    </header>
        )
    }

    // API calling on page load 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Header;