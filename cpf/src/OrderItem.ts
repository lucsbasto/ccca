import Item from "./Item";

export default class OrderItem {
  constructor(readonly itemId: number, readonly price: number, readonly quantity: number){}

  getTotal(){
    return this.price * this.quantity
  }
}