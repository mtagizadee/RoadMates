export const homePageUrl: string = '/home';
export const aboutPageUrl: string = '/';

export const authURls: {
    login: string;
    register: string;
} = {
    login: '/auth/login',
    register: '/auth/register'
}

export const apiBaseURL = 'http://localhost:5000';
export const apiRequestURLs: {
    publications: {
        getAll: string,
        create: string,
        pagination: string,
        getNumberOfPages: string
    }
} = {
    publications: {
        getAll: `${apiBaseURL}/publications`,
        create: `${apiBaseURL}/publications`,
        pagination: `${apiBaseURL}/publications/page=`,
        getNumberOfPages: `${apiBaseURL}/publications/pages/all`
    }
}