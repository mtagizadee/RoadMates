import { CreatePublicationDto } from "../dto";
import axios from "axios";
import { apiRequestURLs } from "../constants";

export default class PublicationService {
    static async create(dto: CreatePublicationDto) {
        const JWToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoibWFoYW1tYWQudGFnaGl6YWRhQHVmYXouYXoiLCJpYXQiOjE2NTE3MzM0MjgsImV4cCI6MTY1MTgxOTgyOH0.bwuZhrjjLwtXmicyB38z6jQ61Yp58B53M4AZbgda3iA'
        const headers: any = { Authorization: `Bearer ${JWToken}`}
        await axios.post(apiRequestURLs.publications.create,dto, { headers });
    }
}