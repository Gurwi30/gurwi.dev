import "./style.css"
import TextCodeBox from "../generic/textblock";

export default function HomeSection() {
    return (
        <section id="home">

            <div className="not-text grid gap-y-8 h-screen md:grid-cols-2">

                <div className="not-text flex flex-col justify-center items-center md:items-start">
                    <TextCodeBox tagsText='developer' tagsColor='#dba802'>
                        <div className="font-jetbrains-mono font-bold text-8xl tracking-wide">
                            <h1>Gurwi</h1>
                            <h1>Works</h1>
                        </div>
                    </TextCodeBox>
                </div>

                <div className="not-text flex flex-col justify-center items-center md:items-end">

                    <TextCodeBox tagsText='about me' tagsColor='#dba802'>
                        <div className="font-jetbrains-mono text-8xl tracking-wide">
                            <div className="text-base">
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>consectetur adipiscing elit.</p>
                                <p>Vestibulum id efficitur felis,</p>
                                <p>in consectetur nulla.</p>
                            </div>
                        </div>
                    </TextCodeBox>
                </div>

            </div>

        </section>
    )
}