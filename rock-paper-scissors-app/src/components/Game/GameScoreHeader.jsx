import Score from './Score';

import styles from './GameScoreHeader.module.css';
import logo from '../../images/logo.svg';

function GameScoreHeader(props) {
  return (
    <div className={styles.GameScoreHeaderContainer}>
      <img src={logo} alt="Rock, Paper, Scissors" className={styles.logo} />
      <Score score={props.score} />
    </div>
  );
}

export default GameScoreHeader;
