import { useState, useEffect } from 'react';

import styles from './StageButton.module.css';
import GameButton from './GameButton';
import EmptyButton from './EmptyButton';
import CircularBeacon from '../UI/CircularBeacon';

function StageButton(props) {
  const [pcChoosing, setPcChoosing] = useState(false);

  // options player or pc
  const contestant =
    props.player === 'player' ? (
      <h3 className={styles.stageTitle}>You picked</h3>
    ) : (
      <h3
        className={`${styles.stageTitle} ${
          pcChoosing === false ? styles['stageTitle--EmptyBtn'] : ''
        }`}
      >
        The House picked
      </h3>
    );

  const playerButton = (
    <CircularBeacon
      className={styles.containerOrder}
      highlightResults={props.highlightResults}
    >
      <GameButton
        isDisabled={true}
        className={styles.stageBtn}
        type={props.selection}
      />
    </CircularBeacon>
  );

  const computerButton =
    props.player === 'pc' && !pcChoosing ? (
      <EmptyButton className={styles.stageBtn} />
    ) : (
      <CircularBeacon
        className={styles.containerOrder}
        highlightResults={props.highlightResults}
      >
        <GameButton
          isDisabled={true}
          className={styles.stageBtn}
          type={props.selection}
        />
      </CircularBeacon>
    );

  // useEffect only runs at start of render and whenever pcChoosing changes
  useEffect(() => {
    //guard clause, to prevent a useEffect state change
    if (props.player === 'player') return;
    //guard clause, to prevent a rerender changing score again
    if (pcChoosing) return;

    const houseTimer = setTimeout(() => {
      setPcChoosing(true);
      props.afterRender();
    }, 1500);

    return () => {
      clearTimeout(houseTimer);
    };
  }, [pcChoosing, props]);

  return (
    <div className={styles.stageBtnContainer}>
      {props.player === 'player' ? playerButton : computerButton}
      {contestant}
    </div>
  );
}

export default StageButton;
