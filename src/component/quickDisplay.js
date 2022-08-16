import React from "react";
import { Link } from "react-router-dom";
import './quick.css';

const QuickDisplay = (props) => {
    
    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item)=> {
                return (
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                    <div className="Main-tile">

                        <div className="tile-Container">
                            <div className="tile-Component1">
                                <img src={item.meal_image} alt="" />
                            </div>
                            <div className="tile-Component2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubheading">
                                    {item.content}
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
                )
            })
         }
    }
     
    return (
        <>
            {listMeal(props)}
        </>
    )
}
export default QuickDisplay;