import Image, { type ImageProps } from "next/image";

type StockImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
};

export function StockImage({ alt, className, priority, ...props }: StockImageProps) {
  return (
    <Image
      alt={alt}
      className={className}
      priority={priority}
      sizes={props.sizes ?? "(max-width: 768px) 100vw, 50vw"}
      {...props}
    />
  );
}
