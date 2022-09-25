import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.VERCEL_API_URL : process.env.API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export const fetchCategories = async () => { return api.get('/api/categories') }
export const fetchArticles = async () => { return api.get('/api/articles') }
export const fetchArticleBySlug = async (query: string) => { return api.get(`/api/article?slug=${query}`) }