import request from '@/utils/http'
import qs from 'qs'

/**
 * 登录
 * @param {*} email 
 * @param {*} password 
 */
export function login(email, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      email,
      password,
      "username": email
    }
    // data: qs.stringify(data)
  })
}

/**
 * 注册
 * @param {*} email 
 * @param {*} password 
 * @param {*} username  用户名
 */
export function Registry(email, username, password) {
  return request({
    url: '/user/registry',
    method: 'post',
    data: {
      email,
      password,
      username
    }
    // data: qs.stringify(data)
  })
}

/**
 * 用户邮箱是否存在
 * @param {*} email 
 */
export function isExistEmail(email) {
  return request({
    url: '/user/isExistEmail',
    method: 'get',
    params: {
      email
    }
  })
}

/**
 * 用户名是否存在
 * @param {*} username 
 */
export function isExistUserName(username) {
  return request({
    url: '/user/isExistEmail',
    method: 'get',
    params: {
      username
    }
  })
}