import React from 'react';
import { Handle } from 'react-flow-renderer';
import classes from './TextNode.module.css';

function TextNode(props) {
  // const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  // console.log(props);
  return (
    <div className={classes.mainDiv}>
      <Handle position="right" id={`${props.id}-r`} />
      <Handle position="left" id={`${props.id}-l`} />
      <div
        className={`${classes.node} ${props.selected ? classes.highlight : ''} `}
        onChange={(e) => props.data.setNodeText(props.id, e.target.value)}
        suppressContentEditableWarning={true}
      >
        {props.data.text}
      </div>
      {props.selected && <div className={classes.z10}></div>}
    </div>
  );
}

export default TextNode;
