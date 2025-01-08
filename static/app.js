// // This is the entry point (URL and port) for our mock API
// const API = 'http://localhost:3000/';

// // This is the mock data
// const mockData = [
//     { id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.' },
//     { id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.' },
//     { id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.' }
// ];

// const populateProducts = async () => {
    
//     const products = document.querySelector('#products');
//     products.innerHTML = '';
    
//     // Here we are doing a request
//     const response = await fetch(API);
    
//     // Here we are taking the data from the "server" in JSON format
//     const data = await response.json();

//     // Here we use the response data in JSON format to populate the HTML
//     for (const product of data) {
//         const item = document.createElement('product-item');
//         for (const key of ['name', 'rrp', 'info']) {
//             const span = document.createElement('span');
//             span.slot = key;
//             span.textContent = product[key];
//             item.appendChild(span);
//         }
//         products.appendChild(item);
//     }
// }

// document.querySelector('#fetch').addEventListener('click', async () => {
//     await populateProducts();
// })



// customElements.define('product-item', class Item extends HTMLElement {
//     constructor() {
//         super()
//         const itemTmpl = document.querySelector('#item').content.cloneNode(true)
//         this.attachShadow({ mode: 'open' }).appendChild(itemTmpl)
//     }
// })

// const API = 'http://localhost:3000'

// const populateProducts = async (category) => {
//   const products = document.querySelector('#products')
//   products.innerHTML = ''
//   const res = await fetch(`${API}/${category}`)
//   const data = await res.json()

//   for (const product of data) {
//     const item = document.createElement('product-item')
//     for (const key of ['name', 'rrp', 'info']) {
//       const span = document.createElement('span')
//       span.slot = key
//       span.textContent = product[key]
//       item.appendChild(span)
//     }
//     products.appendChild(item)
//   }
// }

// const category = document.querySelector('#category')

// category.addEventListener('input', async ({ target }) => {
//   await populateProducts(target.value)
// })

 

// customElements.define('product-item', class Item extends HTMLElement {
//   constructor() {
//     super()
//     const itemTmpl = document.querySelector('#item').content
//     this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
//   }
// })

'use strict'

// API URL
const API = 'http://localhost:3000'

// Populate products from API method
const populateProducts = async (category, method = 'GET', payload) => {
  const products = document.querySelector('#products')
  products.innerHTML = ''
  const send = method === 'GET' ? {} : {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }
  const res = await fetch(`${API}/${category}`, { method, ...send })
  const data = await res.json()
  for (const product of data) {
    const item = document.createElement('product-item')
    for (const key of ['name', 'rrp', 'info']) {
      const span = document.createElement('span')
      span.slot = key
      span.textContent = product[key]
      item.appendChild(span)
    }
    products.appendChild(item)
  }
}

// Get elements from DOM
const category = document.querySelector('#category')
const add = document.querySelector('#add')

// Populate products
category.addEventListener('input', async ({ target }) => {
  add.style.display = 'block'
  await populateProducts(target.value)
})

// Add product
add.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e
  const payload = {
    name: target.name.value,
    rrp: target.rrp.value,
    info: target.info.value
  }
  await populateProducts(category.value, 'POST', payload)
  target.reset()
})

// Custom element
customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})
