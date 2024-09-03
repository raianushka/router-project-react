import logo from "../assets/logo.svg"
import {toast} from "react-hot-toast"
import { Link } from "react-router-dom"

const Navbar=(props)=>{

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto" >
            <Link to="/">
                <img src={logo} alt="Logo" width="160px" height="32px "loading="lazy" />
            </Link>
            <nav>
                <ul className="flex gap-x-6 text-white ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                {!isLoggedIn &&
                <Link to="/login">
                     <button className="bg-slate-700 text-slate-100 py-[8px] px-[12px] rounded-[8px]  border-slate-600">
                         Login
                     </button>
                 </Link>
                }
                {!isLoggedIn &&
                <Link to="/signup">
                     <button className="bg-slate-700  text-slate-100 py-[8px] px-[12px] rounded-[8px]  border-slate-600" >
                         Sign up
                     </button>
                 </Link>
                }
                {isLoggedIn &&
                <Link to="/">
                     <button 
                      className="bg-slate-700  text-slate-100 py-[8px] px-[12px] rounded-[8px]  border-slate-600"
                     onClick={()=>{
                           setIsLoggedIn(false);
                           toast.success("Logged Out");
                     }
                    
                    }>
                        Log Out
                     </button>
                 </Link>
                }
                {isLoggedIn &&
                <Link to="/dashboard">
                     <button className="bg-slate-700 text-slate-100 py-[8px] px-[12px] rounded-[8px]  border-slate-600">
                         Dashboard
                     </button>
                 </Link>
                }
                
            
            </div>
        </div>
    )
}

export default Navbar