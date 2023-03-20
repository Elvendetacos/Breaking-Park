import Car from "../assets/img/car.png";

function CardCarsDown({item, state}) {

    let text = `A-${item}`;

  return (
    <>
      <div className="lg:col-span-1 lg:h-full bg-gradient-to-b from-[#263744] rounded-xl">
        {
            state ? 
            <div className="lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <img src={Car} alt="" className="h-full rotate-180 object-contain" />
            </div>
            :
            <div className="lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <p className="h-full rotate-90 font-bolder flex justify-center items-center text-white text-[20px]">Disponible</p>
            </div>
        }
        <div className="h-[30%] w-full">
          <button className="h-full w-full bg-[rgb(52,82,98)] rounded-xl lg:text-[35px] font-bolder text-white">
            {text}
          </button>
        </div>
      </div>
    </>
  );
}

export default CardCarsDown;
