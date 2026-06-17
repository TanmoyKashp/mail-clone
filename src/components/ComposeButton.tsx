import { Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ComposeButton() {
  return (
    <Link
      to="/compose"
      aria-label="Compose"
      className="fixed bottom-[max(24px,env(safe-area-inset-bottom))] right-4 z-20 flex h-14 items-center gap-3 rounded-2xl bg-[#c2e7ff] px-5 text-sm font-medium text-[#001d35] shadow-[0_4px_8px_3px_rgba(60,64,67,0.15),0_1px_3px_rgba(60,64,67,0.3)] transition duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-[#b5ddf6] active:scale-95 dark:bg-[#a8c7fa] dark:text-[#062e6f] dark:shadow-black/50"
    >
      <Pencil size={20} />
      <span>Compose</span>
    </Link>
  )
}
