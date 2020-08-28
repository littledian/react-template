import React, { useCallback, useState } from 'react';
import { Button, Typography } from 'antd';
import styles from './index.scss';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className={styles.root}>
      <Typography.Text>{count}</Typography.Text>
      <Button onClick={handleClick}>点我</Button>
    </div>
  );
};

export default Home;
