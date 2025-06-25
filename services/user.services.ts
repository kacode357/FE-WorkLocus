import { defaultAxiosInstance } from '@/config/axios.config';

const CreateUserApi = async (data: { fullName: string; email: string; userName: string; password: string; }) => {
    const response = await defaultAxiosInstance.post('/api/users/create', data);
    return response.data;
};
const CreateMerchantApi = async (data: { fullName: string; email: string; userName: string; password: string; }) => {
    const response = await defaultAxiosInstance.post('/api/merchants/create', data);
    return response.data;
};
const LoginUserApi = async (data: { userName: string; password: string; }) => {
    const response = await defaultAxiosInstance.post('/api/users/login', data);
    return response.data;
};
const GetCurrentUserApi = async () => {
    const response = await defaultAxiosInstance.get('/api/users/get-current-login');
    return response.data;
};
const RefreshTokenApi = async (data: { accessToken: string; refreshToken: string; }) => {
    const response = await defaultAxiosInstance.post('/api/users/refresh-token', data);
    return response.data;
};
const GetUserByIdApi = async (id: string) => {
    const response = await defaultAxiosInstance.get(`/api/users/getById?id=${id}`);
    return response.data;
};

const UpdateUserApi = async (data: { id: string; phoneNumber: string; fullname: string; image: string; dateOfBirth: string; }) => {
    const response = await defaultAxiosInstance.put('/api/users/update', data);
    return response.data;
};
const SearchUsersApi = async (data: { searchKeyword: string; status: boolean; premium: boolean; role: string; pageNum: number; pageSize: number; }) => {
    const response = await defaultAxiosInstance.post('/api/users/search', data);
    return response.data;
};
export {
    CreateUserApi,
    CreateMerchantApi,
    GetUserByIdApi,
    UpdateUserApi,
    SearchUsersApi,
    RefreshTokenApi,
    GetCurrentUserApi,
    LoginUserApi,
};

