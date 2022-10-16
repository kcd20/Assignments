//Qn1
const rand = () => {
    const dis = document.getElementById("display");
    dis.innerHTML = Math.floor(Math.random() * 1000);
}

//Qn2
const num = 23.98234234
const dec = 3

const round = (num, dec) => {
    console.log(num.toFixed(dec));
}

round(num, dec);

//Qn3
const str = 'I am learning js.'

const subStr = 'js'

console.log(str.includes(subStr))

//Qn4
const year = 2600

//leap year conditions: multiple of 400 && multiple of 4 and not 100
const leapYear = (year) => {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        return (year + ' is a leap year')
    } else {
        return (year + ' is not a leap year')
    }
}

console.log(leapYear(year))

//Qn6

displayEven = () => {
    const data1 = document.getElementById('data1').value;
    const data2 = document.getElementById('data2').value;
    const data3 = document.getElementById('data3').value;
    const data4 = document.getElementById('data4').value;
    const data5 = document.getElementById('data5').value;
    const data6 = document.getElementById('data6').value;

    arr = [data1, data2, data3, data4, data5, data6];
    const arrF = arr.filter(e => {
        return e % 2 == 0 && e
    })

    document.getElementById('displayEven').innerHTML = 'Even Numbers: ' + arrF.join(", ")
}

//Qn7
const arr7 = [10, 12, 90, 93, 707]

const arr7F = arr7.filter(e => {
    return e % 2 == 0;
})

const arr7R = arr7F.reduce((previousL, currentL) => {
    return currentL > previousL ? currentL : previousL
})

console.log(arr7R)

//Qn8
arr8a = [10, 20, 30]
arr8b = [1, 2, 3]


sumArray = (a, b) => {
    let arrComb = []
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        arrComb.push((a[i] || 0) + (b[i] || 0));
    }
    console.log(arrComb);
}

sumArray(arr8a, arr8b)

//Qn9
const arr9 = [10, 78, 0]
const arr9R = []

for (let i = arr9.length - 1; i >= 0; i--) {
    arr9R.push(arr9[i])
}

console.log(arr9R)

//Qn10
const str10 = 'string'

const reverseStr = (string) => {
    const split = string.split("");
    const rev = [];

    for (let i = split.length - 1; i >= 0; i--) {
        rev.push(split[i]);
    }

    const revStr = rev.join("");
    return revStr;
}

console.log(reverseStr(str10))

//Qn11
const arr11 = [10, 50, 20, 67, 10, 20];

let arrDup = arr11.filter((e, i) => {
    return arr11.indexOf(e) == i;
});

console.log(arrDup);

//Qn12
const arrRem = [12, 56, 89]

const remArr = () => {
    const num12 = document.getElementById('num').value
    const arr12Filter = arrRem.filter(e=> {
        return e != num12
    })

    document.getElementById('displayArr').innerHTML = '[' + arr12Filter.join(', ') + ']'
}

//Qn13
const arr13 = [10, 12, 900, 93, 707]

const arr13Even = arr13.filter(e => {
    return e % 2 == 0 && e
})

const arr13Odd = arr13.filter(e => {
    return e % 2 != 0 && e
})

const largest = (arr) => {
    const lar = arr.reduce((previousL, currentL) => {
        return currentL > previousL ? currentL : previousL
    })
    return lar
}

console.log("The largest odd number is " + largest(arr13Odd) + " and the largest even number is " + largest(arr13Even) + ".")

//Qn14
const structureObj = () => {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const contact = document.getElementById('contact').value

    const user = { firstName, lastName, contact}
    console.log(user)
}

//Qn15
class Car {
    constructor(name, brand, color, manufacturer) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.manufacturer = manufacturer;
    }

    city() {
    }

    specialFeature() {
    }
}

//Qn16
class Book {
    constructor(noOfPages, typeOfPages, author) {
        this.noOfPages = noOfPages;
        this.typeOfPages = typeOfPages;
        this.author = author;
    }

    typeOfBook() {
    }
}

//Qn17
class Animal {
    constructor(name, gender, disease) {
        this.name = name;
        this.gender = gender;
        this.disease = disease;
    }

    walk() {
    }

    eat() {
    }

    climb(){
    }
}

//Qn18
class Electronics {
    constructor(name, version, manufacturer) {
        this.name = name;
        this.version = version;
        this.manufacturer = manufacturer;
    }

}

class Laptop extends Electronics {
    constructor(name, version, manufacturer, type) {
        super(name, version, manufacturer);
        this.type = type;
    }

    configuration() {
    }

    price() {
    }
}