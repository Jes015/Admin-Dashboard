import { type IconProps } from '@radix-ui/react-icons/dist/types'

export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

export type IconCustom = React.FC<React.SVGProps<SVGSVGElement>>
