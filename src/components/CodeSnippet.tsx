"use client"
import {  CodeBlock, dracula,  } from 'react-code-blocks';

function CodeSnippet({ code }:{code:string}) {
  return (
    <CodeBlock
      text={code}
      language={"javascript"}
      showLineNumbers={true}
      theme={dracula}
     
    />
  );
}
export default CodeSnippet