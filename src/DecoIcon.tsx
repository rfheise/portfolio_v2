import React from 'react';

type DecoIconProps = {
  src: string;
  className?: string;
};

export default function DecoIcon({ src, className }: DecoIconProps) {
  const maskImage = `url(${src})`;
  return (
    <span
      className={className ? `deco-icon ${className}` : 'deco-icon'}
      style={{ WebkitMaskImage: maskImage, maskImage }}
      aria-hidden="true"
    />
  );
}

