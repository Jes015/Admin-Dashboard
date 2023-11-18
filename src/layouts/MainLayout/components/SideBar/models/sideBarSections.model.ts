import { frontRoutes } from '@/models'
import { BackpackIcon, DashboardIcon, FileTextIcon, GearIcon, IdCardIcon, MagnifyingGlassIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'

export const sideBarSections = [
  {
    title: 'Pages',
    routes: [
      {
        ...frontRoutes.statics.dashboard,
        Icon: DashboardIcon
      },
      {
        ...frontRoutes.statics.users,
        Icon: PersonIcon
      },
      {
        ...frontRoutes.statics.transactions,
        Icon: IdCardIcon
      }
    ]
  },
  {
    title: 'Analytics',
    routes: [
      {
        ...frontRoutes.statics.revenue,
        Icon: BackpackIcon
      },
      {
        ...frontRoutes.statics.reports,
        Icon: FileTextIcon
      },
      {
        ...frontRoutes.statics.teams,
        Icon: RocketIcon
      }
    ]
  },
  {
    title: 'Users',
    routes: [
      {
        ...frontRoutes.statics.settings,
        Icon: GearIcon
      },
      {
        ...frontRoutes.statics.help,
        Icon: MagnifyingGlassIcon
      }
    ]
  }
]
