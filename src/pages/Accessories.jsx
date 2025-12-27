import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container } from '../shared/layout'

export default function AccessoriesPage() {
  return (
    <main>
      <SectionTitle eyebrow="Accessories" title="Accessories lineup coming soon" tone="wide" />
      <section className="pb-20 pt-10">
        <div className={`${container}`}>
          <p className="text-text-muted">
            We are curating our accessory range. More details will be added here.
          </p>
        </div>
      </section>
    </main>
  )
}
