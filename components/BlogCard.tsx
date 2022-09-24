import Link from "next/link";
import { IArticle } from "../types";

interface IPropType {
    article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
    return (
        <div className="sm:py-0 py-4">
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className="text-lg text-gray-600 capitalize font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    { article.attributes.Title }
                </h1>
            </Link>

            <div className="flex items-center my-4">
                <span className="sm:text-sm text-xs font-bold text-gray-600 capitalize">
                    {article.attributes.author.firstname} {''} {article.attributes.author.lastname} on
                </span>
                <span className="text-gray-400 ml-2 sm:text-base text-xs">
                    Sunday, September 24, 2022
                </span>
            </div>

            <div className="text-gray-500">
                {article.attributes.shortDescription.slice(0, 250)}{article.attributes.shortDescription.length > 250 ? '...': ''}
            </div>
        </div>
    );
}

export default BlogCard;