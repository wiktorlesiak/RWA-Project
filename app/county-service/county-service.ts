export class County {
    constructor(
        public id: number,
        public name: string,
        public desc: string,
        public score: number,
        public cuisine: string) {
    }
}

export class CountyService {
    getCounties(): Array<County> {
        var counties: Array<County> = [
            new County(0, 'Monto Cafe', 'This is the description blah blah blah', 7, 'Italian'),
            new County(1, 'Banyi Japanese Dining', 'This is the description blah blah blah', 8, 'Japanese'),
			new County(2, 'Bach 16', 'This is the description blah blah blah', 6, 'Italian'),
        ];
        return counties;
    }
}
