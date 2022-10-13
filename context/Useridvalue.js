import { createContext, useContext, useState } from "react";

const Context = createContext();


export function UserIdValueProvider({ children }) {
  // const [theme, setTheme] = useState("light");
//   const [iscategory, setCategory] = useState();
//   const [islogin,setLogin] = useState(false);
    
//   const [userid,setuserid]=useState(null)
  const [useridvalue,setuseridvalue]=useState("")
  return (
    <Context.Provider value={[useridvalue,setuseridvalue]}>{children}</Context.Provider>
    // <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useUserIdvalue() {
  return useContext(Context);
}