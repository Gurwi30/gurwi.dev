import { time } from "node:console";

export class TimePoint {
    year: number;
    now: boolean;
    description: string;

    constructor(year: number, now: boolean, description: string) {
        this.year = year;
        this.now = now;
        this.description = description;
    }

    public getPointName(): string {
        return this.year.toString().concat(this.now ? "-now" : "");
    }

}

interface TimelineProps {
    timepoints: TimePoint[];
}

export default function Timeline({ timepoints }: TimelineProps) {

    const Square = () => {
        return (
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rotate-45 bg-yellow-500">

            </div>
        )
    };

    const Old = () => {
        return (
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                {
                    timepoints.map((point: TimePoint) => (
                        <>

                            {timepoints.indexOf(point) % 2 == 0 ?

                                <div className="flex md:contents" key={point.getPointName()}>
                                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rotate-45 bg-yellow-500 shadow"></div>
                                    </div>
                                    <div className="col-start-6 col-end-8 p-4 my-4 mr-auto shadow-md flex flex-col items-center">
                                        <h3 className="font-semibold text-left text-lg whitespace-nowrap text-yellow-600 ab mb-1">{point.getPointName()}</h3>
                                        <p className="leading-tight text-left text-balance text-sm">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>    

                                :

                                <div className="flex flex-row-reverse md:contents" key={point.getPointName()}>
                                    <div className="col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md" key={point.getPointName()}>
                                        <h3 className="font-semibold text-lg text-right whitespace-nowrap text-yellow-600 mb-1">{point.getPointName()}</h3>
                                        <p className="leading-tight text-right text-balance text-sm">
                                            {point.description}
                                        </p>
                                    </div>
                                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                                        </div>
                                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rotate-45 bg-yellow-500 shadow"></div>
                                    </div>
                                </div>

                            }

                        </>
                    ))
                }

                <div className="flex flex-row-reverse md:contents">
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className=" h-48 w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                            </div>               
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="container flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
        </div>
    );
}
