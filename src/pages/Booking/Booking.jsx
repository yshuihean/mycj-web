import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetRoomsQuery } from '@/api/roomSlice';
import { addOrder } from '@/store/orderSlice';
import styles from './Booking.module.css';

export default function Booking() {
  const { data: rooms = [] } = useGetRoomsQuery();
  const [form, setForm] = useState({
    roomId: rooms[0]?.id || '',
    checkIn: '',
    checkOut: '',
    guestName: '',
    phone: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrder(form));
    navigate('/orders');
  };

  return (
    <section className={styles.wrapper}>
      <h1>立即预订</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          value={form.roomId}
          onChange={e => setForm({ ...form, roomId: +e.target.value })}
        >
          {rooms.map(r => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>

        <input
          type="date"
          required
          value={form.checkIn}
          onChange={e => setForm({ ...form, checkIn: e.target.value })}
        />
        <input
          type="date"
          required
          value={form.checkOut}
          onChange={e => setForm({ ...form, checkOut: e.target.value })}
        />
        <input
          placeholder="姓名"
          required
          value={form.guestName}
          onChange={e => setForm({ ...form, guestName: e.target.value })}
        />
        <input
          placeholder="手机号"
          required
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <button type="submit" className={styles.btn}>提交订单</button>
      </form>
    </section>
  );
}