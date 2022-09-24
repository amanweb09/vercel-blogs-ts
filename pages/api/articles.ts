import { NextApiRequest, NextApiResponse } from "next";
import { IArticle } from "../../types";
import articles from '../../json/articles.json'


export default (req: NextApiRequest, res: NextApiResponse<IArticle[]>) => {

    return res.status(200).json(articles)
}