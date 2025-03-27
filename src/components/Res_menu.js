import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router";
import Shimmers from "./Shimmers";



const Res_menu = ()=>{

    const { resId } = useParams();

   const resInfo = useResturantMenu(resId);
   

    if(resInfo===null) return <Shimmers/>;

    const {name,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            <h2>MENU</h2>
            <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."}
                     {item.card.info.price/100 || item.card.info.defaultPrice /100}</li>
                    ))}
            </ul>

        </div>
    );
};


export default Res_menu;