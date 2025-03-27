import { useState } from "react";

const User = ({name})=>{ 

    const [count] = useState(0);
    const [count2] = useState(1);
    
  
    return (

        <div className="user-card">
            <h1>count = {count}</h1>
            <h2>count2 = {count2}</h2>
            <h2>name:{name}</h2>
            <h3>location:raipur</h3>
            <h4>email:@ankesh123</h4>
        </div>

    );


};

export default User;