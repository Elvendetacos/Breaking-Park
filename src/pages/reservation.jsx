import Body from "../components/body";
import Header from "../components/header";
import Arrow from "../assets/img/arrow-left-short.svg";
import ViewWeb from "../components/viewWeb";
import ModalReservation from "../components/modalReservation";
import { useState, useEffect } from "react";
import ViewMobile from "../components/viewMobile";

const Component = [
  {
    key: 1,
    status: false,
  },
  {
    key: 2,
    status: true,
  },
  {
    key: 3,
    status: false,
  },
  {
    key: 4,
    status: true,
  },
  {
    key: 5,
    status: true,
  },
  {
    key: 6,
    status: false,
  },
  {
    key: 7,
    status: false,
  },
  {
    key: 8,
    status: false,
  },
];

function reservation() {
  const [ScreenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [ModalReservations, setModalReservations] = useState(false);
  const [Location, setLocation] = useState();

  useEffect(() => {
    //Se toma el tamaño actual de la pantalla
    function updateScreenSize() {
      setScreenSize((prevSize) => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }

    updateScreenSize(); 

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize); 
    };
  }, []);

  return (
    <>
      {ModalReservations && (
        <ModalReservation setModal={setModalReservations} location={Location} />
      )}
      <Header>
        <div className="lg:col-span-4 lg:col-start-1 flex justify-start items-center col-start-1 col-span-1">
          <p className="lg:text-[30px] text-[20px]">Eustaquio</p>
        </div>
        <div className="lg:col-span-2 lg:col-start-11 flex justify-center items-center col-start-4 col-span-1">
          <p className="lg:text-center lg:text-[30px] text-[20px]">198 MXN</p>
        </div>
      </Header>
      <Body>
        <div className="ml-4 mr-4  grid-cols-4 gap-4 h-[60px] lg:ml-[32px] lg:mr-[32px] lg:gap-8 lg:h-[100px] grid lg:grid-cols-12 c">
          <div className="lg:col-start-1 lg:col-span-1 flex justify-center items-center">
            <img
              src={Arrow}
              className="h-3/4 w-3/4 lg:h-3/4 lg:w-3/4 invert cursor-pointer"
            />
          </div>
          <div className="lg:col-start-5 lg:col-span-4 flex justify-center items-center col-span-2 col-start-2">
            <p className="font-bolder text-white lg:text-[30px] text-[20px] ">
              Selecciona un lugar
            </p>
          </div>
        </div>
        {
            ScreenSize.width < 1024 && (
                <div className="mr-4 ml-4 w-full h-[40px]">
                    <button className="w-1/3 h-full font-bolder text-white text-[20px] underline underline-offset-1">Ver mapa</button>
                </div>
            )
        }
        <div></div>
        <div className="ml-4 mr-4 h-auto lg:ml-8 lg:mr-8 lg:h-[80vh] flex justify-center items-center">
          <div className="mt-4 mb-10 lg:mt-0 lg:mb-0 grid grid-cols-4 gap-4 h-[80%] lg:grid-cols-12 lg:gap-8 lg:h-[80%] relative">
            {ScreenSize.width >= 1024 ? (
                //contiene los elementos a renderizar para las vistas web
              <ViewWeb
                Component={Component}
                setModalReservations={setModalReservations}
                setLocation={setLocation}
              />
            ) : (
                <>
                <ViewMobile
                Component={Component}
                setModalReservations={setModalReservations}
                setLocation={setLocation}
                />
                </>
            )}
          </div>
        </div>
      </Body>
    </>
  );
}

export default reservation;
