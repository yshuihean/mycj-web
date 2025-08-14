import { useParams, Link, Navigate } from 'react-router-dom';
import { mockRooms } from '@/api/mock/rooms';
import { useGetRoomQuery } from '@/api/roomSlice';
import { useState } from 'react';
import styles from './RoomDetail.module.css';

export default function RoomDetail() {
  const { id } = useParams();
  const mockroom = mockRooms.find(r => r.id === Number(id));

  /* 后期升级为room */
  const { data: room, isLoading } = useGetRoomQuery(Number(id));
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % mockroom.photos.length);
  const prev = () => setIdx((idx - 1 + mockroom.photos.length) % mockroom.photos.length);

  if (isLoading) return <p>加载中...</p>;
  if (!mockroom) return <Navigate to="/rooms" replace />;

  return (
    <section className={styles.wrapper}>
      {/* 轮播 */}
      <div className={styles.carousel}>
        <img src={mockroom.photos[idx]} alt={mockroom.name} />
        {mockroom.photos.length > 1 && (
          <>
            <button className={styles.prev} onClick={prev}>‹</button>
            <button className={styles.next} onClick={next}>›</button>
          </>
        )}
      </div>
      {/* 信息 */}
      <div className={styles.info}>
        <h1>{mockroom.id+' '+mockroom.name}</h1>
        <p className={styles.price}>¥{mockroom.price}/晚</p>
        <p className={styles.desc}>{mockroom.desc}</p>
        <Link className={styles.bookBtn} to={`/booking?roomId=${mockroom.id}`}>
          立即预订
        </Link>
      </div>
    </section>
  );
}