import { Menu, Search } from 'lucide-react'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'

interface SearchBarProps {
  onOpenDrawer: () => void
}

export function SearchBar({ onOpenDrawer }: SearchBarProps) {
  return (
    <header className="sticky top-0 z-20 bg-[#f8fafd]/95 px-3 pb-2 pt-[max(12px,env(safe-area-inset-top))] backdrop-blur dark:bg-[#0f1113]/95">
      <div className="flex h-14 items-center gap-1 rounded-full bg-[#eaf1fb] px-1 shadow-[0_1px_2px_rgba(60,64,67,0.18),0_1px_3px_1px_rgba(60,64,67,0.09)] dark:bg-[#1f2226] dark:shadow-black/40">
        <IconButton label="Open navigation" onClick={onOpenDrawer}>
          <Menu size={23} />
        </IconButton>
        <Search size={20} className="shrink-0 text-[#5f6368] dark:text-[#c4c7c5]" aria-hidden="true" />
        <input
          aria-label="Search mail"
          placeholder="Search in mail"
          className="h-full min-w-0 flex-1 bg-transparent px-2 text-base font-normal text-[#202124] outline-none placeholder:text-[#5f6368] dark:text-[#e3e3e3] dark:placeholder:text-[#c4c7c5]"
        />
        <Avatar name="Kashyap" className="mr-2 size-8 text-xs shadow-[0_0_0_1px_rgba(255,255,255,0.9)] dark:shadow-[0_0_0_1px_rgba(60,64,67,0.8)]" />
      </div>
    </header>
  )
}
