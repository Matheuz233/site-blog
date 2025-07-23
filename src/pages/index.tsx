import { LadingPage } from "@/templates/lading-page/lading-page"

import { allPosts } from 'contentlayer/generated';

export default function Home() {
  console.debug(allPosts);
  return <LadingPage />
}
