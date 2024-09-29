'use client'
import TextCodeBox from "../generic/textblock";
import Timeline, { TimePoint } from "../generic/timeline";

const technologies = [
    { name: "TypeScript", size: "text-lg translate-y-20" },
    { name: "React", size: "text-5xl translate-x-20" },
    { name: "Flutter", size: "text-md translate-x-10" },
    { name: "ReactNative", size: "text-3xl translate-x-40" },
    { name: "Python", size: "text-xl translate-x-20" },
    { name: "JavaScript", size: "text-4xl translate-x-20" },
    { name: "Node.js", size: "text-2xl translate-x-20" }
];

export default function ExperpertiesSection() {
    return (
        <section id="experties">
            <div className="grid gap-y-8 h-screen md:grid-cols-2">

                <div className="not-text flex flex-col justify-center items-center md:items-start">
                    <TextCodeBox tagsText='experiences' tagsColor='#dba802'>
                        <div className="font-jetbrains-mono font-bold text-8xl tracking-wide">
                            <Timeline timepoints={[ 
                                new TimePoint(2023, true, "Currently working for CoralRP as a Java Developer"),
                                new TimePoint(2022, false, "Worked for WarAccademy.com as a Java Developer"),
                            ]} />
                        </div>
                    </TextCodeBox>
                </div>

                <div className="not-text flex flex-col justify-center items-center md:items-end">
                    <TextCodeBox tagsText='technologies' tagsColor='#dba802'>
                        Text Text Text
                    </TextCodeBox>
                </div>

            </div>
        </section>
        
        // <section id="experties" className="not-text grid-cols-2 h-screen place-items-center justify-center flex-col flex md:grid">
        //     <div className="grid justify-start place-items-center">
        //         <TextCodeBox tagsText='experiences' tagsColor='#dba802'>
        //             <div className='font-jetbrains-mono font-bold text-8xl tracking-wide'>
        //                 <Timeline timepoints={[ 
        //                     new TimePoint(2023, true, "Currently working for CoralRP as a Java Developer"),
        //                     new TimePoint(2022, false, "Worked for WarAccademy.com as a Java Developer"),
        //                 ]} />
        //             </div>
        //         </TextCodeBox>
        //     </div>
        
        //     <div className="grid justify-end place-items-center md:mt-0 mt-6">
        //         <TextCodeBox tagsText='technologies' tagsColor='#dba802'>
        //             <div className="grid gap-4 text-center">
        //                 {technologies.map((tech, index) => (
        //                 <span key={index} className={`${tech.size} opacity-80 font-semibold`}>
        //                     {tech.name}
        //                 </span>
        //                 ))}
        //             </div>
        //         </TextCodeBox>
        //     </div>

        // </section>
    )
}