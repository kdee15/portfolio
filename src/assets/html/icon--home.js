import React from "react";

const HomeSVG = () => (
  <>
    <svg
      className={`homeSVG`}
      width="100"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
    >
      <path d="M85.4,53.7v40.5c0,2-1.4,3.6-3.1,3.6h-21.8c-1.6,0-2.9-1.6-2.9-3.6v-24.4h-15.1v24.4c0,2-1.3,3.6-2.9,3.6h-21.8c-1.6,0-3.1-1.6-3.1-3.6v-40.5H5.1c-2.8,0-4.2-4.2-2-6.4L48,2.9c1.1-1.1,2.8-1.1,3.9,0l44.9,44.4c2.2,2.2.8,6.4-2,6.4h-9.5ZM81.4,93.1v-44.2h10.7L50,7.2,7.8,48.9h10.7v44.2h19.9v-24.4c0-2,1.4-3.6,3.1-3.6h16.8c1.6,0,3.1,1.6,3.1,3.6v24.4h19.9Z" />
    </svg>

    <style jsx global>{`
      .homeSVG {
        path {
          fill: white;
        }
      }
    `}</style>
  </>
);

export { HomeSVG };
