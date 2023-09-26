import React, { useState } from 'react';
import '../style/Components/_Collapse.scss';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span style={{marginTop:isOpen ? '171px': '0'}}>{title}</span>
        <span style={{display:isOpen ? 'none': 'block'}} className={` ${isOpen ? 'open' : 'closed'}`}><i className="fa-solid fa-chevron-up"></i></span>
      </div>
      {isOpen && <div className="collapse-content">{description}</div>}
    </div>
  );
};

export default Collapse;
