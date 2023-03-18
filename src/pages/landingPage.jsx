import Header from "../components/header";
import Body from "../components/body";
import jaja from "../assets/img/xd.png";    
function App() {
    return (
        <>
        <Header>
            <div className="lg:col-span-3 lg:col-start-1">
                <button>Breakig Park</button>
            </div>
            <div className="lg:col-span-2 lg:col-start-11 text-center">
                <button>Registar</button>
            </div>
            <div className="lg:col-span-2 lg:col-start-9 lg:row-start-1 text-right">
                <button>
                    Reservar
                </button>
            </div>
        </Header>
        <Body>
<div className="bg-[#171B26]">
    <div className=" lg:ml-8 lg:mr-8">
        
    <div className="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-3 lg:gap-8  sm:grid-cols-4 sm:gap-4 ">
        <div className="lg:col-span-12 lg:col-start-1 flex justify-center items-center">
            <div className="lg:row-span-1 lg:row-start-1">
                <p className="font-bolder text-white lg:text-[70px]  text-center">¿Cansado de no encontrar lugar en el <br /> estacionamiento ? </p>   
            </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-2  ">
            <p className="font-bolder text-white lg:h-full lg:text-[40px]  text-justify">"¡Di adios a la busqueda eterna de <br /> estacionamiento y hola a la comodidad <br /> con nuestro servicio!"</p>
            
            
        </div>
        <div className="lg:col-span-2 lg:col-start-3 text-right">
            <button className=" bg-[#51889D] text-white w-full h-[70px] rounded-lg lg:text-[35px] " >Comenzar</button>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
        <img className="h-90 w-90" src={jaja} alt="" />
        
        </div>
    </div>
    </div>
</div>
        </Body>
        </>
     );
}

export default App;