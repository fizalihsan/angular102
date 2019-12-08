import { Person } from './person';

export class Stock3 {
    favorite = false;
    notablePeople: Person[];

    constructor(public name: string,
        public code: string,
        public price: number,
        public previousPrice: number) {
        this.notablePeople = [];
    }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
