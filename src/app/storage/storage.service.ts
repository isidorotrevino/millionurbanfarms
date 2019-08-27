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
      name: "Saladette tomato", cantidad: 150, medida: "Kg", cantidadM: 25, precioM: 15, 
      preciom: 25, siembra: "30-08-2019", cosecha: "30-09-2019", img: "https://super.walmart.com.mx/images/product-images/img_large/00000000004087L.jpg",
      vendedor: { name: "Jitomatero2884", edad: 38 },
      founding: { 
        meta: 10000, description: "Delicius tomato", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 3, total: 5000, days: 5, interes: 3, roi: 30
      },
      status: "Progreso",
      comprador: {
        name: "Jose Ortiz", request: "14-09-2019",estimado: "25-09-2019",
        cantidad: 5
      }
    },
    { 
      name: "Special tomato", cantidad: 100, medida: "Kg", cantidadM: 20, precioM: 18, 
      preciom: 26, siembra: "01-09-2019", cosecha: "05-10-2019", img: "https://www.lasemilleria.com/img/med/semillas_de_jitomate_saladet.jpg",
      vendedor: { name: "Lucio22", edad: 28 },
      founding: { 
        meta: 20000, description: "Big and special, like me", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 10, total: 19000, days: 7, interes: 5, roi: 30
      },
      status: "Envio",
      comprador: {
        name: "Jose Cruz", request: "26-08-2019",estimado: "18-09-2019",
        cantidad: 3
      }
    },
    { 
      name: "Red Tomato", cantidad: 10, medida: "Kg", cantidadM: 5, precioM: 10, 
      preciom: 20, siembra: "31-08-2019", cosecha: "03-09-2019", img: "https://cdn.forbes.com.mx/2019/05/jitomate-1-1-640x360.jpg",
      vendedor: { name: "DonJaramillo", edad: 53 },

      founding: { 
        meta: 50000, description: "Tomato of singular flavor", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 8, total: 18000, days: 3, interes: 10, roi: 30
      },
      status: "Finalizado",
      comprador: {
        name: "Veronica Torres", request: "24-08-2019",estimado: "25-09-2019",
        cantidad: 4
      }
    },
    { 
      name: "Apricot lettuce", cantidad: 120, medida: "Kg", cantidadM: 50, precioM: 5, 
      preciom: 10, siembra: "05-09-2019", cosecha: "05-10-2019", img: "https://estaticos.planetahuerto.es/estaticos/redactor/lechuga.jpg",
      vendedor: { name: "Lechugueitor61", edad: 29 },
      founding: { 
        meta: 10000, description: "Delicius letucce", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 2, total: 5000, days: 4, interes: 20, roi: 30
      },
      status: "Envio",
      comprador: {
        name: "Miriam Gonzalez", request: "24-08-2019",estimado: "25-09-2019",
        cantidad: 8
      }
    },
    { 
      name: "Letucce", cantidad: 20, medida: "Kg", cantidadM: 10, precioM: 8, 
      preciom: 10, siembra: "10-09-2019", cosecha: "10-10-2019", img: "https://greenshop.com.ar/wp-content/uploads/sites/13/2018/03/lechuga-repollada.jpg",
      vendedor: { name: "Leettuccee", edad: 40 },
      founding: { 
        meta: 30000, description: "Lettuce of the highest quality and cleanliness", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 8, total: 30000, days: 1, interes: 15, roi: 30
      },
      status: "Finalizado",
      comprador: {
        name: "Julio Diaz", request: "22-08-2019",estimado: "13-09-2019",
                cantidad: 3
      }
    },
    { 
      name: "Red letucce", cantidad: 10, medida: "Kg", cantidadM: 5, precioM: 10, 
      preciom: 15, siembra: "20-09-2019", cosecha: "28-10-2019", img: "https://cdn.shopify.com/s/files/1/1417/1098/products/LH_Lechuga_Italiana_Roja_1024x1024.jpg?v=1496670878",
      vendedor: { name: "LaLechuga", edad: 43 },
      founding: { 
        meta: 40000, description: "Original red lettuce, 1kg per lettuce approximately", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 5, total: 16000, days: 6, interes: 10, roi: 30
      },
      status: "Finalizado",
      comprador: {
        name: "Pedro Solis", request: "23-09-2019",estimado: "01-10-2019",
       cantidad: 2
      }
    },
    { 
      name: "Spinach", cantidad: 80, medida: "Kg", cantidadM: 20, precioM: 12, 
      preciom: 18, siembra: "06-09-2019", cosecha: "06-10-2019", img: "https://www.ecoagricultor.com/wp-content/uploads/2012/12/espinaca.png",
      vendedor: { name: "Espinacas99", edad: 32 },
      founding: { 
        meta: 20000, description: "Beautiful Spinach", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 5, total: 10000, days: 2, interes: 5, roi: 30
      },
      status: "Finalizado",
      comprador: {
        name: "Jaqueline Ortiz", request: "14-09-2019",estimado: "25-09-2019",
        cantidad: 5
      }
    },
    { 
      name: "Spinach", cantidad: 40, medida: "Kg", cantidadM: 10, precioM: 15, 
      preciom: 18, siembra: "01-09-2019", cosecha: "10-10-2019", img: "https://edge.bonnieplants.com/www/uploads/20180920003935/bonnie-spinach-600x600.jpg",
      vendedor: { name: "Espiloconacas", edad: 27 },
      founding: { 
        meta: 60000, description: "1kg per spinach approximately", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 8, total: 30000, days: 2, interes: 3, roi: 30
      },
      status: "Envio",
      comprador: {
        name: "Jose Ortiz", request: "24-08-2019",estimado: "25-08-2019",
        cantidad: 6
      }
    },
    { 
      name: "Spinach", cantidad: 180, medida: "Kg", cantidadM: 40, precioM: 10, 
      preciom: 20, siembra: "02-09-2019", cosecha: "11-10-2019", img: "https://www.gannett-cdn.com/presto/2019/01/25/USAT/330dd337-f4ff-4c4c-b5ca-a836c9848451-spinach.jpg?crop=1414,806,x0,y529&width=3200&height=1680&fit=bounds",
      vendedor: { name: "HombreModelo", edad: 48 },
      founding: { 
        meta: 80000, description: "Clean spinach, from the space to your home", img: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/27/como_hacer_un_huerto_casero_el_universal_istock.jpg?itok=bd1Mp0Ej",
        inversors: 3, total: 70000, days: 6, interes: 10, roi: 30
      },
      status: "Progreso",
      comprador: {
        name: "Juan Gutierrez", request: "25-08-2019",estimado: "26-08-2019",
        cantidad: 7
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
      status: "Progreso",
      comprador: {
        name: "Juan Ramirez", cantidad: 5, request: "24-08-2019", 
        status: "Enviado", estimado: "24-09-2019"
      }
    },
    { 
      name: "Fertilizer", cantidad: 100, medida: "Kg", cantidadM: 15, precioM: 40, 
      preciom: 50, img: "https://gciturfacademy.com/wp-content/uploads/2018/01/pasture_fertilizer.jpg",
      vendedor: { name: "Fertilizant67", edad: 29 },
      status: "Envio",
      comprador: {
        name: "Edith Torres", cantidad: 10, request: "26-08-2019", 
        status: "Cancelado", estimado: "26-09-2019"
      }
    },
    { 
      name: "Pesticide", cantidad: 100, medida: "Lt", cantidadM: 5, precioM: 12, 
      preciom: 15, img: "https://5.imimg.com/data5/OE/SA/MY-4815803/predator-pesticide-500x500.jpg",
      vendedor: { name: "Pesto123", edad: 33 },
      status: "Finalizado",
      comprador: {
        name: "Jose Ortiz", cantidad: 3, request: "23-08-2019", 
        status: "Progreso", estimado: "23-09-2019"
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
