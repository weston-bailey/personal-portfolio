// built in components from next.js
// self-referencial links us the Link component
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>
        </nav>
    )
}