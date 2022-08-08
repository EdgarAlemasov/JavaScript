class Good {
    constructor (name, description, sizes, price) {
        this.id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = false;
    }

    setAvailable (available) {
        this.available = available;
    }

    setId (id) {
        this.id = id;
    }
}

class Goods {
    #goods = [];
    #num_goods = {};

    constructor () {
        this.filter = new RegExp('jasket');
        this.sortPrice = true;
        this.sortDir = true;
    }
    
    addGood (...items) {
        for (let item of items) {
            this.index = this.#goods.length;
            item.setId = this.index;
            item.setAvailable(true);
            this.#goods.push(item);
            this.#num_goods[item.id] = this.index;
        }
    }

    remove (id) {
        delete this.#goods[this.#num_goods[id]];
        delete this.#num_goods[id];
    }
    
    get allGoods () {
        this.stack = this.#goods.filter(good => this.filter.test(good.name))
        if (this.sortPrice) {
            if (this.sortDir) {
                this.stack.sort((item1, item2) => item1.price - item2.price)
            } else {
                this.stack.sort((item1, item2) => item2.price - item1.price)
            }
        }
        return this.stack
    }
}

class BasketGoods extends Good {
    constructor (good) {
        super(good.name, good.description, good.sizes, good.price);
        this.id = good.id;
        this.amount = 1;
    }
}

class Basket {
    constructor () {
        this.goods = [];
        this.num_basket= {};
    }

    clear () {
        this.goods.length = 0;
        this.num_basket = {};
    }

    addGood (good, amount) {
        if (this.num_basket[good.id]) {
            this.goods[this.num_basket[good.id]].amount += amount;
        } else {
            this.amount = amount;
            let goods_id = this.goods.length;
            this.goods.push(good);
            this.num_basket[good.id] = goods_id;
        }
    }

    remove (good, amount) {
        if (this.goods[this.num_basket[good.id]].amount > amount) {
            this.goods[this.num_basket[good.id]].amount -= amount;
        } else {
            delete this.goods[this.num_basket[good.id]];
            delete this.num_basket[good.id];
        }
    }

    removeUnavailable () {
        this.goods.forEach((good) => {
            if (good.available === false) {
                delete this.goods[this.num_basket[good.id]];
                delete this.num_basket[good.id];
            }
        });
    }

    get totalSum() {
        return this.goods.reduce((sum, good) => {sum+= good.price; return sum}, 0)
    }

    get totalAmount() {
        let sum = 0;
        this.goods.forEach(good => {sum += good.amount});
        return sum
    }
}






let catalog = new Goods();
let good1 = new Good("shirt", "black", [46, 48, 50, 52, 54, 56], 1100);
let good2 = new Good("pants", "white", [46, 48, 50, 52, 54, 56], 2500);
let good3 = new Good("jasket", "brown", [46, 48, 50, 52, 54, 56], 3000);
let good4 = new Good("jasket", "blue", [46, 48, 50, 52, 54, 56], 5000);
let good5 = new Good("jasket", "white", [46, 48, 50, 52, 54, 56], 3500);
let good6 = new Good("jasket", "black", [46, 48, 50, 52, 54, 56], 2000);
let good7 = new Good("jasket", "grey", [46, 48, 50, 52, 54, 56], 2000);
catalog.addGood(good1, good2, good3, good4, good5, good6, good7);

console.log(catalog.allGoods);

catalog.remove(2);
console.log(catalog.allGoods);

let basket_v1 = new BasketGoods(good1)
let basket_v2 = new BasketGoods(good3)
let basket_v3 = new BasketGoods(good4)
let basket = new Basket();

basket.addGood(basket_v1, 1);
basket.addGood(basket_v3, 2);
console.log(basket);

basket.addGood(basket_v3, 8);
console.log(basket);

basket.remove(basket_v3, 2);
console.log(basket);

basket.clear();
console.log(basket);

basket.removeUnavailable();
console.log(basket);

console.log(basket.totalAmount);
console.log(basket.totalSum);