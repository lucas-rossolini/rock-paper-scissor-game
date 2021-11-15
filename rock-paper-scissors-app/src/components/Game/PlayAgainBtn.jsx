import styles from './PlayAgainBtn.module.css';
import FilledBox from '../UI/FilledBox';
function PlayAgainBtn(props) {
  return (
    <FilledBox
      className={styles.playAgainText}
      element="button"
      onClick={props.onPlayAgain}
    >
      play again
    </FilledBox>
  );
}

export default PlayAgainBtn;
