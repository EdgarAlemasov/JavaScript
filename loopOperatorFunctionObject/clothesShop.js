const goods = [
    {
        id: 1,
        name: 'shirt',
        description: 1,
        sizes: 48,
        price: 800,
        available: 1,
    },
    {
        id: 2,
        name: 'jacket',
        description: 1,
        sizes: 48,
        price: 7000,
        available: 1,
    },
    {
        id: 3,
        name: 'pants',
        description: 1,
        sizes: 'M',
        price: 2000,
        available: 1,
    },
    {
        id: 4,
        name: 'backpack',
        description: 1,
        sizes: 20,
        price: 4000,
        available: 1,
    },
    {
        id: 5,
        name: 'sneakers',
        description: 1,
        sizes: 42,
        price: 3000,
        available: 1,
    },
]

const basket = [
    {
        goodId: 5,
        name: 'sneakers',
        amount: 1,
        price: 3000,
    },
    {
        goodId: 1,
        name: 'shirt',
        amount: 3,
        price: 800,
    },
]

function addGoodsInBasket(goods, basket) {
    const name = prompt('What item would you like to add to your basket?: ')
    const amount = parseInt(prompt('How many item do you need?: '))



    for (let i in goods) {
        if (goods[i].name === name) {
            info = {
                goodId: goods[i].id,
                name: goods[i].name,
                amount: amount,
                price: goods[i].price,
            };
            basket.push(info);
        }
    }
    return basket;
}


function totalInfo(basket) {
    if (basket.length >= 1) {
        let totalAmount = 0;
        let totalSumm = 0;
    
        for (let i in basket) {
            totalSumm = totalSumm + basket[i].price * basket[i].amount;
            totalAmount = totalAmount + basket[i].amount;
        }
        alert('You have '+ totalAmount +' items');
        alert('You need to pay '+ totalSumm);
    } else if (basket.length == 0) {
        alert('Your basket is empty!');
    }
    return {
        'totalAmount': totalAmount,
        'totalSumm': totalSumm,
    };
}


function clearBasket(basket) {
    basket.length = 0;
    return basket;
}


function deleteItem(basket) {
    delName = prompt('What item do you need to delete from basket? write a name: ')
    for (let i in basket) {
        if (basket[i].name === delName) {
            basket.splice(i,1);
            break;
        }
    }
    return basket;
}

function getHelpMenu() {
    alert('Welcome to help menu'+'\n'+'add - add goods in basket'+'\n'+'clean - clean basket'+'\n'+
    'delete - delete item from basket'+'\n'+'total - calculate the price'+'\n'+'quit - quit');
    alert('Our goods: shirt, jacket, pants, backpack, sneakers.');
}


alert('Hello, this is clothes shop! You can choose this wear: shirt, jacket, pants, backpack and sneakers!');

while (true) {
    const answer = prompt('Please, choose a command?: ');
    if (answer === 'quit'){
        alert('Myabe next time! Good bye!');
        break;
    } else if (answer === 'add') {
        addGoodsInBasket(goods, basket);
    } else if (answer === 'clean') {
        clearBasket(basket);
        alert('Your basket is empty!');
    } else if (answer === 'delete') {
        deleteItem(basket);
    } else if (answer === 'total') {
        totalInfo(basket);
    } else if (answer === 'help') {
        getHelpMenu();
    } else {
        alert('Wrong command! Try again!');
    };
}