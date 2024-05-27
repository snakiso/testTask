import axios from 'axios'
import {KidTechType} from "./api-types.ts";

const instance = axios.create({
    baseURL: 'https://logiclike.com/docs',
})

export const kidsTechApi = {
    getKidsTech() {
        const promise = instance.get<KidTechType>('/courses.json');
        return promise;
    },
}