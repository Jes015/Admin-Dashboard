'use client'
import DefaultImage, { type ImageProps as DefaultImageProps } from 'next/image'
import { useState } from 'react'
import styles from './image.module.css'

interface ImageProps extends DefaultImageProps {
  lazy: boolean
}

export const Image: React.FC<ImageProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleOnLoadStart = () => {
    setIsLoading(true)
  }

  const handleOnLoad = () => {
    setIsLoading(false)
  }

  return (
    <div
      className={
        [
          'bg-[rgba(255,255,255,.008)] relative h-full w-full !overflow-hidden',
          isLoading ? styles.image : ''
        ].join(' ')
      }
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        overflow: 'hidden'
      }}
    >
      <DefaultImage
        {...props}
        className={
          [
            'object-cover w-full h-full [transition:opacity_0.7s_ease]',
            isLoading ? 'opacity-0' : ''
          ].join(' ')
        }
        onLoadStart={handleOnLoadStart}
        onLoad={handleOnLoad}
        loading={props.lazy ? 'lazy' : 'eager'}
      />
    </div>
  )
}
