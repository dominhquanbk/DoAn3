import logo from "../../img/Header/logo.png"
import sm_menu from "../../img/Header/sm-menu.png"
import { useState,useEffect } from "react"
import SearchBar from "./searchbar"
export default function Header(props){
    const [menu,setMenu]=useState(false)
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
          // Check if the window width is greater than or equal to the md breakpoint (adjust the value accordingly)
          if (window.innerWidth >= 768) {
            setMenu(false);
          }
        };
    
        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial check when component mounts
        handleResize();
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array ensures that the effect runs only once when the component mounts
    
    return (
        //card container
        <div className="bg-white ">
            <nav className="flex justify-between items-center w-[92%] m-auto">
                <div className="flex-none">
                    <img src={logo} alt="..." className="w-56 " />
                </div>
                
                <div className={`md:static duration-500 absolute md:min-h-fit bg-white min-h-[60vh] left-0 ${menu ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex  md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        
                        <li>
                            <SearchBar></SearchBar>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a  href="#">Products</a>
                        </li>
                       
                    </ul>
                </div>
                
                <div className="flex items-center gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={()=>props.setShow("Login")}>Sign In</button>
                    <img src={sm_menu} alt="" className="text-3xl cursor-pointer w-9 md:hidden" onClick={()=>{setMenu(!menu)
                                                                                                              props.setShow("") 
                                                                                                              }}/>
                </div>
            </nav>
          
        </div>
    )
}

