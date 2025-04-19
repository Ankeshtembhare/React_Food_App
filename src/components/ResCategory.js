
import ItemList from "./ItemList";

const ResCategory = ({data ,showItems, setshowIndex})=>{

    const handleClick = () =>{
        setshowIndex();
    }

    return( 
    <div>
        {/* header*/}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer"
            onClick={handleClick}>
            <span className="font-bold text-lg">
                {data.title}  
                ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
             {/** accordion body */}

            {showItems && <ItemList items = {data.itemCards}/>}
           
        </div>
       
    </div>
    );
};


export default ResCategory;  