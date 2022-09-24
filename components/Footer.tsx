import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex items-center sm:justify-start justify-between py-4 px-2 sm:px-0 fixed bottom-0  bg-white w-full container mx-auto">

            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image
                        src={'/favicon.ico'}
                        alt={"logo"}
                        width={20}
                        height={20} />
                    <span className="font-bold ml-2 text-gray-500 sm:text-sm text-xs">Vercel Blogs</span>
                </div>
            </Link>

            <div className="text-gray-500 ml-6 sm:text-sm text-xs">
                &copy; 2022 Vercel Blogs <span className="sm:inline-block hidden">- @amankhanna </span>
            </div>
        </footer>
    );
}

export default Footer;