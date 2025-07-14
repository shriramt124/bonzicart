import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (<div className="flex items-center">
        <Link href="/" className="flex items-center h-10">
            <div className="relative flex items-center justify-center">
                <Image
                    src="/bonzilogo.png"
                    alt="Bonzi"
                    width={70}
                    height={70}
                    className="transition-opacity duration-300"
                    style={{
                        objectFit: "contain",
                        height: "auto",
                    }}
                    priority
                />
            </div>
        </Link>
    </div>)
}