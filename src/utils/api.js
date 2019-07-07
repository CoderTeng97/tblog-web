import axios from 'axios'

const proxy  = 'http://localhost:8090';
const ajax = config => new Promise((resolve, reject) => axios({
    ...config,
}).then(res => {
    if(res.data.code == 200) {
        resolve(res.data.data)
    }else{
        reject(res.data.msg)
    }
}).catch(e => reject('请求失败，请重试')))


/**
 * 发布文章
 * @param {*} articleInfo  
 */
export const releaseArticle = (articleInfo) => ajax({
    url: proxy + '/article/release',
    method: 'post',
    data:{
        articleInfo
    }
})

/**
 * 更新文章
 * @param {*} articleInfo 
 */
export const updateArticle = (articleInfo) => ajax({
    url: '/article/update',
    method: 'post',
    data:{
        articleInfo
    }
})