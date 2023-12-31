import React, { PropsWithChildren } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

// Step 2
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeComponent = ({ children }: PropsWithChildren) => {
  const sourceCode = ` <html lang="en">
  <body className={soehne.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="z-[100]">
        <Topbar />

        <Navbar />
      </div>
      {children}
      <Footer />
    </ThemeProvider>
  </body>
</html>`;
  return (
    <SyntaxHighlighter language="html" style={docco}>
      {sourceCode} {/* Step 6 */}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;
