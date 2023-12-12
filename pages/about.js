import Image from "next/image";
// import css module for this component
// any clAss defined in the module will be availible with dot notation
import styles from "@/styles/About.module.css";
// all react hooks are availible to us
import { useState } from "react";

export default function About() {
    const [fontSize, setFontSize] = useState(2)
    return (
        <>
            <h1>About Me</h1>

            <p className={styles.greenColor}>I am a software engineer that imagines things and then makes them with code!</p>

            {/* dynaimc css with js values injected into it from state/context */}
            <style jsx>{`
                .fontSize {
                    font-size: ${fontSize}rem;
                }
            `}</style>

            <p className="fontSize">This is my brandstatement</p>

            <button onClick={() => setFontSize(fontSize + 1)} >Click Me!</button>

            {/* <img src="/headshot.png" alt="me while debugging" /> */}

            <Image 
                src="/headshot.png"
                alt="me debugging my sphagetti code"
                // if you do use next Images -- hard coded width and height is required
                width={400}
                height={600}
            />

            {/* using another hosting service */}
            <Image 
                src="https://placekitten.com/400/600"
                alt="Cat"
                width={400}
                height={600}
            />
        </>
    )
}