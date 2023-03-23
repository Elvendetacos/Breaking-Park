function Modal({mostrar, children, onClose}) {
  const handleClose=(e)=>{
    if(e.target.id === 'a') onClose();
  }
  if(!mostrar ) return null;
    return ( 
    <div className="fixed inset-0 bg-[#171B26] bg-opacity-11 backdrop-blur-sm flex justify-center items-center" id="a" onClick={handleClose} >
      <div className="py-6 px-10 text-left lg:px-6 lg:col-start-4 flex flex-col">
      <button className="text-[#ffffff] text-xl place-self-end absolute" onClick={()=> onClose()}></button>
     
          <div className="bg-[#345262] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6">
            {children}
          </div>
        </div>
        
      </div>
    

    

     );
}

export default Modal;