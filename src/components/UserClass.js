
import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count :0,
            count2 : 2,
        };
    }
   
    render(){
        const {name,location} = this.props;

        const{count , count2} = this.state;
    
        return(
            <div className="user-card">
             <h1>count : {count}</h1>
             <button onClick={()=>(
                this.setState({
                    count:this.state.count+1,
                }
                )
             )}
             >count increment</button>  
            <h2>name:{name}</h2>
            <h3>location:{location}</h3>
            <h4>email:@ankesh123</h4>
          </div>
        );
    }
}

export default UserClass;