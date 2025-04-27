
export default function HomeSection() {
    return (
        <section id="home" className="h-screen snap-center">
            <div className="flex flex-col justify-center items-center text-center h-screen">
                <h1 className="text-xl md:text-2xl homemade-apple-regular">
                    Hey, i'm gurwi
                </h1>

                <h2 className="gabarito-regular text-4xl sm:text-5xl lg:text-7xl font-bold uppercase">
                    A passionate{" "}
                    <span className="text-blue-500">Full Stack Dev</span> <br className=" hidden md:block" />{" "}
                    & <span className="text-blue-500">Modder</span> from Italy
                </h2>

                <h3 className="text-white/40 mt-2 text-sm md:text-base">
                    Crafting seamless web experiences & custom mods
                </h3>
            </div>
        </section>
    );
}