import "./sidebar.scss"
import ToggleButton from "./ToggleButton/ToggleButton"
import Links from "./Links/Links"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)

    function clickHandler() {
        setIsOpen((prev) => !prev)
    }

    const variants = {
        open:{
            clipPath: "circle(1000px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }


  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
        <motion.div className="bg-cover" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton  clickHandler={clickHandler}/>
    </motion.div>
  )
}
