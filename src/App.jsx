import React from 'react';
import PdfDownloader from './components/PdfDownloader/Index';
import './App.css';
import { generatePdfFilename } from './components/PdfDownloader/pdfNaming';

function App() {
  return (
    <div className="App">
      <h1>PDF Generator Example</h1>
      
      <PdfDownloader 
        filename={generatePdfFilename("trip")}
        buttonText="Save as PDF"
        buttonClass="custom-button"
        onBeforeDownload={() => console.log("Starting PDF generation")}
        onComplete={() => console.log("PDF saved successfully")}
      >
        <div className="document-content">
          <h2>Important Report</h2>
          <p className="no-print">This text won't appear in the PDF</p>
          <p>This is the content that will be converted to PDF.</p>
          
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Designer</td>
              </tr>
            </tbody>
          </table>
          
          <img 
            src="data:image/png;base64,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" 
            alt="Sample" 
            style={{ maxWidth: '100%' }}
          />
        </div>
      </PdfDownloader>
    </div>
  );
}

export default App;