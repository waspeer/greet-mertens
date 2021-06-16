declare module '@sanity/block-content-to-hyperscript' {
  // eslint-disable-next-line import/order
  import type { VNode } from 'preact';

  type Serializer = (props: any) => VNode<any>;

  interface Options {
    blocks: any[];
    /** When more than one block is given, a container node has to be created. Passing a className will pass it on to the container. Note: see renderContainerOnSingleChild. */
    className?: string;
    /** When a single block is given as input, the default behavior is to not render any container. If you always want to render the container, pass true. */
    renderContainerOnSingleChild?: boolean;
    /** Specifies the functions to use for rendering content. Merged with default serializers. */
    serializers?: {
      /** Serializers for block types, see example above */
      types?: Record<string, Serializer>;
      /** Serializers for marks- data that annotates a text child of a block. See example usage below. */
      marks?: Record<string, Serializer>;
      /** Function to use when rendering a list node */
      list?: Serializer;
      /** Function to use when rendering a list item node */
      listItem?: Serializer;
      /** Function to use when transforming newline characters to a hard break (default: <br/>, pass false to render newline character) */
      hardBreak?: Serializer;
      /** Serializer for the container wrapping the blocks */
      container?: Serializer;
      /** Override the default serializer for blocks of unknown type, if ignoreUnknownTypes is set to false (the default). */
      unknownType?: Serializer;
      /** Override the default serializer for marks of unknown type. Defaults to a span without any styling. */
      unknownMark?: Serializer;
    };
    /** When encountering image blocks, this defines which query parameters to apply in order to control size/crop mode etc. */
    imageOptions?: any;
    /** By default (or when setting this property explicitly to true) it will output a hidden <div> with a warning. By setting this property to false, the renderer will throw an error when encountering unknown block types. The behavior of the unknown type rendering can be customized by specifying a serializer with serializers.unknownType. */
    ignoreUnknownTypes?: boolean;
    /** The ID of your Sanity project. */
    projectId?: string;
    /** Name of the Sanity dataset containing the document that is being rendered. */
    dataset?: string;
  }

  export default function blockContentToHyperscript(options: Options): VNode<any>;
}

declare module '@sanity/block-content-to-hyperscript/internals' {
  import type { VNode } from 'preact';

  function getSerializers(renderNode: any, options: any): any;
  function getImageUrl(options: { node: any; options: any }): string;
  function blocksToNodes(
    renderNode: any,
    props: any,
    defaultSerializers: any,
    serializeSpan: any,
  ): VNode;
  function mergeSerializers(defaultSerializers: any, userSerializers: any): any;

  export { getSerializers, getImageUrl, blocksToNodes, mergeSerializers };
}
