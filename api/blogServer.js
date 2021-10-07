import {fetchAPI} from './index'

export async function getAllList(pageNum) {
  const data = await fetchAPI(`/articleList/${pageNum}`)
  return data
}

export async function getCategoryList() {
  const data = await fetchAPI(`/getArticleLabel`)
  return data
}

export async function getCategoryPageList(cate, pageNum) {
  const data = await fetchAPI(`/getArticleLabel/${encodeURI(cate)}/${pageNum}`)
  return data
}

export async function searchByKey(keyword) {
  const data = await fetchAPI(`/articleSearch/${keyword}`)
  return data
}

export async function articleDetail(id) {
  const data = await fetchAPI(`/articleDetails/${id}`)
  return data
}
