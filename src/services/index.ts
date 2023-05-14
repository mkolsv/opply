import { OpplyService } from './OpplyService.ts';
import axios from 'axios';

export const opplyService = OpplyService.create({
    httpClient: axios,
    apiUrl: import.meta.env.VITE_API_URL
});