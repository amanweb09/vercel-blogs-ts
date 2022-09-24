import type { NextApiRequest, NextApiResponse } from "next";
import { ICategory, ICollectionResponse } from "../../types";
import categories from '../../json/categories.json'


export default (
  req: NextApiRequest,
  res: NextApiResponse<ICollectionResponse<ICategory>[]>
) => {

  return res.status(200).json(categories)

}