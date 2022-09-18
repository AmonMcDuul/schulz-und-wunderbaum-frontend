export interface Note {
    id: string;
    name: string;
    description: string;
    categories: Array<string>;
    date: Date;
};