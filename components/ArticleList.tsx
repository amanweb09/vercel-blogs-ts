import { IArticle } from "../types";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropType {
    articles: IArticle[]
}

const ArticleList = ({ articles }: IPropType) => {
    return (
        <div className="grid sm:grid-cols-2 grdi-cols-1 gap-6 sm:mt-16 mt-8 sm:px-0 px-4">
            {
                articles.map((article, idx) => {
                    return (
                        idx === 1 ?
                            <BlogCardWithImage article={article} />
                            :
                            <BlogCard key={article.id} article={article} />
                    )
                })

            }
        </div>
    );
}

export default ArticleList;