export interface FingerprintModel {
    id: number;
    fingerprint: string;
    tokens: number;
    created_at: Date;
}

export interface AbstractRequestModel {
    url: string;
    lang?: string;
}

export interface AbstractModel {
    url: string;
    date: Date;
    hash: string;
    lang: string;
    logo?: string | null;
    image: string;
    title: string;
    author?: string | null;
    resume: string;
    publisher: string;
    description: string;
}
