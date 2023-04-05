import { IOrderItem } from "../interfaces/interfaces";

export const getOrderDiscount =( order: IOrderItem[]) => {
    return  order.reduce(
        (acc, item) =>
          acc +
          ((item.product.price * item.product.discount) / 100) * item.quantity,
        0
      );
};
