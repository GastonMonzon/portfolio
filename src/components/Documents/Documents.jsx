import './Documents.css';

// import { PDFViewer } from '@react-pdf/renderer';
// import PDF from './PDF';

import cv from '../../assets/pdfs/Gaston Monzon CV.pdf';
import cvEn from '../../assets/pdfs/Gaston Monzon CV English.pdf';
import efSet from '../../assets/pdfs/EF SET Certificate.pdf';
import aprobado from '../../assets/pdfs/Certificado Aprobacion Henry Bootcamp.pdf';
import scrum from '../../assets/images/Certificado TSoft Agilidad-Introducción Scrum.png';
import { useState } from 'react';

export default function Documents({ isEnglish, textContent, viewportWidth }) {

  const [iframeIndex, setIframeIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showNextImage = () => {
    setIframeIndex(index => {
      if (index === - 2) return - 2
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
    const scale = 1 - Math.abs(index) / 10 - (viewportWidth < 1000 ? 0.2 : 0) ;
    const zIndex = index === 0 ? 1 : 0;
    return {
      zIndex: zIndex,
      transform: `translateX(${translateX}%) scale(${scale})`,
    }
  }

  return (
    <section id='documents' >
      <h2>{textContent.documentsButton}</h2>
      <h3></h3>
      <div className='documents-container' >
        <button
          className='document-button'
          disabled={iframeIndex === 1}
          onClick={showPrevImage}
        >
        </button>
        <iframe
          className='document'
          title='Certificado Aprobacion Henry Bootcamp'
          src={aprobado}
          style={getIframeStyle(iframeIndex - 1)}
        />
        <iframe
          className='document'
          title={isEnglish ? 'Gaston Monzon CV English' : 'Gaston Monzon CV Español'}
          src={isEnglish ? cvEn : cv}
          style={getIframeStyle(iframeIndex)}
        />
        <iframe
          className='document'
          title='EF SET Certificate'
          src={efSet}
          style={getIframeStyle(iframeIndex + 1)}
        />
        <img
          src={scrum}
          alt='Certificado TSoft Agilidad-Introducción Scrum'
          className='document'
          style={getIframeStyle(iframeIndex + 2)}
        />
        <button
          className='document-button-right'
          disabled={iframeIndex === - 2}
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