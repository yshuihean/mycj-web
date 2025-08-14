import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './RoomCard.module.css';

export default function RoomCard({ room }) {
  const { id, name, basePath, price, booked, photos } = room;
  const [idx, setIdx] = useState(0);

  const nextPhoto = () => setIdx((idx + 1) % photos.length);
  const prevPhoto = () => setIdx((idx - 1 + photos.length) % photos.length);

  return (
    <div className={styles.card}>
      {/* 轮播容器 */}
      <div className={styles.carousel}>
        <img src={photos[idx]} alt={`${name}-${idx}`} />
        {photos.length > 1 && (
          <>
          <button className={styles.prev} onClick={prevPhoto}>上一张</button>
          <button className={styles.next} onClick={nextPhoto}>下一张</button>
          </>
        )}
      </div>
      
      <div className={styles.body}>
        <h3 className={styles.title}>{id+' '}{name}</h3>
        <p className={styles.price}>¥{price}/晚</p>
        {booked > 0 && (
          <p className={styles.stock}>已预订</p>
        )}
        {booked == 0 && (
          <p className={styles.stock}>未预订</p>
        )}
        <Link className={styles.link} to={`/rooms/${id}`}>
          查看详情
        </Link>
      </div>
    </div>
  );
}