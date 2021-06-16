import type { Options } from '@sanity/block-content-to-hyperscript';
import internals from '@sanity/block-content-to-hyperscript/internals';
import { h } from 'preact';

const { getSerializers, blocksToNodes } = internals;

function renderNode(
  serializer: string | ((...props: any[]) => void),
  propertiesOrNull: Record<string, any> | null,
  children: any[],
) {
  const properties = propertiesOrNull ?? {};

  if (typeof serializer === 'function') {
    return serializer({ ...properties, children });
  }

  const tag = serializer;
  const childNodes = properties.children ?? children;

  return h(tag, properties, childNodes);
}

export function BlockContent(options: Options) {
  const { defaultSerializers, serializeSpan } = getSerializers(renderNode, {
    useDashedStyles: true,
  });

  return blocksToNodes(renderNode, options, defaultSerializers, serializeSpan);
}
