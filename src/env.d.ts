/// <reference types="astro/client" />

declare module "*.JPG" {
  const value: import("astro").ImageMetadata;
  export default value;
}
