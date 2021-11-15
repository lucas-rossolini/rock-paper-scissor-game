import styles from './WinLose.module.css';
import PlayAgainBtn from './PlayAgainBtn';
function WinLose(props) {
  const results =
    props.result && typeof props.result === 'boolean'
      ? 'you win'
      : !props.result && typeof props.result === 'boolean'
      ? 'you lose'
      : 'tie !!!';

  return (
    <div className={styles.winLoseContainer}>
      <div className={styles.winLoseTitle}>{results}</div>
      <PlayAgainBtn onPlayAgain={props.onPlayAgain} />
    </div>
  );
}

export default WinLose;
