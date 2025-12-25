import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";

import { CodeblockClientShiki } from "@/components/code-block/client/shiki";

const CodeBlockClientExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader
        language="ts"
        title="Code block rendered on client side"
      />
      <CodeBlockContent>
        <CodeblockClientShiki
          language="ts"
          code="console.log('Hello, world!');"
        />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockClientExample;
