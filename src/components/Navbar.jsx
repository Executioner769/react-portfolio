import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "./Sidebar/Sidebar"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Sidebar />
                <div className="wrapper">
                    <motion.span
                     className="logo-text"
                     initial={{opacity: 0, scale:0.5}}
                     animate={{opacity: 1, scale: 1}}
                     transition={{duration: 0.5}}
                     >
                        Executioner Dev
                    </motion.span>
                    <div className="social">
                        <a href="#" className="instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="github">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                        <a href="#" className="twitter">
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                        <a href="#" className="linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar