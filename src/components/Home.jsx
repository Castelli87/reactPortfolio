const Home=()=>{
    return (
        <main className="container mx-auto px-5 grid md:grid-cols-2 items-center justify-center md:justify-between " >
            <section className="flex-column ml-3">
                <h2 className="font-serif text-left mx-10 md:text-left" >Hi, I'm<span className="italic"> Davide Castelli</span></h2>
                <h2 className="font-serif text-left mx-10 md:text-left">a</h2>
                <h4 className="font-serif text-left mx-10"> Junior Software Engineer</h4>
                <button class="bg-blue-500 m-7 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >About Me</button>
            </section>
            <section>
                <img className="w-96"src="../src/assets/Images/web-design-layout.svg" alt="" />
            </section>
        </main>

    )
}
export default Home