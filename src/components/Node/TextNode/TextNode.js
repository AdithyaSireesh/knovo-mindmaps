import React from 'react';
import useComponentVisible from '../../../hooks/useComponentVisible';
import classes from './TextNode.module.css';

function TextNode({ id, data }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className={`${classes.mainDiv}`}>
      <div className={`${classes.options}`}></div>
      <div
        ref={ref}
        onClick={() => setIsComponentVisible(true)}
        contentEditable={isComponentVisible}
        className={`${classes.default} ${isComponentVisible ? classes.highlight : ''} `}
        onChange={(e) => data.setNodeText(id, e.target.value)}
        suppressContentEditableWarning={true}
      >
        {data.text}
      </div>
    </div>
  );
}

export default TextNode;
