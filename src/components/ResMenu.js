import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router";
import Shimmers from "./Shimmers";
import ResCategory from "./ResCategory";
import { useState } from "react";





const Res_menu = ()=>{

    const { resId } = useParams();

   const resInfo = useResturantMenu(resId);

   const[showIndex,setshowIndex]=useState(null);
   

    if(resInfo===null) return <Shimmers/>;

    const {name,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
    const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] 
        === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");



    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">
                {name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            {/*  category accordion */ }
            {categories.map((category ,index)=>(
                //controlled componenet
                <ResCategory
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showItems = {index === showIndex ?true:false}
            setshowIndex={()=>setshowIndex(index)}
            /> 
            ))}

        </div>
    );
};


export default Res_menu;