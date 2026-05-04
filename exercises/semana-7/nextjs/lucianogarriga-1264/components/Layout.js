import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (  
        <div className="content">
            <Navbar/>
            {/* Children is all the pages content */}
            {children} 
            <Footer/> 
        </div>
    );
}
 
export default Layout;