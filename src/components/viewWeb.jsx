import CardCarsDown from "./cardCarsDown";
import CardCarsUp from "./cardCarsUp";

function CardWeb({ setModalReservations, setLocation, Component }) {
  let indexA = 3;
  let indexB = 3;
  return (
    <>
      {Component.map((items, index) => {
        const start = `lg:col-start-${indexA}`;
        indexA++;
        console.log(items);

        return (
          <div className={start} key={index}>
            <CardCarsDown
              item={items.key}
              state={items.status}
              setModal={setModalReservations}
              setLocation={setLocation}
            />
            {index != 0 && index < Component.length && (
              <>
                <div className="absolute inset-y-0 transform -translate-x-5 bg-white w-[6px] rounded-sm"></div>
              </>
            )}
          </div>
        );
      })}
      {Component.map((items, index) => {
        const starts = `lg:col-start-${indexB}`;
        indexB++;
        console.log(items);

        return (
          <div className={starts} key={index}>
            <CardCarsUp
              item={items.key}
              state={items.status}
              setModal={setModalReservations}
              setLocation={setLocation}
            />
            {index < Component.length - 1 && (
              <div className="absolute inset-x-0 top-1/2 transform -translate-x-[-17%] -translate-y-1/2 bg-white w-3/4 h-[6px] rounded-sm"></div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default CardWeb;
