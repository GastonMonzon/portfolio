import './Documents.css';

// import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
// import PDF from './PDF';

import cv from '../../assets/pdfs/Gaston Monzon CV.pdf';
import efSet from '../../assets/pdfs/EF SET Certificate.pdf';
import aprobado from '../../assets/pdfs/Certificado Aprobacion Henry Bootcamp.pdf';
import { useState } from 'react';

export default function Documents({ textContent }) {

  const [iframeIndex, setIframeIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showNextImage = () => {
    setIframeIndex(index => {
      if (index === - 1) return - 1
      return index - 1
    })
  }
  const showPrevImage = () => {
    setIframeIndex(index => {
      if (index === 1) return 1
      return index + 1;
    })
  }
  const getIframeStyle = (index) => {
    const translateX = 70 * index;
    const scale = 1 - Math.abs(index) / 10;
    const zIndex = index === 0 ? 1 : 0;
    console.log(index, translateX, scale);
    return {
      zIndex: zIndex,
      transform: `translateX(${translateX}%) scale(${scale})`,
    }
  }

  return (
    <section id='documents' >
      <h2>{textContent.documentsButton}</h2>
      <h3></h3>
      <div className='documentsContainer' >
        <button
          className='document-button'
          disabled={iframeIndex === 1}
          onClick={showPrevImage}
        >
        </button>
        <iframe
          className="document documentLeft"
          title="Certificado Aprobacion Henry Bootcamp"
          src={aprobado}
          style={getIframeStyle(iframeIndex - 1)}
        />
        <iframe
          className="document"
          title="Gaston Monzon CV"
          src={cv}
          style={getIframeStyle(iframeIndex)}
        />
        <iframe
          className="document documentRight"
          title="EF SET Certificate"
          src={efSet}
          style={getIframeStyle(iframeIndex + 1)}
        />
        <button
          className='document-button-right'
          disabled={iframeIndex === - 1}
          onClick={showNextImage}
        >
        </button>
      </div>
      {/* <PDFViewer className='pdf-viewer' showToolbar={true} >
        <PDF />
      </PDFViewer> */}
    </section>
  )
}