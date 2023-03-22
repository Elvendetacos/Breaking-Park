import Modal from "../conteiners/Modal";

function SingUp() {
    //const [showModalito, setShowModalito] = useState(false);
    return ( 
        //<Modal mostrar={showModalito} onClose={() => setShowModalito(false)}>
        <div className="py-6 px-6 lg:px-8 text-center">
            <div>
                <p className="text-5lx text-center text-white gap-4 m-6 px6">INICIO DE SESION</p>
            </div>
            <div className="">
                <form className="lg:col-start-2 lg:col-span-4 ">
                <div className="relative">
                <label className="text-2xl text-white absolute top-1 cursor-text">CORREO: </label>
                <input className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none" type="text"></input>
                </div>
                <div className="relative">
                <label className="text-2xl text-white absolute top-1 cursor-text">CONTRASEÑA: </label>
                <input className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none"></input>
                </div>
                <div className="">
                    <div className="bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7">
                       <button>INICIAR SESION</button>
                   </div>
                </div>
                <div>
                    <p className="text-[12px] text-center m-1">
                    ¿No tienes cuenta? <a href="/ModalSingIn">Registrate</a>
                    </p>
                </div>
            </form>
            </div>
        </div>
       // </Modal>
     );
}

export default SingUp;