import { createContext, useContext, useState } from "react";

const Context = createContext();


export function UserIdProvider({ children }) {
  // const [theme, setTheme] = useState("light");
//   const [iscategory, setCategory] = useState();
//   const [islogin,setLogin] = useState(false);
    
  const [userid,setuserid]=useState(null)
  const [userloginname,setuser]=useState("")
  return (
    <Context.Provider value={[userid,setuserid,userloginname,setuser]}>{children}</Context.Provider>
    // <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useUserIdProvider() {
  return useContext(Context);
}