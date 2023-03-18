import Footer from "./footer";

function Body({children}) {
    return ( 
        <>
        <div className="h-auto w-auto">
            {children}
        </div>
        <Footer/>
        </>
     );
}

export default Body;