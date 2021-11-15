import styles from './Modal.module.css';

function Modal(props) {
  return (
    <div onClick={props.onClick} className={styles.modalMask}>
      {props.children}
    </div>
  );
}

export default Modal;
