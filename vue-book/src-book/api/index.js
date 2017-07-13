import axios from 'axios';
//导出函数getSliders
export function getSliders() {
  return axios.get('/api/getSliders');
}

export function getHotBook() {
  return axios.get('/api/hot')
}

//获取列表
export function getBookList() {
  return axios.get('/api/book')
}
