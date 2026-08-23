/// <reference types="astro/client" />

declare module "*.JPG" {
  const value: import("astro").ImageMetadata;
  export default value;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

