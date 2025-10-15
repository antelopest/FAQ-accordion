import React, {useState, useEffect} from 'react';

export default function SvgIcon(
    {name, width, height, fill, stroke, className}) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let isMounted = true;

    const iconUrl = `/icons/${name}.svg`;

    fetch(iconUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load SVG: ${iconUrl}`);
          }
          return res.text();
        })
        .then((text) => {
          if (!isMounted) return;

          const parser = new DOMParser();
          const doc = parser.parseFromString(text, "image/svg+xml");
          const svgEl = doc.querySelector("svg");

          if (!svgEl) {
            console.error(`Invalid SVG structure in: ${iconUrl}`);
            return;
          }

          if (height) svgEl.setAttribute("height", height);
          if (width) svgEl.setAttribute("width", width);
          if (fill) svgEl.setAttribute("fill", fill);
          if (stroke) svgEl.setAttribute("stroke", stroke);
          if (className) svgEl.classList.add(className);

          setSvg(svgEl.outerHTML);
        })
        .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, [name, height, width, fill, stroke, className]);

  return (<span dangerouslySetInnerHTML={{__html: svg}}/>);

}