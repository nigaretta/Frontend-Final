import React from 'react'
import faq from '../JSON/faq.json'
import FAQsection from '../React/FAQsection'

const FAQmap = () => {
  return (
    <div className="infos8">

      {
        faq.map((f) => (
          <FAQsection key={f.id} first={f.first} other={f.other} content={f.content} />
        )
        )
      }

    </div>
  )
}

export default FAQmap