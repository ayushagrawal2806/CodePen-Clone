
import Outlets from "./components/Outlet/Outlet";
import { RouterProvider ,  createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Editor from "./components/Editor/Editor";
import Login from "./components/Login_Signup/Login/Login";
import SignUp from "./components/Login_Signup/Signup/SignUp";
import { useContext, useEffect} from "react";
import Loader from "./components/loader";

import UserContext from "./context/context";


function App() {
  
  const {loader , setLoader} = useContext(UserContext);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    } , 2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])
  
 let router = createBrowserRouter([
  {
    path : "/",
    element : <Outlets />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/auth/login",
        element : <Login />
      },
      {
        path : "/auth/signup",
        element : <SignUp />
      }
    ]
  },
  {
    path : "/pen",
    element : <Editor />
  }
 ])
  return (
    (loader) ? 
    <div style={{height : "100vh" , width : "100vw" , display : "flex" , justifyContent : "center" , alignItems : "center", backgroundColor : "hsl(225deg 9.52% 8.24%)"}}>
      <Loader />
    </div>
    : 
     
        <RouterProvider router={router} />
      
  )
}

export default App;
