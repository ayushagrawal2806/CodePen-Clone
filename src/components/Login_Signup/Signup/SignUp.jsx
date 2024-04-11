
import { useContext, useState } from "react"
import "./SignUp.css"
import { SignInOrLoginwithGoogle , SignInOrLoginwithGitHub } from "../../Firebase/helper"
import { createUserWithEmailAndPassword  } from "firebase/auth"
import { auth } from "../../Firebase/firebase.config"
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase.config"
import UserContext from "../../../context/context"
import { useNavigate } from "react-router-dom"
const SignUp = () => {
  const [formOpen , setFormOpen] = useState(false)
  const [name , setName] = useState("");
  const [userName , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const {setIsLoggedIn , toast , setLoader , setUserData , penData , setPenData} = useContext(UserContext);
  const navigate = useNavigate();

  const createNewUser = async () => {
    if(name !== ""){
      try {
        const userDetails = await createUserWithEmailAndPassword(auth, email, password);
        setUserData([{name : name , ...userDetails.user.providerData[0]}])
        await setDoc(doc(db, "userDetails", userDetails.user.providerData[0].uid), {
          name : name,
          details : penData,
        });
        // await signInWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
        toast.success("User Created");
        setLoader(true);
        navigate("/" , {replace : true})
      } catch (error) {
          toast.error(error.message)
      }
    } else{
      toast.error("Enter your Name")
    }
  }

  const handleGoogleSignIn = () => {
    SignInOrLoginwithGoogle({ setIsLoggedIn, toast, setLoader } , navigate , setUserData , setPenData);
  };

  const handleGitHubSignIn = () => {
    SignInOrLoginwithGitHub({ setIsLoggedIn, toast, setLoader } , navigate , setUserData , setPenData);
  };


  return (
    <div className="signupbox">
      <div className="signup-header">
          <h1>Free</h1>
          <p>Welcome to CodePen.</p>
      </div>
      <div className="links-form">
        <div className="links">
            <div className="google">
              <button onClick={handleGoogleSignIn}>
                <svg width="26" height="26" viewBox="0 0 186.69 190.5"><g transform="translate(1184.583 765.171)"><path clipPath="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4"></path><path clipPath="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853"></path><path clipPath="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05"></path><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clipPath="none" mask="none"></path></g></svg>
                <p>Sign Up with Google</p>
              </button>
            </div>
            <div className="github">
              <button onClick={handleGitHubSignIn}>
                  <svg width="26" height="26" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
                  <p>Sign Up with GitHub</p>
              </button>
            </div>
            <div className="facebook">
               <button>
               <svg width="26" height="26" viewBox="0 0 14222 14222"><circle cx="7111" cy="7112" r="7111" fill="#1977f3"></circle><path d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z" fill="#fff"></path></svg>
                  <p>Sign Up with Facebook</p>
               </button>
            </div>
        </div>
        <p className="or">Or,</p>
        <div className="form">
          <button className="signupbutton" onClick={() => setFormOpen(!formOpen)}>Sign Up with Email</button>
          <form style={{display : (formOpen) ? "block" : ""}}>
            <div className="name commons">
              <label htmlFor="Your-Name">Your Name</label>
              <input type="text"  value={name} id="Your-Name" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="username commons">
              <label htmlFor="username">Choose a username</label>
              <input type="text" value={userName}  id="username" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="Email commons">
              <label htmlFor="Email">Email</label>
              <input type="email" value={email}  id="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password commons">
              <label htmlFor="password">Choose Password</label>
              <input type="password" value={password}  id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={(e) => {
              e.preventDefault()
              createNewUser()  
              setEmail("")
              setName("")
              setPassword("")
              setUserName("")}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp