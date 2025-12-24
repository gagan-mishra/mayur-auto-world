import React, { useState } from 'react'

export default function CompareSlider({ beforeSrc, afterSrc, altBefore = 'Before', altAfter = 'After' }) {
  const [value, setValue] = useState(50)

  return (
    <div className="compare-wrap" style={{ '--pos': `${value}%` }}>
      <img src={beforeSrc} alt={altBefore} className="compare-img" />
      <img src={afterSrc} alt={altAfter} className="compare-img compare-img-after" />
      <div className="compare-line" aria-hidden="true" />
      <div className="compare-handle" aria-hidden="true">
        <span className="compare-handle-arrow">‹</span>
        <span className="compare-handle-dot" />
        <span className="compare-handle-arrow">›</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="compare-range"
        aria-label="Compare before and after"
      />
      <div className="compare-label compare-label-before">Before</div>
      <div className="compare-label compare-label-after">After</div>
    </div>
  )
}
