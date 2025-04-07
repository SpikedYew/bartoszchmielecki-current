import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "mk12c555",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
  token:
    "skZL31v2P0B2Pu6XhzGVZqNpHO9ISH6g6Ql7FrfXmbpN9k82xyqM1dFj1bTW1SQq093nrqiHkZVV7ELsi3EB42AuUN8aeu7eRIBjsP4BW3Ohn9HLd2GnjdtWogZV47rcogSs3D3I017oqPz3qa173HzFoimKA4AQ359l4P7KbMprP7wi58TY",
});
const builder = imageUrlBuilder(sanityClient);

// Function to generate the image URL
export function urlFor(source: any) {
  return builder.image(source);
}
