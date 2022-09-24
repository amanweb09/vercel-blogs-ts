import { NextApiRequest, NextApiResponse } from "next";
import { IArticle } from "../../types";
import articles from '../../json/articles.json'


const handler = (req: NextApiRequest, res: NextApiResponse<IArticle[]>) => {

    return res.status(200).json(articles)
}

export default handler