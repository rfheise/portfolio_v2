import React from 'react';

type ResumeIconProps = {
  className?: string;
  title?: string;
};

export default function ResumeIcon({ className, title = 'Resume' }: ResumeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 16h88l40 40v184H64V16z"
        fill="currentColor"
      />
      <path
        d="M152 16v48h48"
        fill="#000"
        opacity="0.18"
      />
      <path
        d="M88 116h80v12H88v-12zm0 28h64v12H88v-12zm0 28h80v12H88v-12z"
        fill="#000"
        opacity="0.32"
      />
    </svg>
  );
}
