export interface Product {
  name: string;
  description: string;
  category: string[];
  solde_price: number;
  regular_price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}

// export class Product{
//   name!: string;
//   description!: string;
//   category!: string[];
//   solde_price!: number;
//   regarlar_price!: number;
//   imageUrl!: string;
//   createdAt!: Date;
//   updatedAt?: Date;

//   constructor(data: Product) {
//     Object.assign(this,data)
//   }
// }
