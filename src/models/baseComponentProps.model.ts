export interface BaseComponentProps {
  children?: React.ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
}

export type BaseComponentType = React.FC<BaseComponentProps>
