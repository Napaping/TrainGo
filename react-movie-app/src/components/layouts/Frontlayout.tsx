import type { JSX } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

type Props = {
    children: JSX.Element | JSX.Element[];
}

function Frontlayout( { children } : Props) {
  return (
    <>
        <Navbar/>
        <div className="sm:pt-20 lg:pt-8">
            {children}
        </div>
         
        <Footer/>
    </>
  )
}

export default Frontlayout