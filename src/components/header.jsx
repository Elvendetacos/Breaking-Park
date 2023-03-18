function Header({children}) {
    return ( 
        <>
        <header className="bg-[#263744] h-[100px] w-full font-bolder text-white text-[45px] flex justify-center items-center">
            <div className="h-full w-full ml-[32px] mr-[32px] flex justify-center items-center">
                <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-3/4 sm:grid-cols-4 sm:gap-4">
                {children}
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;