export type statute = {
    id: string;
    name: string;
    index: number;
    serial: number;
    content: string;
    lawDocuments: string;
    lawDocumentsLink: string;
    files: codificationFile[];
    boards: codificationBoard[];
};

export type codificationFile = {
    link: string;
    path: string;
};

export type codificationBoard = {
    id: string;
    html: string;
};

export type pureStatute = {
    id: string;
    name: string;
    index: number;
    serial: number;
    content: string;
    lawDocuments: string;
    lawDocumentsLink: string;
};