import { AxiosStatic } from 'axios';

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
        this._addDefaultHeaders();
    }

    async signUp(userData: Object) {
        try {
            const response = await this._httpClient.post(`${this._apiUrl}/api/v1/users/`, userData);

            this._saveToken(response.data.auth_token);
        } catch (error: any) {
            throw error.response.data;
        }
    }

    async signIn(userData: object) {
        try {
            const response = await this._httpClient.post(`${this._apiUrl}/api-token-auth/`, userData);

            this._saveToken(response.data.token);
        } catch (error: any) {
            throw error.response.data;
        }
    }

    async fetchSuppliers(page: number) {
        try {
            const response = await this._httpClient.get(`${this._apiUrl}/api/v1/suppliers/`, { params: { page } });

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    async fetchSupplier(id: number) {
        try {
            const response = await this._httpClient.get(`${this._apiUrl}/api/v1/suppliers/${id}/`);

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    async fetchQuotes(page: number) {
        try {
            const response = await this._httpClient.get(`${this._apiUrl}/api/v1/quotes/`, { params: { page } });

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    _addDefaultHeaders() {
        if (!localStorage.getItem('token')) return;

        this._httpClient.defaults.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
    }

    _saveToken(token: string) {
        localStorage.setItem('token', token);
        this._addDefaultHeaders();
    }
}