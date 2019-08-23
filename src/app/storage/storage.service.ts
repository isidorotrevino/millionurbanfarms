import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  currentUser = {username:"anonymous", password:"anonymous"};

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
      name: "Saladette tomato", cantidad: 150, medida: "Kg", cantidadM: 25, precioM: 15, 
      preciom: 25, siembra: "30-08-2019", cosecha: "30-09-2019", img: "https://cdn.forbes.com.mx/2019/05/jitomate-1-1-640x360.jpg",
      vendedor: { name: "Jitomatero2884", edad: 38 },
      founding: { 
        meta: 10000, description: "Delicius tomato", 
        inversors: 3, total: 5000, days: 5 
      }
    },
    { 
      name: "Special tomato", cantidad: 100, medida: "Kg", cantidadM: 20, precioM: 18, 
      preciom: 26, siembra: "01-09-2019", cosecha: "05-10-2019", img: "https://cdn.forbes.com.mx/2019/05/jitomate-1-1-640x360.jpg",
      vendedor: { name: "Lucio22", edad: 28 },
      founding: { 
        meta: 20000, description: "Big and special, like me", 
        inversors: 1, total: 1000, days: 7 
      }
    },
    { 
      name: "Red Tomato", cantidad: 10, medida: "Kg", cantidadM: 5, precioM: 10, 
      preciom: 20, siembra: "31-08-2019", cosecha: "03-09-2019", img: "https://cdn.forbes.com.mx/2019/05/jitomate-1-1-640x360.jpg",
      vendedor: { name: "DonJaramillo", edad: 53 },
      founding: { 
        meta: 50000, description: "Tomato of singular flavor", 
        inversors: 6, total: 10000, days: 3 
      }
    },
    { 
      name: "Apricot lettuce", cantidad: 120, medida: "Kg", cantidadM: 50, precioM: 5, 
      preciom: 10, siembra: "05-09-2019", cosecha: "05-10-2019", img: "https://estaticos.planetahuerto.es/estaticos/redactor/lechuga.jpg",
      vendedor: { name: "Lechugueitor61", edad: 29 },
      founding: { 
        meta: 10000, description: "Delicius letucce", 
        inversors: 2, total: 5000, days: 4 
      }
    },
    { 
      name: "Letucce", cantidad: 20, medida: "Kg", cantidadM: 10, precioM: 8, 
      preciom: 10, siembra: "10-09-2019", cosecha: "10-10-2019", img: "https://estaticos.planetahuerto.es/estaticos/redactor/lechuga.jpg",
      vendedor: { name: "Leettuccee", edad: 40 },
      founding: { 
        meta: 30000, description: "Lettuce of the highest quality and cleanliness", 
        inversors: 8, total: 30000, days: 1 
      }
    },
    { 
      name: "Red letucce", cantidad: 10, medida: "Kg", cantidadM: 5, precioM: 10, 
      preciom: 15, siembra: "20-09-2019", cosecha: "28-10-2019", img: "https://estaticos.planetahuerto.es/estaticos/redactor/lechuga.jpg",
      vendedor: { name: "LaLechuga", edad: 43 },
      founding: { 
        meta: 40000, description: "Original red lettuce, 1kg per lettuce approximately", 
        inversors: 5, total: 16000, days: 6 
      }
    },
    { 
      name: "Spinach", cantidad: 80, medida: "Kg", cantidadM: 20, precioM: 12, 
      preciom: 18, siembra: "06-09-2019", cosecha: "06-10-2019", img: "https://www.ecoagricultor.com/wp-content/uploads/2012/12/espinaca.png",
      vendedor: { name: "Espinacas99", edad: 32 },
      founding: { 
        meta: 20000, description: "Beautiful Spinach", 
        inversors: 5, total: 10000, days: 2 
      }
    },
    { 
      name: "Spinach", cantidad: 40, medida: "Kg", cantidadM: 10, precioM: 15, 
      preciom: 18, siembra: "01-09-2019", cosecha: "10-10-2019", img: "https://www.ecoagricultor.com/wp-content/uploads/2012/12/espinaca.png",
      vendedor: { name: "Espiloconacas", edad: 27 },
      founding: { 
        meta: 60000, description: "1kg per spinach approximately", 
        inversors: 8, total: 30000, days: 2 
      }
    },
    { 
      name: "Spinach", cantidad: 180, medida: "Kg", cantidadM: 40, precioM: 10, 
      preciom: 20, siembra: "02-09-2019", cosecha: "11-10-2019", img: "https://www.ecoagricultor.com/wp-content/uploads/2012/12/espinaca.png",
      vendedor: { name: "HombreModelo", edad: 48 },
      founding: { 
        meta: 80000, description: "Clean spinach, from the space to your home", 
        inversors: 3, total: 9000, days: 6 
      }
    }
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

  productsSiembra = [
    { 
      name: "Letucce seeds", status: "Progreso", img:"https://3.imimg.com/data3/KS/EI/MY-13256592/lettuce-seed-250x250.jpg"
    },
    { 
      name: "Fertilizer", status: "Envio", img:"https://gciturfacademy.com/wp-content/uploads/2018/01/pasture_fertilizer.jpg"
    },
    { 
      name: "Pesticide", status: "Finalizado", img:"https://5.imimg.com/data5/OE/SA/MY-4815803/predator-pesticide-500x500.jpg"
    }
  ];

  getProductsSiembra(){
    return this.productsSiembra;
  }

  productsStatus = [
    { 
      name: "Saladette tomato", status: "Progreso", img:"https://cdn.forbes.com.mx/2019/05/jitomate-1-1-640x360.jpg"
    },
    { 
      name: "Letucce", status: "Envio", img:"https://estaticos.planetahuerto.es/estaticos/redactor/lechuga.jpg"
    },
    { 
      name: "Spinach", status: "Finalizado", img:"https://www.ecoagricultor.com/wp-content/uploads/2012/12/espinaca.png"
    }
  ];

  getProductsStatus(){
    return this.productsStatus;
  }

}
