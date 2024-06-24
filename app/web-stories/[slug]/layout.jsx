// layout.tsx

import Script from "next/script";
import * as Amp from "react-amphtml";

export const metadata = {
  title: 'test',
  description: 'test description',
}
export default function RootLayout({ children }) {
  return (
    <>
      <Amp.Html>
        <head title="">
          <link rel="canonical" href="/web-stories" />
          <Script async src="https://cdn.ampproject.org/v0.js" />
          <Script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
        </head>
        <body>{children}</body>
      </Amp.Html>
    </>
  );
}

//page.tsx
