import React from 'react'

function Mapa() {
  return (
    <>
    <div className='mapa-container'>
    <div className='mapa-text'>Onde estamos localizados:</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.460371584678!2d-48.50166942366733!3d-27.54821932005812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475e01a8efef%3A0x5b0f13adab8483ec!2sSENAI%20Florian%C3%B3polis%20(CTAI)!5e0!3m2!1spt-BR!2sbr!4v1749219438428!5m2!1spt-BR!2sbr" title="mapa da empresa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Mapa
