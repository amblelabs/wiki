import { cn } from "@/lib/cn";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

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
