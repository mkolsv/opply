import { AxiosStatic } from 'axios';
import { Supplier } from '@/types';

export interface OpplyServices {
    httpClient: AxiosStatic
    apiUrl: string
}
export class OpplyService {
    _httpClient: AxiosStatic;
    _apiUrl: string

    static create({ httpClient, apiUrl }: OpplyServices) {
        return new OpplyService({
            httpClient,
            apiUrl
        });
    }

    constructor({ httpClient, apiUrl }: OpplyServices) {
        this._apiUrl = apiUrl;
        this._httpClient = httpClient;
        this._addInterceptors();
    }

    signUp(userData: Object): Promise<{ auth_token: string }> {
        return this._httpClient.post(`${this._apiUrl}/api/v1/users/`, userData) as any;
    }

    signIn(userData: object): Promise<{ token: string }> {
        return this._httpClient.post(`${this._apiUrl}/api-token-auth/`, userData);
    }

    fetchSuppliers(page: number): Promise<{ results: [], count: number }> {
        return this._httpClient.get(`${this._apiUrl}/api/v1/suppliers/`, { params: { page } });
    }

    fetchSupplier(id: number): Promise<Supplier> {
        return this._httpClient.get(`${this._apiUrl}/api/v1/suppliers/${id}/`);
    }

    fetchQuotes(page: number): Promise<{ results: [], count: number }> {
        return this._httpClient.get(`${this._apiUrl}/api/v1/quotes/`, { params: { page } });
    }

    _addInterceptors() {
        this._httpClient.interceptors.request.use((config) => {
            if (localStorage.getItem('token')) config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;

            return config;
        }, (error) => Promise.reject(error));

        this._httpClient.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error.response.data);
        });
    }
}