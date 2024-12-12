import React from "react";

const DownloadCVButton: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <a
        href="/cv.pdf"
        download="CHIRAN_JEEWANTHA_CV.pdf"
        className="bg-primary text-white py-3 px-8 rounded-lg font-medium text-lg transition duration-300 hover:bg-accent"
      >
        Download My CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
