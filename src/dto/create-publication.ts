export type CreatePublicationDto = {
    from: string;
    to: string;
    price?: number;
    criteria?: string;
    additionalInfo?: string;
}