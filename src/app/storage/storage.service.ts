import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  currentUser = { username:"anonymous", password:"anonymous" };

  constructor() { }

  registerUser(user){
    this.currentUser = user;
  }

  deleteUser(){
    this.currentUser = { username:"anonymous", password:"anonymous" };
  }

  getUsername(){
    return this.currentUser.username.toLowerCase();
  }

  getUser(){
    return this.currentUser;
  }

  products = [
    { 
      name: "Swisschard Rainbow", cantidad: 150, medida: "Grams", cantidadM: 5, precioM: 15, 
      preciom: 25, siembra: "30-08-2019", cosecha: "30-09-2019", img: '../../assets/img/Acelga Rainbow.jpg',
      vendedor: { name: "Jitomatero2884", edad: 38 },
      founding: { 
        meta: 10000, description: "Special Harvest", img: "../../assets/img/huerto-10.jpg",
        inversors: 3, total: 5000, days: 5, interes: 3, roi: 30
      },
      status: "Progress",
      comprador: {
        name: "Jose Ortiz", request: "14-09-2019",estimado: "25-09-2019",
        cantidad: 5
      }
    },

    { 
      name: "Basil Large Leaf Genova", cantidad: 100, medida: "Grams", cantidadM: 6, precioM: 18, 
      preciom: 26, siembra: "01-09-2019", cosecha: "05-10-2019", img: '../../assets/img/Albahaca Verde.jpg',
      vendedor: { name: "Lucio22", edad: 28 },
      founding: { 
        meta: 20000, description: "Big and special, like me", img: "../../assets/img/huerto-9.jpg",
        inversors: 10, total: 19000, days: 7, interes: 5, roi: 30
      },
      status: "Delivery",
      comprador: {
        name: "Jose Cruz", request: "26-08-2019",estimado: "18-09-2019",
        cantidad: 3
      }
    },

    { 
      name: "Broccoli Maracaibo F1", cantidad: 10, medida: "Piece", cantidadM: 5, precioM: 10, 
      preciom: 20, siembra: "31-08-2019", cosecha: "03-09-2019", img: '../../assets/img/Brócoli Maracaibo F1 (en campo).jpg',
      vendedor: { name: "DonJaramillo", edad: 53 },
      founding: { 
        meta: 50000, description: "Broccoli F1 of singular flavor", img: "../../assets/img/huerto-8.jpg",
        inversors: 8, total: 18000, days: 3, interes: 10, roi: 30
      },
      status: "Finished",
      comprador: {
        name: "Veronica Torres", request: "24-08-2019",estimado: "25-09-2019",
        cantidad: 4
      }
    },

    { 
      name: "Squash Sebring F1 ", cantidad: 120, medida: "Kilograms", cantidadM: 3, precioM: 5, 
      preciom: 10, siembra: "05-09-2019", cosecha: "05-10-2019", img: '../../assets/img/Calabacita Sebring F1.jpg',
      vendedor: { name: "Lechugueitor61", edad: 29 },
      founding: { 
        meta: 10000, description: "Delicius Squash Sebring F1 ", img: "../../assets/img/huerto-7.jpg",
        inversors: 2, total: 5000, days: 4, interes: 20, roi: 30
      },
      status: "Delivery",
      comprador: {
        name: "Miriam Gonzalez", request: "24-08-2019",estimado: "25-09-2019",
        cantidad: 8
      }
    },

    { 
      name: "Coriander Long Standing", cantidad: 20000, medida: "Grams", cantidadM: 500, precioM: 8, 
      preciom: 10, siembra: "10-09-2019", cosecha: "10-10-2019", img: "../../assets/img/Cilantro Long Standing.jpg",
      vendedor: { name: "Leettuccee", edad: 40 },
      founding: { 
        meta: 30000, description: "Lettuce of the highest quality and cleanliness", img: "../../assets/img/huerto-6.jpg",
        inversors: 8, total: 30000, days: 1, interes: 15, roi: 30
      },
      status: "Finished",
      comprador: {
        name: "Julio Diaz", request: "22-08-2019",estimado: "13-09-2019",
                cantidad: 3
      }
    },

    { 
      name: "Kale", cantidad: 10000, medida: "Grams", cantidadM: 500, precioM: 10, 
      preciom: 15, siembra: "20-09-2019", cosecha: "28-10-2019", img: '../../assets/img/Col Crespa o Kale.jpg',
      vendedor: { name: "LaLechuga", edad: 43 },
      founding: { 
        meta: 40000, description: "Original red lettuce, 1kg per lettuce approximately", img: "../../assets/img/huerto-5.jpg",
        inversors: 5, total: 16000, days: 6, interes: 10, roi: 30
      },
      status: "Finished",
      comprador: {
        name: "Pedro Solis", request: "23-09-2019",estimado: "01-10-2019",
       cantidad: 2
      }
    },

    { 
      name: "Spinach Tiger F1", cantidad: 80, medida: "Piece", cantidadM: 5, precioM: 12, 
      preciom: 18, siembra: "06-09-2019", cosecha: "06-10-2019", img: "../../assets/img/Espinaca Tigre F1.jpg",
      vendedor: { name: "Espinacas99", edad: 32 },
      founding: { 
        meta: 20000, description: "Beautiful Spinach", img: "../../assets/img/huerto.jpg",
        inversors: 5, total: 10000, days: 2, interes: 5, roi: 30
      },
      status: "Finished",
      comprador: {
        name: "Jaqueline Ortiz", request: "14-09-2019",estimado: "25-09-2019",
        cantidad: 5
      }
    },

    { 
      name: "Lettuce Alexandria(Butterhead)", cantidad: 40, medida: "Piece", cantidadM: 4, precioM: 15, 
      preciom: 18, siembra: "01-09-2019", cosecha: "10-10-2019", img: "../../assets/img/Lechuga Alexandria.jpg",
      vendedor: { name: "Espiloconacas", edad: 27 },
      founding: { 
        meta: 60000, description: "1kg per spinach approximately", img: "../../assets/img/huerto-1.jpg",
        inversors: 8, total: 30000, days: 2, interes: 3, roi: 30
      },
      status: "Delivery",
      comprador: {
        name: "Jose Ortiz", request: "24-08-2019",estimado: "25-08-2019",
        cantidad: 6
      }
    },

    { 
      name: "Lettuce Rouxaï (Red Oakleaf)", cantidad: 18, medida: "Piece", cantidadM: 4, precioM: 10, 
      preciom: 20, siembra: "02-09-2019", cosecha: "11-10-2019", img: "../../assets/img/Lechuga Rouxaï.jpg",
      vendedor: { name: "HombreModelo", edad: 48 },
      founding: { 
        meta: 80000, description: "Clean spinach, from the space to your home", img: "../../assets/img/huerto-2.jpg",
        inversors: 3, total: 70000, days: 6, interes: 10, roi: 30
      },
      status: "Progress",
      comprador: {
        name: "Juan Gutierrez", request: "25-08-2019",estimado: "26-08-2019",
        cantidad: 7
      }
    },
    { 
      name: "Radish Winner F1", cantidad: 18, medida: "Bunch", cantidadM: 4, precioM: 10, 
      preciom: 20, siembra: "02-09-2019", cosecha: "11-10-2019", img: "../../assets/img/Rábano Winner F1.jpg",
      vendedor: { name: "HombreModelo", edad: 48 },
      founding: { 
        meta: 80000, description: "Clean spinach, from the space to your home", img: "../../assets/img/huerto-3.jpg",
        inversors: 3, total: 70000, days: 6, interes: 10, roi: 30
      },
      status: "Progress",
      comprador: {
        name: "Juan Gutierrez", request: "25-08-2019",estimado: "26-08-2019",
        cantidad: 7
      }
    },

    { 
      name: "Tomato Thorin F1 ", cantidad: 10, medida: "Kilograms", cantidadM: 4, precioM: 15, 
      preciom: 18, siembra: "01-09-2019", cosecha: "10-10-2019", img: "../../assets/img/Tomate Thorin F1.jpg",
      vendedor: { name: "Espiloconacas", edad: 27 },
      founding: { 
        meta: 60000, description: "1kg per spinach approximately", img: "../../assets/img/huerto-4.jpg",
        inversors: 8, total: 30000, days: 2, interes: 3, roi: 30
      },
      status: "Delivery",
      comprador: {
        name: "Jose Ortiz", request: "24-08-2019",estimado: "25-08-2019",
        cantidad: 6
      }
    },

    
  ];

  getProducts(){
    return this.products;
  }

  createProduct(product){
    window.alert("Product created!");
    this.products.push(product);
  }

  filterByNameProducts(cadena){
    let productsFilter = this.products.filter((product) => {
      return product.name.toLowerCase().includes(cadena.toLowerCase());
    });
    productsFilter.sort((a, b) => {
      return (a.name > b.name)? 1:-1;
    });
    return productsFilter;
  }

  filterMorePriceProducts(number){
    let productsFilter = this.products.filter((product) => {
      return product.preciom >= number;
    });
    return productsFilter;
  }

  filterLessPriceProducts(number){
    let productsFilter = this.products.filter((product) => {
      return product.preciom <= number;
    });
    return productsFilter;
  }

  filterByVendedorProducts(cadena){
    let productsFilter = this.products.filter((product) => {
      return product.name.toLowerCase().includes(cadena.toLowerCase());
    });
    return productsFilter;
  }

  getThreeProductsStatus(){
    let listProducts = [];
    listProducts.push(this.products[0]);
    listProducts.push(this.products[1]);
    listProducts.push(this.products[2]);
    return listProducts;
  }

  productsSiembra = [
    { 
      name: "Letucce seeds", cantidad: 150, medida: "Kg", cantidadM: 5, precioM: 9, 
      preciom: 10, img: "https://3.imimg.com/data3/KS/EI/MY-13256592/lettuce-seed-250x250.jpg",
      vendedor: { name: "ElLechugas", edad: 48 },
      status: "Progress",
      comprador: {
        name: "Juan Ramirez", cantidad: 5, request: "24-08-2019", 
        status: "Delivery", estimado: "24-09-2019"
      }
    },
    { 
      name: "Fertilizer", cantidad: 100, medida: "Kg", cantidadM: 15, precioM: 40, 
      preciom: 50, img: "https://gciturfacademy.com/wp-content/uploads/2018/01/pasture_fertilizer.jpg",
      vendedor: { name: "Fertilizant67", edad: 29 },
      status: "Delivery",
      comprador: {
        name: "Edith Torres", cantidad: 10, request: "26-08-2019", 
        status: "Canceled", estimado: "26-09-2019"
      }
    },
    { 
      name: "Pesticide", cantidad: 100, medida: "Lt", cantidadM: 5, precioM: 12, 
      preciom: 15, img: "https://5.imimg.com/data5/OE/SA/MY-4815803/predator-pesticide-500x500.jpg",
      vendedor: { name: "Pesto123", edad: 33 },
      status: "Handed",
      comprador: {
        name: "Jose Ortiz", cantidad: 3, request: "23-08-2019", 
        status: "Progress", estimado: "23-09-2019"
      }
    }
  ];

  getProductsSiembra(){
    return this.productsSiembra;
  }

  filterByVendedorProductsSiembra(cadena){
    let productsFilter = this.productsSiembra.filter((product) => {
      return product.vendedor.name.toLowerCase().includes(cadena.toLowerCase());
    });
    return productsFilter;
  }
  
  filterByNameProductsSiembra(cadena){
    let productsFilter = this.productsSiembra.filter((product) => {
      return product.name.toLowerCase().includes(cadena.toLowerCase());
    });
    return productsFilter;
  }

  filterMorePriceProductsSiembra(number){
    let productsFilter = this.productsSiembra.filter((product) => {
      return product.preciom >= number;
    });
    return productsFilter;
  }

  filterLessPriceProductsSiembra(number){
    let productsFilter = this.productsSiembra.filter((product) => {
      return product.preciom <= number;
    });
    return productsFilter;
  }


  fundings = [
    { producer: "Juan Lopez", siembra: "19-08-2019", invertido: 500,
      interes: 3, roi: 15, status: "Canceled" 
    },
    { producer: "Jorge Chavez", siembra: "25-10-2019", invertido: 1000,
      interes: 10, roi: 60, status: "Progress" 
    },
    { producer: "Ana Ortega", siembra: "10-10-2019", invertido: 5000,
      interes: 15, roi: 90, status: "Canceled" 
    }
  ];

  getFundigs(){
    return this.fundings;
  }

  services = [
    { 
      type: "Bike", description: "A simple bike", placas: "N/A", price: 10, status: "Inactive",
      vendedor: { name: "Entregueitor12" }
    },
    { 
      type: "Motorbike", description: "A simple motorbike", placas: "999-ZZZ", status: "Inactive",
      vendedor: { name: "Entregueitor12" }
    },
    { 
      type: "Car", description: "A simple car", placas: "106-ABH", status: "Active",
      vendedor: { name: "Entregueitor12" },
      servicio: {
        fecha: "15-09-2019", img: "assets/img/trayecto.png",
        productor: {
          name: "Juan Avalos", dir: "C. Nepatl #345, Del. Iztacalco, CDMX."
        },
        comprador: {
          name: "Pedro Hernandez", dir: "C. Zinc #51, Del. Iztapalapa, CDMX."
        }
      }
    },
    { 
      type: "Van", description: "A simple van", placas: "569-LWM", status: "Inactive",
      vendedor: { name: "Entregueitor12" }
    }
  ];

  getServices(){
    return this.services;
  }

  filterByVendedorServices(cadena){
    let servicesFilter = this.services.filter((service) => {
      return service.vendedor.name.toLowerCase().includes(cadena.toLowerCase());
    });
    return servicesFilter;
  }

  filterByServiceServices(cadena){
    let servicesFilter = this.services.filter((service) => {
      return service.vendedor.name.toLowerCase().includes(cadena.toLowerCase()) && 'servicio' in service;
    });
    return servicesFilter;
  }  

}