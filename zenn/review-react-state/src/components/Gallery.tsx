import { useState, type FC } from "react"
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

export const Gallery: FC<Props> = ({ rawImages }) => {
  const [displayedImages, setDisplayedImages] = useState<ImageInfo[]>(rawImages.slice(0, DISPLAYED_IMAGES_PER_LOAD));
  const [isMore, setIsMore] = useState<boolean>(DISPLAYED_IMAGES_PER_LOAD < rawImages.length);

  const loadMore = () => {
    if (isMore) {
      const nextImages = displayedImages.concat(
        rawImages.slice(displayedImages.length, displayedImages.length + DISPLAYED_IMAGES_PER_LOAD)
      );
      setDisplayedImages(nextImages);

      if (nextImages.length >= rawImages.length) {
        setIsMore(false);
      }
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
