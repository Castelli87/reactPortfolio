const Home=()=>{
    return (
        <main className="container mx-auto px-5 grid md:grid-cols-2 items-center justify-center md:justify-between " >
            <section className="flex-column ml-6">
                <h2 className="font-serif text-left mx-10 md:text-left" ><span className="italic font-bold text-xl">Davide Castelli</span></h2>
                <h2 className="font-serif text-left mx-10 md:text-left"></h2>
                <h4 className="font-serif text-left mx-10"> Junior Software Engineer</h4>
                <button className="bg-blue-500 m-7 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" ><a href="/#About">About Me</a></button>
            </section>
            <section>
                <img className="w-96"src="../src/assets/Images/web-design-layout.svg" alt="" />
            </section>
        </main>

    )
}
export default Home