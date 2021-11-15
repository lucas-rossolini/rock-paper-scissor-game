import styles from './CircularBeacon.module.css';

export default function CircularBeacon({ highlightResults, ...props }) {
  return (
    <div
      className={`${
        highlightResults && typeof highlightResults === 'boolean'
          ? styles.circularBeacon
          : ''
      } ${props.className}`}
    >
      {props.children}
    </div>
  );
}
