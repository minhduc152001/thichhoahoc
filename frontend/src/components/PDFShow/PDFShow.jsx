import React from "react";
import "./PDFShow.scss";

function PDFShow({ pdfUrl }) {
  return (
    <div>
      <iframe
        src={`${pdfUrl}#toolbar=0&scrollbar=0&view=Fit&statusbar=1`}
        height="700"
        width="100%"
        style={{ border: "1px solid green" }}
      ></iframe>
    </div>
  );
}

export default PDFShow;
