import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchArticles, fetchCategories } from '../http'
import { AxiosResponse } from 'axios'
import { IArticle, ICategory, ICollectionResponse } from '../types'
import Tabs from '../components/Tabs'
import ArticleList from '../components/ArticleList'
import Pagination from '../components/Pagination'
import { useRouter } from 'next/router'
import { debounce } from '../utils'

interface IPropTypes {
  categories: ICollectionResponse<ICategory>[],
  articles: IArticle[]
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {  //all prop types in next.js are given as generics inside NextPage Type

  const router = useRouter()

  function handleOnSearch(query: string) {

    router.push(`?search=${query}`)

  }

  return (
    <div>
      <Head>
        <title>Vercel Blogs homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Tabs categories={categories} handleOnSearch={debounce(handleOnSearch, 500)} />

      <ArticleList articles={articles} />

      <Pagination
        page={2}
        pageCount={2} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles()

  return {
    props: {
      categories,
      articles
    }
  }

}

export default Home
