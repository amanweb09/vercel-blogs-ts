import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:3000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export const fetchCategories = async () => { return api.get('/api/categories') }
export const fetchArticles = async () => { return api.get('/api/articles') }
export const fetchArticleBySlug = async (query: string) => { return api.get(`/api/article?slug=${query}`) }