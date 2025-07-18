const Header = ({tanggal, genre, judul}) => {
    return(
        <div className="flex flex-col gap-4">
            <section className="header flex w-full justify-center gap-8 items-center">
            <span className="upload flex justify-start gap-2 items-center">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-gray-700 fill-current" viewBox="0 0 24 24">
                    <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95m6.9-2.55q1.025-1.125 1.563-2.512T20 12q0-2.45-1.362-4.475T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4" />
                </svg>
                </div>
                <div className="text-lg text-gray-700 font-normal">
                {tanggal}
                </div>
            </span>
            <span className="title flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M2 3v18c0 .6.4 1 1 1h11V2H3c-.6 0-1 .4-1 1m19-1h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1" />
                </svg>
                <p className="text-lg text-gray-700 font-normal">{genre}</p>
            </span>
            </section>
            <section className="title flex justify-center mx-auto w-full">
            <h1 className="text-5xl md:text-center flex mx-auto font-bold text-gray-700">{judul}</h1>
            </section>
        </div>
    );
};

export default Header;