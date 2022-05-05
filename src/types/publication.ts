export type Publication = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    expiredAt: Date;
    from: string;
    to: string;
    price: number;
    criteria?: string;
    additionalInfo?: string;
    authorId: number;
}