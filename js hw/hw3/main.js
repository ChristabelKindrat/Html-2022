for (let i = 0; i < 10; i++) {
    document.write('<div>item</div>')
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>item ${i} </div>`)
}
let i = 0;
while (i < 20) {
    document.write('<h1>item</h1>')
    i++;
}
let a = 0;
while (a < 20) {
    document.write(`<h1>item${a}</h1>`)
    a++;
}


let items = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


document.write(`<ul>`);
for (let i = 0; i < items.length; i++) {
    document.write(`<li>${items[i]}</li>`);
}
document.write(`</ul>`)

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="product-card">
<h3>${product.title}</h3>
<h3>${product.price}</h3>
<img src="${product.image}" alt="image" class="image">

    </div>`)
}