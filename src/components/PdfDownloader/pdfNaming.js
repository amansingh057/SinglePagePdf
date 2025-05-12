export const generatePdfFilename = (baseName = 'document') => {
    const date = new Date();
    const timestamp = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return `${baseName}-${timestamp}.pdf`;
  };
