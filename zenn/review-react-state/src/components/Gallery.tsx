import { useState } from "react"
import styles from './Gallery.module.css'
import { ImageItem } from "./ImageItem";

const DISPLAYED_IMAGES_PER_LOAD = 3;

interface ImageInfo {
  id: string
  url: string
  title: string
}

interface Props {
  rawImages: ImageInfo[]
}

export const Gallery = ({ rawImages }: Props) => {
  const [displayedNum, setDisplayedNum] = useState<number>(DISPLAYED_IMAGES_PER_LOAD);
  const displayedImages = rawImages.slice(0, displayedNum);
  const isMore = displayedNum < rawImages.length;

  const loadMore = () => {
    if (isMore) {
      setDisplayedNum(prev => prev + DISPLAYED_IMAGES_PER_LOAD);
    }
  }

  return (
    <>
      <div className={styles.gallery}>
        {displayedImages.map(item => <ImageItem key={item.id} imageInfo={item} />)}
      </div>
      {isMore && <button onClick={loadMore}>Load More</button>}
    </>
  )
}
