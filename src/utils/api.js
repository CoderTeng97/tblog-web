import axios from 'axios'
import { async } from 'q';


const ajax = config => new Promise((resolve, reject) => axios({
    ...config,
}).then(res => {
    if (res.data.code == 200) {
        resolve(res.data.data)
    } else {
        reject(res.data.msg)
    }
}).catch(e => reject('请求失败，请重试')))


/**
 * 发布文章
 * @param {*} articleInfo  
 */
export const releaseArticle = (articleInfo) => ajax({
    url: '/article/release',
    method: 'post',
    data: {
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
    data: {
        articleInfo
    }
})

/**
 * 获取OSS上传凭证
 */
export const uploadSingleFile1 = (file) => {
    getPolicy().then(
        policy => {
            console.log(policy);
            let formdata = new FormData();
            let ossPath = policy.dir + "/145.jpg";
            formdata.append('Filename', ossPath);
            formdata.append('OSSAccessKeyId',policy.OSSAccessKeyId)
            formdata.append('signature',policy.signature)
            formdata.append('policy',policy.policy)
            formdata.append('success_action_status',policy.success_action_status)
            formdata.append('key', ossPath);
            formdata.append('file', file);
            console.log(formdata);
            let info = ossUpload(policy.host, formdata);
            console.log("upload:" + info);
            return policy.host + "/" + ossPath;
        }
    );
    
}

function ossUpload(url, formdata) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data'},
        }).then(resolve)
    });
}

function getPolicy(){
    return ajax({
        url:'oss/wpolicy',
        method:'get'
    })
}

export const uploadSingleFile = async function (file){
    let policy = await getPolicy();
    let formdata = new FormData();
    for (let key of Object.keys(policy)) {
    formdata.append(key, policy[key]);
    }
    let ossPath = policy.dir + "/test";
    formdata.append('key', ossPath);
    formdata.append('file', file);
    await ossUpload(policy.host,formdata);
    return policy.host + "/" + ossPath;
    }