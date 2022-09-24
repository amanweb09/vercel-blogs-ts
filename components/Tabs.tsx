import Link from "next/link";
import { useRouter } from "next/router";
import { ICategory, ICollectionResponse } from "../types";

interface IPropType {
    categories: ICollectionResponse<ICategory>[],
    handleOnSearch: (query: string) => void
}

const Tabs = ({ categories, handleOnSearch }: IPropType) => {

    const router = useRouter()

    function isActiveLink(category: ICollectionResponse<ICategory>) {
        return category.attributes.Slug === router.query.category
    }

    return (
        <div className="my-8 flex sm:flex-row flex-col items-center justify-between border-b-2 border-gray-100">

            <ul className="flex items-center">
                <li className={`mr-6 sm:mb-0 mb-2 pb-4 sm:text-base text-xs border-b-solid border-b-4 rounded-sm 
                ${router.pathname === '/'
                        ? `border-b-primary text-primary`
                        : `border-b-white`}`}>
                    <Link href={'/'}>Recent</Link>
                </li>
                {
                    categories.map((category) => {
                        return <li
                            key={category.id}
                            className={`mr-6 pb-4 sm:text-base text-xs border-b-4 rounded-sm 
                        ${isActiveLink(category)
                                    ? `border-b-primary text-primary`
                                    : `border-b-white`}`}>
                            <Link href={`/category/${category.attributes.Slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>
                    })
                }
            </ul>

            <div className="">
                <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none sm:block hidden px-4 py-2 mt-1 border border-gray-100 rounded-full" />
            </div>
        </div>
    );
}

export default Tabs;