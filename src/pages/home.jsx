import Header from "../components/header";
import Body from "../components/body";
import moneda from "../assets/img/coin.svg";
import carro from "../assets/img/car-front.svg"
import tacha from "../assets/img/x-circle.svg"
function Home() {
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
          <button>Reservar</button>
        </div>
      </Header>
      <Body>
        <div className="bg-[#171B26]">
          <div className=" lg:ml-8 lg:mr-8">
            <div className="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-6 lg:gap-8  sm:grid-cols-4 sm:gap-4 ">
              <div className="bg-[#51889D] lg:col-span-8 lg:col-start-3 flex justify-left items-center lg:row-start-2 rounded-lg h-80">
                <p className=" font-bolder text-white lg:text-[65px]">El vende tacos</p>
            
                
              </div>
              <div className="lg:col-span-2 lg:col-start-9 lg:row-start-2 items-center flex h-80">
                <p className=" text-white  flex  text-left lg:text-[90px] font-bolder ">$0.90 </p>
                </div>
                <div className="lg:col-span-3 lg:col-start-9 lg:row-start-2 flex ">
                <p className="text-white lg:text-[30px] font-bolder text-left"><br /><br /><br /> <br /><br /> Saldo disponible </p>
                </div>
                <div className="lg:col-span-2 lg:col-start-3 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg">
                <img className="h-4/6 w-full" src={moneda} alt="not found"/>
                </div>
                <div className="lg:col-span-2 lg:col-start-6 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg">
                <img className="h-4/6 w-full" src={carro} alt="not found"/>
                </div>
                <div className="lg:col-span-2 lg:col-start-9 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg">
                <img className="h-4/6 w-full" src={tacha} alt="not found"/>
                </div>                 
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}

export default Home;
