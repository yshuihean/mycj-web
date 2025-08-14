import RoomCard from '@/components/RoomCard/RoomCard';
import { useGetRoomsQuery } from '@/api/roomSlice';
import styles from './Rooms.module.css';

export default function Rooms() {
  const { data: rooms = [], isLoading } = useGetRoomsQuery();

  if (isLoading) 
    return (
    <section className={styles.wrapper}>
      <h1 className={styles.head}>房间列表</h1>
      <p>加载中...</p>
    </section>  
    );
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.head}>房间列表</h1>
      <div className={styles.flex}>
        {rooms.map(r => (
          <RoomCard key={r.id} room={r} />
        ))}
      </div>
    </section>
  );
}