import React from "react";
import "./PDFShow.scss";

function PDFShow({ pdfUrl }) {
  return (
    <div>
      {/* <object
        data="https://firebasestorage.googleapis.com/v0/b/thesis-7edb1.appspot.com/o/pdf%2Fpdf-hoa-hoc-12.pdf?alt=media&token=7f7e9913-1979-43c4-9198-a190a517867d"
        type="application/pdf"
        width="100%"
        height="700"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="https://firebasestorage.googleapis.com/v0/b/thesis-7edb1.appspot.com/o/pdf%2Fpdf-hoa-hoc-12.pdf?alt=media&token=7f7e9913-1979-43c4-9198-a190a517867d">
            to the PDF!
          </a>
        </p>
      </object> */}
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
