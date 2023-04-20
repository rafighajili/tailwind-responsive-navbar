import clsx from 'clsx';

export default function Button({ children, className, outlined, ...rest }) {
  return (
    <button
      className={clsx(
        'h-10 px-3 rounded-xl text-sm',
        outlined ? 'border border-white hover:bg-white/10 active:hover:bg-white/20' : 'bg-white hover:bg-neutral-300 active:hover:bg-neutral-400 text-black',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
