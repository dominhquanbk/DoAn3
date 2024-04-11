import Login from './component/login';
import SignUp from './component/singup';
import { useState,useEffect } from 'react';
import Header from './component/Header/header1';
import Mainpage from './component/mainpage';
import Credit from './component/credit';
export default function App() {
  const [show, setShow] = useState("");
  const [whatPage,setWhatPage]=useState("Mainpage");
//add tailwind and flowbite for css
  

  return (
    <>
      <Header setShow={setShow}></Header>
     
        {show === "Login" && <Login setShow={setShow}></Login>}
        {show === "SignUp" && <SignUp setShow={setShow}></SignUp>}

      {show === "" && (
        <>
          {whatPage==="Mainpage" && <Mainpage setWhatPage={setWhatPage}></Mainpage>}
         
        </>
      )}
       <Credit />
    </>
  );
}