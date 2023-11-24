import React, { useState } from "react";

function Resume() {
  const [viewOnline, setViewOnline] = useState(false);
  const myResume = "/files/JasonHoomaluResume.pdf";

  const downloadPDF = () => {
    const anchor = document.createElement("a");
    anchor.href = myResume;
    anchor.download = "JasonHoomaluResume.pdf";
    anchor.click();
  };

  const printPDF = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = myResume
    document.body.appendChild(iframe);
  
    iframe.onload = () => {
      iframe.contentWindow.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 15000); // Remove the iframe after 15 seconds (adjust as needed)
    };
  };

  const handleViewOnline = () => {
    setViewOnline(true);
    setTimeout(() => {
      window.scrollTo(0, 500)
    }, 500)
  };
  const handleClosePdf = () => {
    setViewOnline(false);
  };

  if (viewOnline) {
    return (
      <>
        <div className="text-center">
          <button
            type="button"
            className="submit-btn my-3 w-75 p-2"
            onClick={handleClosePdf}
          >
            Go Back
          </button>
        </div>
        <div>
          <iframe
            title="PDF Viewer"
            width="100%"
            height="700px"
            src={myResume} // Replace this with the URL or path to your PDF file
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div class="text-center container h-100">
          <button
            type="button"
            className="submit-btn my-3 w-50 p-2"
            onClick={downloadPDF}
          >
            Download Resume
          </button>
          <button
            type="button"
            className="submit-btn my-3 w-50 p-2"
            onClick={handleViewOnline}
          >
            View Resume
          </button>
          <button type="button" className="submit-btn my-3 w-50 p-2" onClick={printPDF}>
            Print Resume
          </button>
          <button type="button" onClick={() => document.location.href = "/contact"} className="submit-btn my-3 w-50 p-2">
            Hire Me
          </button>
        </div>
      </div>
    );
  }
}

export default Resume;
