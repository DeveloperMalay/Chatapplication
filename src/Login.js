import React ,{useState}from "react";
import "./login.css";
import{motion} from "framer-motion";
import Backdrop from "./Components/Backdrop";
import VisibilityIcon from '@material-ui/icons/Visibility';
import{ InputAdornment} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";

const dropIn={
  hidden: {
    y:"-100vh",
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration:0.1,
      type:"spring",
      damping:25,
      stiffness:500,
    }
  },
  exit:{
    y:"100vh",
    opacity:0,
  },

};

function Login({handleclose,text}) {

const [passwordshow, setPasswordshow] = useState(false)

// const togglepasaword=()=>{
//   setPasswordshow(!passwordshow)
// }


   return (
    <Backdrop onClick={handleclose}>
    <motion.div className="login"  variants={dropIn}
    onClick={(e)=>{e.stopPropagation()}}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <h1>ChatApp</h1>
      <input type="text" placeholder="Name" className="name" />
      
      <input type={passwordshow ? "text" : "password"} placeholder="Password" className="password" 
     />
      
      <motion.button className="btn" whileTap={{scale:0.9}} > Join the ChatApp</motion.button>
    </motion.div>
    </Backdrop>
  );
}

export default Login;
