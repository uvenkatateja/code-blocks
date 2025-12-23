import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";

import { CodeBlockClient } from "@/components/code-block/code-block-client";

const CodeBlockClientExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader language="ts" title="Code block rendered on client side" />
      <CodeBlockContent>
        <CodeBlockClient language="ts" code="console.log('Hello, world!');" />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockClientExample;
