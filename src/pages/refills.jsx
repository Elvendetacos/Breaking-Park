import Header from "../components/header";
import Body from "../components/body";
import lol from "../assets/img/credit-card.png"
function refills() {
    return (
        <>
        <Header>
            <div className="lg:col-span-3 lg:col-start-1">
                <button>Breakig Park</button>
            </div>
          
            <div className="lg:col-span-2 lg:col-start-11 lg:row-start-1 text-right">
                <button>
                    Brian Taco
                </button>
            </div>
        </Header>
        <Body>
<div className="bg-[#171B26]">
    <div className=" lg:ml-8 lg:mr-8">
    <div className="grid lg:grid-cols-12 lg:h-[738px] lg:grid-rows-5 lg:gap-8  sm:grid-cols-4 sm:gap-4 ">
        <div className="lg:col-span-4 lg:col-start-5 lg:row-start-1 ">
        <img className="h-90 w-90" src={lol} alt="" />
        </div>
        <div className="lg:col-span-4  lg:col-start-5 lg:row-start-4  text-white ">
        <p className="font-bolder text-white  lg:text-[45px] ">Tu saldo actual es de $154 Mx</p>
        </div> 
        <div className="lg:col-span-2  lg:col-start-6 lg:row-start-5  text-white">
        <button className="bg-[#51889D] text-white w-60 h-[55px]  rounded-lg lg:text-[35px]">
        Recargar
        </button>
        </div> 
        </div>
          
    </div>
</div>
        </Body>
        </>
     );
}

export default refills;