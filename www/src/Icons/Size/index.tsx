import styles from '../index.module.css';

export function Size() {
  return (
    <svg
      className={styles.sizeIcon}
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4' />
      <path d='M14 2v4a2 2 0 0 0 2 2h4' />
      <path d='M3 15h6' />
    </svg>
  );
}
