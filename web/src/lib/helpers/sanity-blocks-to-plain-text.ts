interface SanityBlock {
  _type: 'block';
  children: { text: string }[];
}

export function sanityBlocksToPlainText(blocks: SanityBlock[]) {
  if (!blocks) {
    return '';
  }

  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }

      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}
