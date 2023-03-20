import Body from '../components/body'
import Header from '../components/header'
import Arrow from '../assets/img/arrow-left-short.svg'
import CardCarsDown from '../components/cardCarsDown';
import CardCarsUp from '../components/cardCarsUp';
import ModalReservation from '../components/modalReservation';

let indexA = 3;
let indexB = 3;


const Component = [
{
    key:1,
    status: true,
},
{
    key:2,
    status: true
},
{
    key:3,
    status: false
},
{
    key:4,
    status: true
},
{
    key:5,
    status: true
},
{
    key:6,
    status: false
},
{
    key:7,
    status: false
},
{
    key:8,
    status: false
}
]

function reservation() {
    return ( 
        <>
        <ModalReservation/>
            <Header>
                <div className='lg:col-span-4 lg:col-start-1 flex justify-start items-center'>
                    <p className='lg:text-[30px]'>Eustaqio abichuela</p>
                </div>
                <div className='lg:col-span-2 lg:col-start-11 flex justify-center items-center'>
                    <p className='lg:text-center lg:text-[30px]'>198 MXN</p>
                </div>
            </Header>
            <Body>
                <div className='lg:ml-[32px] lg:mr-[32px] lg:gap-8 lg:h-[100px] grid lg:grid-cols-12'>
                    <div className='lg:col-start-1 lg:col-span-1 flex justify-center items-center'>
                        <img src={Arrow} className='lg:h-3/4 lg:w-3/4 invert cursor-pointer'/>
                    </div>
                    <div className='lg:col-start-5 lg:col-span-4 flex justify-center items-center'>
                        <p className='font-bolder text-white lg:text-[30px]'>Selecciona un lugar</p>
                    </div>
                </div>
                <div className='lg:ml-8 lg:mr-8 lg:h-[80vh] flex justify-center items-center'>
                    <div className='grid lg:grid-cols-12 lg:gap-8 lg:h-[80%] relative'>
                    {
                            Component.map((items, index)=>{
                                const start = `lg:col-start-${indexA}`;
                                indexA++;
                                console.log(items)

                                return(
                                    <div className={start} key={index}>
                                    <CardCarsDown item={items.key} state={items.status}/>
                                    { index != 0 &&
                                        index < Component.length && (
                                            <>
                                            <div className='absolute inset-y-0 transform -translate-x-5 bg-white w-[6px] rounded-sm'></div>
                                            </>
                                        )
                                    }
                                    </div>
                                )
                            })
                        }
                        {
                            Component.map((items, index)=>{
                                const starts = `lg:col-start-${indexB}`;
                                indexB++;
                                console.log(items)

                                return(
                                    <div className={starts} key={index}>
                                        <CardCarsUp item={items.key} state={items.status}/>
                                        {index < Component.length - 1 && (
                                            <div className="absolute inset-x-0 top-1/2 transform -translate-x-[-17%] -translate-y-1/2 bg-white w-3/4 h-[6px] rounded-sm"></div>
                                        )}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Body>
        </>
     );
}

export default reservation;