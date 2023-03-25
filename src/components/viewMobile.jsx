import CardCarsDown from "./cardCarsDown";
import CardCarsUp from "./cardCarsUp";

function ViewMobile({ setModalReservations, setLocation, Component }) {
    let indexA = 1;
    let indexB = 1;
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
            </div>
          );
        })}
      </>
    );
}

export default ViewMobile;