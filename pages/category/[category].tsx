import { AxiosResponse } from "axios";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BlogCard from "../../components/BlogCard";
import Tabs from "../../components/Tabs";
import { fetchArticles, fetchCategories } from "../../http";
import { ICollectionResponse, ICategory, IArticle, IArticleAttribute } from "../../types";
import { capitalizeFirstLetter, debounce, makeCategory } from "../../utils";

interface IPropTypes {
    categories: ICollectionResponse<ICategory>[],
    articles: IArticle[]
}

const Category: NextPage<IPropTypes> = ({ categories, articles }) => {

    const router = useRouter()

    function formattedCategory(): string {
        return capitalizeFirstLetter(makeCategory(`${router.query.category}`))
    }


    function handleOnSearch(query: string) {

        router.push(`?search=${query}`)

    }

    return (
        <div className="px-4 sm:px-0">
            <Head>
                <title>Blogs - Vercel {formattedCategory()}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Tabs categories={categories} handleOnSearch={debounce(handleOnSearch, 500)} />
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                {
                    articles.map((article) => {
                        return <BlogCard
                            key={article.id}
                            article={article} />
                    })
                }
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { data: categories }: AxiosResponse<ICollectionResponse<ICategory>[]> = await fetchCategories()
    const { data: articles }: AxiosResponse<ICollectionResponse<IArticleAttribute>[]> = await fetchArticles()

    const filterArt = articles.filter((art) => {
        return art.attributes.category.Slug === ctx.query.category
    })

    return {
        props: {
            categories,
            articles: filterArt
        }
    }

}

export default Category;