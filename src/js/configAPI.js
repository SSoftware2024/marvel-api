import axios from 'axios';
import { md5 } from 'js-md5';
const MARVEL_ENDPOINT = 'https://gateway.marvel.com/';

const PRIVATE_KEY = null ?? import.meta.env.VITE_PRIVATE_KEY;
const PUBLIC_KEY = null ?? import.meta.env.VITE_PUBLIC_KEY;
const ts = 1;

const getAxios = async () => {
    try {
        return axios.create({
            baseURL: MARVEL_ENDPOINT+'v1/public/',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            params: {
                'ts': 1,
                'apikey':  PUBLIC_KEY,
                'hash': md5(ts+PRIVATE_KEY+PUBLIC_KEY),
            }
        });
    } catch (error) {
        console.error('Erro de configuração instância axios');
        console.error(error.message);
    }
};
export default getAxios;