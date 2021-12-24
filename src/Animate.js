import React from 'react'
import "./Animate.css"
import {motion,AnimatePresence} from "framer-motion"
import Login from './Login'
import { useState } from "react"
function Animate() {
    const [modelopen, setModelopen] = useState(false);
    const close=()=>{setModelopen(false)};
    const open=()=>{setModelopen(true)};
    return (
        <div className='motion'>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='btn1'
            onClick={()=>(modelopen? close():open())}
            >
                ChatApp
            </motion.button>
            <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={()=>null}
            >
            {modelopen && <Login modelopen={modelopen} handleclose={close}/>}
            </AnimatePresence>

        </div>
    )
}

export default Animate
