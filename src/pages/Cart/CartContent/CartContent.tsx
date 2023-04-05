import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../components/Container/Container';
import { IOrderItem, IUser } from '../../../interfaces/interfaces';
import { fetchNewOrderToDB } from '../../../utils/api';
import { getOrderDiscount } from '../../../utils/getOrderDiscount';
import { getTotalCost } from '../../../utils/getTotalCost';
import { CartItem } from '../CartItem/CartItem';
import { CartPrice } from '../CartPrice/CartPrice';
import './CartContent.scss';

type TProps = {
  order: IOrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};
export const CartContent = ({ order, setOrder }: TProps) => {
  const [isInOrderPage, setIsInOrderPage] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onToOrderButtonClick = () => {
    if (!isInOrderPage) {
      setIsInOrderPage(true);
      return;
    }
  };

  const onOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let user: IUser = {
      email: '',
      address: '',
      message: '',
      name: '',
      phone: '',
    };
    const data = new FormData(e.target);
    const entries = data.entries();
    for (let entry of Array.from(entries)) {
      const key = entry[0] as
        | 'phone'
        | 'email'
        | 'address'
        | 'message'
        | 'name';
      const val = entry[1] as string;
      user[key] = val;
    }

    const orderItems = order.map(
      ({ quantity, product: { _id, name, image, price, discount, rate } }) => ({
        productId: _id,
        name,
        image,
        price,
        discount,
        rate,
        quantity,
      })
    );
    const totalCost = getTotalCost(order);
    const discount = getOrderDiscount(order);
    // fetchNewOrderToDB(user, orderItems, totalCost, discount);
    if (ref.current) ref.current.style.backgroundColor = '#EFD372';
    setTimeout(() => {
      navigate('/thank-page');
    }, 1000);
  };

  return (
    <Container className="cart-content">
      <>
        {order.length === 0 ? (
          <p className="cart-content__empty">No items in cart</p>
        ) : (
          order.map(item => (
            <CartItem key={item.product._id} item={item} setOrder={setOrder} />
          ))
        )}
        {order.length > 0 && (
          <>
            <CartPrice order={order} />
            {isInOrderPage && (
              <form
                onSubmit={onOrderSubmit}
                className="cart-content__user-form"
              >
                <div className="user-form__name-box">
                  <label htmlFor="user-name"> Full Name*</label>
                  <input
                    id="user-name"
                    name="name"
                    type="text"
                    pattern="^[A-Z][a-z]*$"
                    placeholder="Your Full Name"
                    required
                  ></input>
                </div>
                <div className="user-form__email-box">
                  <label htmlFor="user-email"> Your Email*</label>
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    placeholder="example@yourmail.com"
                    required
                  ></input>
                </div>
                <div className="user-form__company-address-box">
                  <label htmlFor="user-company-address">Address*</label>
                  <input
                    id="user-company-address"
                    name="address"
                    type="text"
                    placeholder="your company  address"
                    required
                  ></input>
                </div>
                <div className="user-form__phone-box">
                  <label htmlFor="user-phone">Phone number*</label>
                  <input
                    id="user-phone"
                    name="phone"
                    type="tel"
                    pattern="[+]380\d{9}"
                    placeholder="Enter your phone"
                    required
                  ></input>
                </div>
                <div className="user-form__textarea-box">
                  <label htmlFor="user-extra-info">Phone number*</label>
                  <textarea
                    id="user-extra-info"
                    name="message"
                    placeholder="Enter your phone"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-order-button" ref={ref}>
                  Comfirm
                </button>
              </form>
            )}
            {!isInOrderPage && (
              <button
                className="cart-content__to-order-button"
                onClick={onToOrderButtonClick}
              >
                To Order
              </button>
            )}
          </>
        )}
      </>
    </Container>
  );
};
