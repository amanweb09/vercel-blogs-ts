export interface ICollectionResponse<T> {

    id: number,
    attributes: T
    // meta: IResourceMeta

}

export interface ICategory {

    Title: string;
    Slug: string;

}

export interface ICategoryAttribute { }


export interface IArticleAttribute {
    Title: string,
    body: string,
    Slug: string,
    image: string,
    author: IAuthor,
    category: ICategory,
    shortDescription: string
}

export interface IAuthor {
    firstname: string,
    lastname: string
}

export interface IArticle {
    id: number,
    attributes: IArticleAttribute
}

export type TDirection = 1 | -1

// export interface IResourceMeta {
//     pagination: IPagination
// }

// export interface IPagination {
//     page: number,
//     pageSize: number,
//     pageCount: number,
//     total: number
// }