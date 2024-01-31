import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <section className="z-40">
            <div className="flex py-5 px-10 font-semibold text-sm justify-between items-center">
               <div>
              <Link>Prev Slide</Link>  
                </div> 
               <div>1/4</div>
               <div>
                <Link>Next Slide</Link>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;