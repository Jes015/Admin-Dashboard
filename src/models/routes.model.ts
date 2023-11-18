const getFrontRoutes = () => {
  const statics = {
    dashboard: { name: 'Dashboard', path: '/dashboard' },
    users: { name: 'Users', path: '/users' },
    products: { name: 'Products', path: '/products' },
    transactions: { name: 'Transactions', path: '/transactions' },
    revenue: { name: 'Revenue', path: '/revenue' },
    reports: { name: 'Reports', path: '/reports' },
    teams: { name: 'Teams', path: '/teams' },
    settings: { name: 'Settings', path: '/settings' },
    help: { name: 'Help', path: '/help' }
  } as const

  return { statics }
}

export const frontRoutes = getFrontRoutes()
