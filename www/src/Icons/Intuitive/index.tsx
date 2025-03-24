import styles from '../index.module.css';

export function Intuitive() {
  return (
    <svg
      className={styles.intuitiveIcon}
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
      <path d='m3 15 2 2 4-4' />
    </svg>
  );
}
