import Car from "../assets/img/car.png";

function CardCarsUp({item, state}) {

  let text = `B-${item}`;

  return (
    <>
      <div className="lg:col-start-3 lg:h-full bg-gradient-to-t from-[#263744] rounded-xl">
      <div className="h-[30%] w-full">
          <button className="h-full w-full bg-[#345262] rounded-xl lg:text-[35px] font-bolder text-white">
            {text}
          </button>
        </div>
        {
            state ? 
            <div className="lg:pt-8 lg:pb-4 lg:w-full h-[70%] ">
            <img src={Car} alt="" className="h-full rotate-0 object-contain" />
            </div>
            :
            <div className="lg:pt-8 lg:pb-4 lg:w-full lg:h-[140px]">
            <p className="h-full rotate-90 font-bolder flex justify-center items-center text-white text-[20px]">Disponible</p>
            </div>
        }
      </div>
    </>
  );
}

export default CardCarsUp;
