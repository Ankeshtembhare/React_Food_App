import ResturantCard from "./ResturantCard ";
import { useState,useEffect, useContext} from "react";
import { Link } from "react-router";
import Shimmers from "./Shimmers";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [restaurantList,setrestaurantList] = useState([]); 
    const [filter_restuarent,setfilter_restuarent] = useState([]);

    const [searchText,setsearchText] =useState("");

    useEffect(() => {
            fetchData();
    }, []);

    const fetchData = 
        async() => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();

        
           
            //optional chaining
            setrestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilter_restuarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        };

    //condtional rendering
   /* if(restaurantList.length === 0){
        return <Shimmers/>
    }*/  

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>you are offline plz check your internet connection......</h1>
        );
    }

    const {loggedInUser,setuserName} = useContext(UserContext);

    return restaurantList.length === 0 ?  (<Shimmers/>): (

     
        <div className="body overflow-x-hidden">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    type = "text"
                    className="search-box border border-solid border-black bg-blue-50"
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="m-4 px-4 py-2 bg-green-100 rounded-lg"
                    onClick={()=>{
                        //filter the restuarent card and update the ui
                        //searchgtect
                        const filtered_res = restaurantList.filter( (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setfilter_restuarent(filtered_res);
                    }}
                    >search</button>
                </div>
            <div className="flex items-center" >
            <button className="filter-btn m-4 px-4 py-2 bg-gray-200 rounded-lg" 
              onClick={ () => {
                  const filterlist =  restaurantList.filter(
                    (res) => res.info.avgRating > 4.2
                );

              setfilter_restuarent(filterlist);
                
              }
            }
            >TOP RATED RESTAURANT</button>

            </div>

            <div className="m-4 p-4 flex items-center">
                <label>UserName : </label>
                <input className="border border-black p-2"
                value={loggedInUser}
                onChange={(e)=> setuserName(e.target.value)}/>
            </div>
              
            </div>
            

            <div className="flex flex-wrap">
                {
                    filter_restuarent.map((restaurant)=> (
                        <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}>
                       
                        < ResturantCard
                       
                          resData={restaurant}
                        />
                         </Link>
                      ))

                }
            </div>

        </div>
    );
};

export default Body;