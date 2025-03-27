import { useEffect,useState } from "react";

const useResturantList = ()=>{

    const [restaurantList,setrestaurantList] = useState([]); 
   


    useEffect(() => {
        fetchData();    
    }, []);

const fetchData = 
    async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

    
       
        //optional chaining
        setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       // setfilter_restuarent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    };


    return restaurantList;
};


export default useResturantList;