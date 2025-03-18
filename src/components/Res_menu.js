import { useEffect,useState } from "react";
import shimmers from "./Shimmers";



const Res_menu = ()=>{
   

    const[resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2513844&lng=81.62964130000002&restaurantId=84718&catalog_qa=undefined&submitAction=ENTER"

        );

        const json = await data.json();


        setresInfo(json.data);
        
    };

    return(
        <div>
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
        </div>
    );
};


export default Res_menu;