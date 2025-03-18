import ResturantCard from "./ResturantCard ";
import { useState,useEffect } from "react";
import Shimmers from "./Shimmers";

const Body = () => {

    const [restaurantList,setrestaurantList] = useState([]); 
    const [filter_restuarent,setfilter_restuarent] = useState([]);

    const[searchText,setsearchText] =useState("");

    useEffect(() => {
            fetchData();
    }, []);

    const fetchData = 
        async() => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();

        
           
            //optional chaining
            setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilter_restuarent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        };

    //condtional rendering
   /* if(restaurantList.length === 0){
        return <Shimmers/>
    }*/  

    return restaurantList.length === 0 ?  (<Shimmers/>): (

     
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type = "text"
                    className="search-box"
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button
                    onClick={()=>{
                        //filter the restuarent card and update the ui
                        //searchgtect
                        const filtered_res = restaurantList.filter( (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setfilter_restuarent(filtered_res);
                    }}
                    >search</button>
                </div>
                
              <button className="filter-btn" 
              onClick={ () => {
                  const filterlist =  restaurantList.filter(
                    (res) => res.info.avgRating > 4.2
                );

              setfilter_restuarent(filterlist);
                
              }
            }
            >TOP RATED RESTAURANT</button>
            </div>
            

            <div className="res-container">
                {
                    filter_restuarent.map((restaurant)=> (
                        < ResturantCard
                          key={restaurant.info.id}
                          resData={restaurant}
                        />
                      ))

                }
            </div>

        </div>
    );
};

export default Body;