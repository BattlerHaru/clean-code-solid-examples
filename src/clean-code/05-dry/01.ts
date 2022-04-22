type Size = '' | 'S' | 'M' | 'XL';


class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''

    ) {
    }

    isProductReady(): Boolean {
        for (const key in this) {
            switch (typeof key) {
                case "string":
                    if ((<string><unknown>this[key]).length <= 0) {
                        throw Error(`${key} is empty`)
                    }
                    break;
                case "number":
                    if ((<number><unknown>this[key]) <= 0) {
                        throw Error(`${key} is zero`)
                    }
                    break;

                default:
                    throw Error(`${typeof key} is not supported`)
            }
        }

        return true
    }

    toString() {
        // DRY
        if (!this.isProductReady()) {
            return
        }

        return `${this.name} ${this.price}, ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'M')
    console.log(bluePants.toString());
})();