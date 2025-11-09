import type { FC } from 'react'
import styles from './Gallery.module.css'

interface ImageInfo {
  id: string
  url: string
  title: string
}

interface Props {
  imageInfo: ImageInfo
}

export const ImageItem: FC<Props> = ({ imageInfo }) => {
  return (
    <>
      <span>{imageInfo.title}</span>
      <img className={styles.imageItem} key={imageInfo.id} src={imageInfo.url} alt={imageInfo.title} />
    </>
  )
}
