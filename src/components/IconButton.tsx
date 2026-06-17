import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children: ReactNode
}

export function IconButton({ label, children, className = '', ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`grid size-11 shrink-0 place-items-center rounded-full text-[#5f6368] transition duration-150 hover:bg-black/5 active:scale-95 active:bg-black/10 dark:text-[#c4c7c5] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.12] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
