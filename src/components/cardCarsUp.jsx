import Car from "../assets/img/car.png";

function CardCarsUp({ item, state, setModal, setLocation }) {
  let text = `B-${item}`;

  const openModal = () => {
    setModal(true);
    setLocation(text);
  };

  return (
    <>
      <div className="lg:col-start-3 col-span-1 h-full lg:col-span-1 lg:h-full bg-gradient-to-b from-[#263744] rounded-xl">
        <div className="h-[30%] w-full">
          <button
            onClick={openModal}
            className="h-full w-full bg-[#345262] rounded-xl lg:text-[35px] font-bolder text-white"
          >
            {text}
          </button>
        </div>
        {state ? (
          <div className="flex justify-center items-center pt-8 pb-4 w-full lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <img src={Car} alt="" className="h-full rotate-0 object-contain" />
          </div>
        ) : (
          <div className="pt-8 pb-4 w-full lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <p className="h-full rotate-90 font-bolder flex justify-center items-center text-white text-[20px]">
              Disponible
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CardCarsUp;
