import styles from './XBtn.module.css';
import closeIcon from '../../images/icon-close.svg';

function XBtn(props) {
  return (
    <button
      autoFocus
      className={`${styles.xbtn} ${props.className}`}
      onClick={props.onClick}
    >
      <img src={closeIcon} alt="close/exit button" />
    </button>
  );
}

export default XBtn;
