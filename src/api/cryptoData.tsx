import { axiosClient } from './apiClient';

export function getPools() {
  return axiosClient.get('/pools');
}

export function addProduct(data) {
  return axiosClient.post('/product', JSON.stringify(data));
}
