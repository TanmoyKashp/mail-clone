import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationDrawer } from '../components/NavigationDrawer'

export function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('mailx-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('mailx-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="min-h-svh bg-[#f8fafd] text-[#202124] dark:bg-[#0f1113] dark:text-[#e3e3e3]">
      <Outlet context={{ openDrawer: () => setDrawerOpen(true) }} />
      <NavigationDrawer
        open={drawerOpen}
        darkMode={darkMode}
        onClose={() => setDrawerOpen(false)}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />
    </div>
  )
}
