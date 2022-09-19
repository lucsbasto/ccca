import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

describe('Order', () => {
  it('deve criar um pedido', () => {
    const order = new Order('600.089.970-04');
    const total = order.getTotal();
    expect(total).toBe(0);
  })

  it('não deve criar um pedido com cpf invalido', () =>{
    expect(() => new Order('600.089.970-0401')).toThrow(new Error('Invalid CPF'));
  })

  it("deve criar um pedido com 3 itens", () =>{
    const order = new Order('600.089.970-04'); 500 
    order.addItem(new Item(1, 'Camiseta', 50), 10);
    order.addItem(new Item(2, 'Caneta', 30), 23);
    order.addItem(new Item(3, 'Chave', 20), 12);
    const total = order.getTotal();
    expect(total).toBe(1430);
  })

  it("deve criar um pedido com 3 itens com cupom de desconto", () =>{
    const order = new Order('600.089.970-04'); 500 
    order.addItem(new Item(1, 'Camiseta', 50), 10);
    order.addItem(new Item(2, 'Caneta', 30), 23);
    order.addItem(new Item(3, 'Chave', 20), 12);
    order.addCoupon(new Coupon('VALE20', 20));
    const total = order.getTotal();
    expect(total).toBe(1144);
  })
})
