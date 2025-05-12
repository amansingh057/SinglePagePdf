import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generatePdf = async ({ elementId, filename, options }) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: options?.scale || 1,
    useCORS: true,
    ...options
  });

  const pdf = new jsPDF({
    orientation: canvas.width > canvas.height ? 'landscape' : 'portrait'
  });

  const imgData = canvas.toDataURL('image/png');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(filename);
};