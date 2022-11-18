import { axiosClient } from './apiClient';

export function getPools() {
  return axiosClient.get('/pools');
}
