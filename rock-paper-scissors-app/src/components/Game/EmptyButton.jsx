import { useEffect, useState } from 'react';

import styles from './EmptyButton.module.css';

function EmptyButton(props) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }, 500);
    return () => clearInterval(timer);
  });

  return (
    <div className={`${styles.emptyBtn} ${props.className}`}>
      <p className={styles.countDown}>{count}</p>
    </div>
  );
}

export default EmptyButton;
