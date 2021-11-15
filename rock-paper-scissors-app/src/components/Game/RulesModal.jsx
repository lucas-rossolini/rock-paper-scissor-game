//tools
import { useEffect } from 'react';

// components
import Modal from '../UI/Modal';
import XBtn from '../UI/XBtn';

import styles from './RulesModal.module.css';
import rules from '../../images/image-rules.svg';

function RulesModal(props) {
  const windowKeyPressEvent = (e) => {
    if (e.key === 'Escape') {
      //closes modal
      props.modalControls();
    }
  };

  // useEffect fires after each full component render/paint
  useEffect(() => {
    window.addEventListener('keydown', windowKeyPressEvent);

    // clean up function = always calls last and before next effect after first load
    return () => {
      window.removeEventListener('keydown', windowKeyPressEvent);
    };
  });

  const onClickRemoveModal = (e) => {
    // portal div, will always be in html
    const parent = document.getElementById('rules-modal');
    if (e.target.parentElement === parent) {
      props.modalControls();
    }
  };

  return (
    <Modal onClick={onClickRemoveModal}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>rules</h2>
        <img className={styles.modalImg} src={rules} alt="game-rules" />
        <XBtn className={styles.closeBtn} onClick={props.modalControls} />
      </div>
    </Modal>
  );
}

export default RulesModal;
