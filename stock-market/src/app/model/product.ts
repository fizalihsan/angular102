export class Product {
    constructor(public name: string, 
        public price: number,
        public imageUrl: string,
        public isOnSale: boolean = false
        ){}
}
