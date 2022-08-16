import React,{Component} from "react";
import "./quick.css";
import QuickDisplay from "./quickDisplay";
const url="https://zomato--api.herokuapp.com/mealType";

class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            mealType:""
        }
    }
    render(){
        return(
            <>
                <div id="quickSearch">
                    <span className="quickHeading">
                        Quick Search
                    </span>
                    <span className="quickSubheading">
                        Discover Restaurant's By Meal's
                    </span>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            
            </>
        )
    }
//Api on page load
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;