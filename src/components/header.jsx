function Header({children}) {
    return ( 
        <>
        <header className="bg-[#263744] lg:h-[90px] h-[60px] w-full font-bolder text-white text-[45px] flex justify-center items-center">
            <div className="h-full w-full lg:ml-[32px] ml-4 mr-4 lg:mr-[32px] flex justify-center items-center">
                <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-3/4 grid-cols-4 gap-4">
                {children}
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;