import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './styles.css';

const PdfDownloader = ({
  children,
  filename = "document.pdf",
  scale = 1,  // Reduced scale for better performance with long content
  buttonText = "Download PDF",
  buttonClass = "",
  disabled = false,
  onBeforeDownload,
  onComplete
}) => {
  const contentRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (disabled) return;

    setIsGenerating(true);

    try {
      if (onBeforeDownload) await onBeforeDownload();

      const element = contentRef.current;
      if (!element) return;

      // Hide elements not meant for PDF
      const elementsToHide = document.querySelectorAll('.no-print');
      elementsToHide.forEach(el => el.style.visibility = 'hidden');

      const options = {
        scale: 3,                  // Increased from 2 to 3
        dpi: 300,                 // Print quality DPI
        letterRendering: true,     // Better text quality
        useCORS: true,            // For external images
        allowTaint: true,          // If using images from other domains
        backgroundColor: '#FFFFFF',
        windowHeight: element.scrollHeight,
        width: element.scrollWidth,
        onclone: (clonedDoc) => {  // Ensure proper styling
          clonedDoc.body.style.width = `${element.scrollWidth}px`;
        }
      };

      const canvas = await html2canvas(element, options);
      const imgData = canvas.toDataURL('image/png');

      // Create PDF with dimensions matching the canvas
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',  // Using pixels for precise sizing
        format: [canvas.width, canvas.height]  // Single page with exact dimensions
      });

      // Add image to PDF (full size, single page)
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(filename);

      if (onComplete) onComplete();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Restore hidden elements
      const elementsToHide = document.querySelectorAll('.no-print');
      elementsToHide.forEach(el => el.style.visibility = 'visible');
      setIsGenerating(false);
    }
  };

  return (
    <div className="pdf-downloader-container">
      <button
        onClick={handleDownload}
        disabled={isGenerating || disabled}
        className={`pdf-download-button ${buttonClass}`}
      >
        {isGenerating ? 'Generating PDF...' : buttonText}
      </button>

      <div ref={contentRef} className="pdf-content">
        {children}
      </div>
    </div>
  );
};

export default PdfDownloader;