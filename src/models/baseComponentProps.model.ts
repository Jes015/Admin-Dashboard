export interface BaseComponentProps {
  children?: React.ReactNode
  className?: string
}

export type BaseComponentType = React.FC<BaseComponentProps>
