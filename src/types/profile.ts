import { Publication } from "./publication";

export type Profile = {
    id: number;
    nickname: string;
    avatar: string;
    balance: number;
    rating: number;
    userId: number;
    publications: Publication[];
}