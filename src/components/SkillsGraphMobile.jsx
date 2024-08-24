import React, { useState } from 'react';
import { skillsData } from '../utils/skillsData';
import styles from '../styles/SkillsAccordion.module.css';

const MobileSkillsAccordion = () => {
  const [activeNode, setActiveNode] = useState(null);

  const toggleNode = (nodeId) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  return (
    <div className={styles.accordionContainer}>
      {skillsData.nodes.filter(node => node.data.type === 'main').map(mainNode => (
        <div key={mainNode.data.id} className={styles.mainNodeContainer}>
          <button
            onClick={() => toggleNode(mainNode.data.id)}
            className={`${styles.mainNodeButton} ${activeNode === mainNode.data.id ? styles.active : ''}`}
          >
            {mainNode.data.label}
          </button>
          {activeNode === mainNode.data.id && (
            <div className={styles.subNodeContainer}>
              {skillsData.nodes.filter(node => skillsData.edges.some(edge => edge.data.source === mainNode.data.id && edge.data.target === node.data.id)).map(subNode => (
                <div key={subNode.data.id} className={styles.subNode}>
                  <div className={styles.subNodeLabel}>
                    {subNode.data.label}
                  </div>
                  <div className={styles.defaultNodeContainer}>
                    {skillsData.nodes.filter(node => skillsData.edges.some(edge => edge.data.source === subNode.data.id && edge.data.target === node.data.id)).map(defaultNode => (
                      <div key={defaultNode.data.id} className={styles.defaultNode}>
                        {defaultNode.data.label}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileSkillsAccordion;

