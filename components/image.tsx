import { cn } from "@/lib/cn";
import { ImageProps } from "fumadocs-core/framework";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import { ComponentProps } from "react";
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom";

export default function Image(
  props: ExportedImageProps &
    React.RefAttributes<HTMLImageElement> & {
      sizes?: string;
    },
) {
  return (
    <ExportedImage
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
      {...props}
      className={cn("rounded-lg", props.className)}
    />
  );
}

export type ImageZoomProps = ExportedImageProps & {
  /**
   * Image props when zoom in
   */
  zoomInProps?: ComponentProps<"img">;

  /**
   * Props for `react-medium-image-zoom`
   */
  rmiz?: UncontrolledProps;
};

function getImageSrc(src: ImageProps["src"]): string {
  if (typeof src === "string") return src;

  if (typeof src === "object") {
    // Next.js
    if ("default" in src)
      return (src as { default: { src: string } }).default.src;
    return src.src;
  }

  return "";
}

export function ImageZoom({ zoomInProps, rmiz, ...props }: ImageZoomProps) {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...rmiz}
      zoomImg={{
        src: getImageSrc(props.src),
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
        {...props}
      />
    </Zoom>
  );
}
