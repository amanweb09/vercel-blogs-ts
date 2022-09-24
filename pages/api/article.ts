import { NextApiRequest, NextApiResponse } from "next";
import articles from "../../json/articles.json";
import { IArticle } from "../../types";

export default (req: NextApiRequest, res: NextApiResponse<IArticle>) => {

    const { slug } = req.query

    const [article] = articles.filter((art) => {
        return art.attributes.Slug === slug
    })

    return res.status(200).json(article)

}