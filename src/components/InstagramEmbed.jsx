import React, { useEffect } from "react";

export default function InstagramEmbed({ permalink }) {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="//www.instagram.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm?.Embeds?.process) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
      return;
    }
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media insta-embed"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        border: 0,
        borderRadius: 16,
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        background: "#0b0b0b",
      }}
    >
      <a href={permalink} target="_blank" rel="noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}
