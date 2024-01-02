import { request } from '../request';

/**
 * 登录
 * @param data
 */
export function fetchLogin(data: object) {
  return request.post<ApiAuth.Token>('/auth/login', data);
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/user/info');
}

/**
 * 获取登录验证码
 */
export function fetchCaptcha() {
  return request.get<ApiAuth.Captcha>('/auth/captcha');
}
