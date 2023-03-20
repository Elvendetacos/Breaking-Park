import Footer from "./footer";

function Body({children}) {
    return ( 
        <>
        <div className="h-auto w-auto bg-[#171B26]">
            {children}
        </div>
        <Footer/>
        </>
     );
}

export default Body;