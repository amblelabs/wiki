import type { ComponentProps } from 'react';
import type { ImageMetadata } from 'astro';
import { ImageZoom as BaseImageZoom } from 'fumadocs-ui/components/image-zoom';

export interface ImageZoomProps
  extends Omit<ComponentProps<typeof BaseImageZoom>, 'src'> {
  src: string | ImageMetadata;
  placeholder?: 'blur' | 'empty';
  basePath?: string;
}

export function ImageZoom({
  src,
  placeholder: _placeholder,
  basePath: _basePath,
  width,
  height,
  ...props
}: ImageZoomProps) {
  const resolvedSrc = typeof src === 'object' ? src.src : src;
  const resolvedWidth =
    width ?? (typeof src === 'object' ? src.width : undefined);
  const resolvedHeight =
    height ?? (typeof src === 'object' ? src.height : undefined);

  return (
    <BaseImageZoom
      src={resolvedSrc}
      width={resolvedWidth}
      height={resolvedHeight}
      {...props}
    />
  );
}

export default ImageZoom;