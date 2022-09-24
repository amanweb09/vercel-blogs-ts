import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { fetchArticleBySlug } from "../../http";
import { IArticle } from "../../types";

interface IPropTypes {
    article: IArticle
}

const Slug = ({ article }: IPropTypes) => {

    return (
        <div className="px-4 sm:px-0">
            <Link href={'/'}>
                <span className="text-primary block text-sm cursor-pointer mt-4 mb-8">Back to home</span>
            </Link>
            <h1 className="font-bold text-xl capitalize">
                {article.attributes.Title}
            </h1>

            <span className="text-gray-400 mt-2 block font-semibold capitalize">
                By {article.attributes.author.firstname} {''} {article.attributes.author.lastname}
            </span>

            <p className="text-justify text-gray-600 mt-8 mb-4">
                {article.attributes.body}
            </p>

        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { data: article }: AxiosResponse<IArticle> = await fetchArticleBySlug(`${ctx.query.slug}`)

    return {
        props: { article }
    }

}

export default Slug;