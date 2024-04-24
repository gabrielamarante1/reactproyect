import CartWidget from "./CartWidget";
import Categorias from "./categorias";

 function NavBar(){
    return(
        <div>
            <div>
            <Categorias />
            <CartWidget />
            </div>
            
           
        </div>
    )

 }
 export default NavBar;