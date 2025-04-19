import { createContext } from "react";

const UserContext = createContext({
    LoggedInUser : "default",
});


export default UserContext ; 