import { Archive, Clock3, Edit3, Inbox, Mail, Moon, Send, Settings, Star, Sun, Trash2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { MailXLogo } from './MailXLogo'

interface NavigationDrawerProps {
  open: boolean
  darkMode: boolean
  onClose: () => void
  onToggleTheme: () => void
}

const navItems = [
  { to: '/inbox', label: 'Inbox', icon: Inbox, count: 8 },
  { to: '/starred', label: 'Starred', icon: Star },
  { label: 'Snoozed', icon: Clock3 },
  { to: '/sent', label: 'Sent', icon: Send },
  { to: '/drafts', label: 'Drafts', icon: Edit3, count: 2 },
  { to: '/trash', label: 'Trash', icon: Trash2 },
  { to: '/custom', label: 'Custom Mail', icon: Archive },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export function NavigationDrawer({ open, darkMode, onClose, onToggleTheme }: NavigationDrawerProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Close navigation"
        className={`fixed inset-0 z-30 bg-black/35 transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[84vw] max-w-[320px] transform overflow-hidden rounded-br-[28px] rounded-tr-[28px] bg-white pt-[env(safe-area-inset-top)] shadow-[0_8px_24px_rgba(60,64,67,0.28)] transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] dark:bg-[#17191c] dark:shadow-black/60 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <MailXLogo />
        <nav className="px-0">
          {navItems.map(({ to, label, icon: Icon, count }) =>
            to ? (
              <NavLink
                key={label}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `mr-3 flex h-10 items-center gap-7 rounded-r-full pl-6 pr-4 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#fce8e6] text-[#b3261e] dark:bg-[#3f201d] dark:text-[#f2b8b5]'
                      : 'text-[#3c4043] hover:bg-[#f1f3f4] dark:text-[#e3e3e3] dark:hover:bg-white/[0.08]'
                  }`
                }
              >
                <Icon size={20} />
                <span className="flex-1">{label}</span>
                {count ? <span className="text-xs font-semibold">{count}</span> : null}
              </NavLink>
            ) : (
              <button
                key={label}
                type="button"
                className="mr-3 flex h-10 w-[calc(100%-12px)] items-center gap-7 rounded-r-full pl-6 pr-4 text-left text-sm font-medium text-[#3c4043] transition hover:bg-[#f1f3f4] dark:text-[#e3e3e3] dark:hover:bg-white/[0.08]"
              >
                <Icon size={20} />
                <span className="flex-1">{label}</span>
              </button>
            ),
          )}
        </nav>
        <div className="mx-6 my-3 h-px bg-[#e0e3e7] dark:bg-[#303134]" />
        <button
          type="button"
          onClick={onToggleTheme}
          className="mr-3 flex h-10 w-[calc(100%-12px)] items-center gap-7 rounded-r-full pl-6 pr-4 text-sm font-medium text-[#3c4043] transition hover:bg-[#f1f3f4] dark:text-[#e3e3e3] dark:hover:bg-white/[0.08]"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
        </button>
        <div className="absolute bottom-[max(20px,env(safe-area-inset-bottom))] left-5 right-5 rounded-3xl bg-[#f8fafd] p-4 dark:bg-[#202124]">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-[#0b57d0] dark:text-[#8ab4f8]" />
            <p className="truncate text-sm font-medium text-[#202124] dark:text-[#e3e3e3]">kashyap@mailx.local</p>
          </div>
        </div>
      </aside>
    </>
  )
}
