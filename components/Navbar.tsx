import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="py-6 sm:px-0 px-4 flex items-center justify-between">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image
                        src={'/favicon.ico'}
                        alt={"logo"}
                        width={30}
                        height={30} />
                    <span className="font-bold ml-2 sm:text-base text-sm text-primary">Vercel Blogs</span>
                </div>
            </Link>

            <ul className="sm:flex hidden sm:items-center">
                <li className="mr-6 font-medium text-gray-600 hover:text-primary">
                    <a href="#">Products</a>
                </li>
                <li className="mr-6 font-medium text-gray-600 hover:text-primary">
                    <a href="#">Pricing</a>
                </li>
                <li className="mr-6 font-medium text-gray-600 hover:text-primary">
                    <a href="#">Docs</a>
                </li>
                <li className="mr-6 font-medium text-gray-600 hover:text-primary">
                    <a href="#">Company</a>
                </li>
            </ul>

            <ul className="flex items-cemter">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-primary sm:text-base text-xs">Log In</a>
                </li>
                <li className="sm:mr-6 font-medium text-gray-600">
                    <a href="#" className="bg-primary hover:bg-primary-dark transition-all py-2 sm:px-4 sm:text-base text-xs px-2 rounded-sm text-white">Sign Up</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;