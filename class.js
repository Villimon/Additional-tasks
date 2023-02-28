// 3. Создать класс данных “Товар”
// С полями
// Название
// Цена
// Количество
// Описание
// Наполнить массив объектами такого класса.
// Написать метод, который получает строку вида
// “name-contains-fd&price-=2&quantity->5&description-ends-abc”
// “name-starts-fd&quantity-=5”
// На выходе возвращает массив, только с подходящими объектами
// возможны (contains, starts, ends для строковых и <,=,>, <=,>= для числовых)



class Product {
    name;
    price;
    quantity;
    description;

    constructor(name, price, quantity, description) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
    }


}


class Products {
    arr = []


    constructor() {
        this.arr.push(new Product('Яблоки fd', 50, 5, 'Яблоки зеленые'))
        this.arr.push(new Product('Груши', 2, 10, 'Груши мягкиеabc'))
        this.arr.push(new Product('Арбуз', 20, 5, 'Арбез сочный'))
        this.arr.push(new Product('Телефон', 40000, 10, 'Нокио'))
    }

    filter(str) {
        let arr = str.replace(/[^a-zа-яё0-9ё<>=&\s]/gi, ' ')
        arr = arr.split('=').map(i => i.trim()).join(' = ').split('>').map(i => i.trim()).join(' > ').split('<').map(i => i.trim()).join(' < ')
        arr = arr.split('&');
        let newArr = new Set()
        newArr.clear()
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i].split(' ');
            if (element[0] === 'name') {
                let result = this.arr.filter(item => item.name.includes(element[2]))
                result.forEach(i => {
                    newArr.add(i)
                })
            }
            if (element[0] === 'description') {
                let result = this.arr.filter(item => item.description.includes(element[2]))
                result.forEach(i => {
                    newArr.add(i)
                })
            }
            if (element[1] === '=') {
                if (element[0] === 'price') {
                    let result = this.arr.filter(item => item.price == element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
                if (element[0] === 'quantity') {
                    let result = this.arr.filter(item => item.quantity == element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
            }
            if (element[1] === '>') {
                if (element[0] === 'price') {
                    let result = this.arr.filter(item => item.price > element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
                if (element[0] === 'quantity') {
                    let result = this.arr.filter(item => item.quantity > element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
            }
            if (element[1] === '<') {
                if (element[0] === 'price') {
                    let result = this.arr.filter(item => item.price < element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
                if (element[0] === 'quantity') {
                    let result = this.arr.filter(item => item.quantity < element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
            }
            if (element[1] === '<=') {
                if (element[0] === 'price') {
                    let result = this.arr.filter(item => item.price <= element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
                if (element[0] === 'quantity') {
                    let result = this.arr.filter(item => item.quantity <= element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
            }
            if (element[1] === '>=') {
                if (element[0] === 'price') {
                    let result = this.arr.filter(item => item.price >= element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
                if (element[0] === 'quantity') {
                    let result = this.arr.filter(item => item.quantity >= element[2])
                    result.forEach(i => {
                        newArr.add(i)
                    })
                }
            }

        }
        return newArr
    }


}



let products = new Products()

// console.log(products.filter('name-starts-fd&quantity-=5'));
// console.log(products.filter('name-contains-fd&price-=2&quantity->5&description-ends-abc'));