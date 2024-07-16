import Image from "next/image";
import "./fonts.css"
import NavBar from "./components/navbar/navbar";

export default function Home() {
    return (
        <main className=" lg:px-44 xl:px-60 2xl:px-96">
            <NavBar />
        </main>
    );
}
