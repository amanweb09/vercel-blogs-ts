import Image from "next/image";
import Link from "next/link";
import { IArticle } from "../types";

interface IPropType {
    article: IArticle
}

const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center sm:h-56 w-full sm:px-0 sm:py-0 py-6 px-4 sm:mx-6">
            <Link href={`/article/${article.attributes.Slug}`}>
                <span
                    className="sm:text-2xl text-lg capitalize w-2/3 text-white p-8 font-bold after:content=[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.Title}
                </span>
            </Link>
            <Image
                height={100}
                width={100}
                src={'/vercel.svg'}
                alt="logo" />
        </div>
    );
}

export default BlogCardWithImage;