export interface AccountDataModel { //interface quer dizer uma fôrma de dados
    name: string;
    account: {
        agency: string;
        number: string;
    };
    card: {
        limit: number;
        number: string;
    };
}