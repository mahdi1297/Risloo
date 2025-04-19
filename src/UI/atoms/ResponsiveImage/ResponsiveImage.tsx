import Image from 'next/image'

export const ResponsiveImage = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: 'contain',
      }}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
)
