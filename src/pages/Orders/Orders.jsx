import { useSelector } from 'react-redux';
import { cancelOrder } from '@/store/orderSlice';
import styles from './Orders.module.css';

export default function Orders() {
  const orders = useSelector(state => state.orders);

  return (
    <section className={styles.wrapper}>
      <h1>我的订单</h1>
      {orders.length === 0 && <p>暂无订单</p>}
      <ul className={styles.list}>
        {orders.map(o => (
          <li key={o.id} className={styles.item}>
            <span>{o.guestName} · {o.checkIn} ~ {o.checkOut}</span>
            <button onClick={() => {}}>取消</button>
          </li>
        ))}
      </ul>
    </section>
  );
}