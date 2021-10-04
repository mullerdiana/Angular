export class ConversaoResponse{
    constructor(
        public base?:string,
        public date?: string,
        public rates?: any
    ){}
}

// como esperamos receber esses valores: {"base:"USD", "date":"2017-03-08", "rates":{"BRL":3.1405}}