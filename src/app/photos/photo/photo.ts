export interface Photo{ // A interface me permite definir um shape, uma forma de um objeto para que eu possa tratar de maneira tipada usar o outro complete e etc.
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments : boolean;
    likes: number;
    comments: number;
    userId: number;
    //Essa interface é usada para tipar o meu objeto photo para que seja possível realizar o 
    //autocomplete e meu typescript me informar possíveis erros.

    //renomear simbolo altera todas as ocorrencias onde o atributo está sendo ultilizado.
}