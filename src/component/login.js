import Doggo1 from '../img/Greet page/Doggo1.png'
export default function Login(props){
    return(
         //global container
   <div className="flex  items-center justify-center min-h-screen bg-rose-50">
   {/* card container */}
   <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">

        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute right-1" onClick={()=>props.setShow("")}>
              <span class="sr-only">Close menu</span>
            
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              
        </button>
       {/* left side */}
       <div className="p-6 md:p-20">
           {/* top content */}
           <h2 className="font-mono mb-5 text-4xl font-bold ">Log in</h2>
           <p className=" mb-12 font-sans font-light text-gray-600 max-w-sm">
           {/* 写真、ビデオ、音楽をアップロッドとかダウンロードとか為に口座にログインして下さい！！ */}
             Log in to your account to upload or download pictures, videos or music
           </p>
           <input type="text" className="p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light w-full mb-6"placeholder='Enter Your Mail' />
           <input type="text" className="p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light w-full"placeholder='Enter Your Mail' />

           {/* middle content */}
           <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
             <div className="font-thin text-cyan-700 md:w-[200px]">Forgot Password?</div>
             <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg bg-cyan-700 shadow-cyan-100
             hover:bg-opacity-90
             " onClick={()=>props.setShow("Login")}>
               <span>次に進む</span>
             </button>
           
           </div>
           {/*border */}
           <div className="mt-12 border-b border-b-gray-300"></div>
           {/* bottom content */}
           <div className='flex justify-center space-x-4'>
              <p className="py-6 text-lg font-thin text-center text-cyan-400 " onClick={()=>props.setShow("SignUp")}>Create an account? </p>
              {/* <p className="py-6 text-lg font-thin text-center text-gray-400 ">or Log in with</p> */}
           </div>
            {/* <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space:y-0 md:justify-center ">
            
              
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300  shadow-sm hover:bg-opacity-30 hover:shadow-lg md:mt-[24px] md:w-1/2">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" 
                    className='w-9'/>
                    <span>Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300  shadow-sm hover:bg-opacity-30 hover:shadow-lg md:w-1/2">
                <img src="https://icon2.cleanpng.com/20201008/xyt/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg" alt="" 
                    className='w-9 rounded-full overflow-hidden'/>
                    <span>Google</span>
              </button>
            </div> */}
       </div>
       {/* right side */}
       <img src={Doggo1} alt="" className="w-[430px] hidden md:block rounded-lg overflow-hidden bg-center" />

   </div>

</div>
    )
    
}