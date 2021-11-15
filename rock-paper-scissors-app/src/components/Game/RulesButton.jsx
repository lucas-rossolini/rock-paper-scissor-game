import styles from './RulesButton.module.css';

function RulesButton(props) {
  const windowWidth = window.innerWidth;

  const marginControl =
    props.marginControl === 'stage' && props.playerSelection === ''
      ? '8.75rem' // normal phone, 3 select: 140px
      : props.marginControl === 'stage' && props.playerSelection !== ''
      ? '15.3125rem' // normal phone, stage: 245p
      : props.marginControl === 'winLose' && props.playerSelection !== ''
      ? '3.25rem' // normal phone, win: 52px
      : '0';

  const windowStyleControl = () => {
    return windowWidth <= 1000 ? { marginTop: marginControl } : {};
  };

  return (
    <button
      className={`${styles.rulesBtn} ${styles[marginControl]}`}
      onClick={props.onClick}
      style={windowStyleControl()}
    >
      rules
    </button>
  );
}

export default RulesButton;
