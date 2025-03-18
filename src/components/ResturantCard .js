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
        <div className="res-card">
          <img 
          className="res-logo"
          alt="res-logo"
          src = {CDN_URL+ cloudinaryImageId}
          />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating } stars</h4>
            <h4> {sla?.slaString}</h4>
        </div>
    );
};

export default ResturantCard;