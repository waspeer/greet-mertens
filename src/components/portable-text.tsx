import SanityPortableText from "@sanity/block-content-to-react";
import React from "react";

interface Props {
  blocks: any[];
}

export const PortableText = ({ blocks }: Props) => {
  return <SanityPortableText blocks={blocks} />;
};
