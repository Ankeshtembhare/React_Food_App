import { CDN_URL } from "../utils/contants";

const ResturantCard = (props) => {
    /*const{resname , cusine} = props;*/ // destructuring on the fly then use simply resname and cusine in place of prors.resname
    const {resData} = props; 
    const{ 
      cloudinaryImageId,
        name,cuisines,
        costForTwo
        ,avgRating 
        ,sla}= resData?.info;
    return(
        <div className="res-card m-4 p-4 w-[205px] bg-gray-200 rounded-lg">
          <img 
          className="res-logo rounded-lg  "
          alt="res-logo"
          src = {CDN_URL+ cloudinaryImageId}
          />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating } stars</h4>
            <h4> {sla?.slaString}</h4>
        </div>
    );
};

export default ResturantCard;