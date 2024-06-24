// pages/story.js

"use client"
export default function Story() {
  return (
    <>
      <amp-story
        standalone=""
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="logo.png"
        poster-portrait-src="/static/image.jpg"
      >
        <amp-story-page id="my-first-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/static/image.jpg"
              width={900}
              height={1600}
              alt=""
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Hello, amp-story!</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="my-second-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/static/image.jpg"
              width={900}
              height={1600}
              alt=""
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>The End</h1>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </>
  );
}
