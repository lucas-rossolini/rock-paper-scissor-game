import GameButton from './GameButton';

import styles from './SelectionTriangle.module.css';

function SelectionTriangle(props) {
  return (
    <div className={styles.triangleContainer}>
      <GameButton
        onClick={props.playerSelectionSetFunction}
        type={'paper'}
        gridLocation={'grid-left'}
      />
      <GameButton
        onClick={props.playerSelectionSetFunction}
        type={'scissors'}
        gridLocation={'grid-right'}
      />
      <GameButton
        onClick={props.playerSelectionSetFunction}
        type={'rock'}
        gridLocation={'grid-bottom'}
      />
    </div>
  );
}

export default SelectionTriangle;
