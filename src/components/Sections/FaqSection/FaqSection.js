import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './Data'
import './FaqSection.css'

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;