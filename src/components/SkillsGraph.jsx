import React, { useEffect } from 'react';
import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import fcose from 'cytoscape-fcose';
import { skillsData } from '../utils/skillsData';

// Register the COSE-Bilkent layout
cytoscape.use(fcose);

const SkillsGraph = () => {
  useEffect(() => {
    const cy = cytoscape({
      container: document.getElementById('cy'), // Container to render in

      elements: [...skillsData.nodes, ...skillsData.edges], // Combine nodes and edges from the data

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(label)',    // Ensure labels are properly set
            'text-valign': 'above',   // Reset to center if previously altered
            'text-halign': 'center',   // Center the label horizontally
            'text-margin-y': '-5px',
            'color': '#fff',           // Ensure label text is visible
            'font-size': '20px',       // Increase font size slightly for better visibility
            'width': '40px',
            'height': '40px',
          },
        },
        {
          selector: 'node[type="main"]',
          style: {
            'background-color': '#333',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'color': '#fff',
            'font-size': '25px',
            'width': '200px',    // Larger size for main nodes
            'height': '200px',
          },
        },
        {
          selector: 'node[type="sub1"]',
          style: {
            'background-color': '#333',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'color': '#fff',
            'font-size': '20px',
            'width': '120px',    // Larger size for main nodes
            'height': '120px',
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 1,
            'line-color': '#ccc',
            'curve-style': 'bezier',
            'opacity': 0.25,
          },

        },
      ],

      layout: {
        name: 'fcose',
        quality: 'default',         // Can be 'default', 'proof', or 'draft'
        nodeRepulsion: 15000,        // Higher values will spread nodes further apart
        idealEdgeLength: 50,        // Shorter edges to spread out nodes
        gravity: 0.5,              // Controls the overall distribution of nodes
        tile: true,                 // Use tiling to avoid overlap in dense areas
        randomize: true,            // Randomize initial positions
        fit: true,                  // Fit to the container after layout
        padding: 10,                // Padding around the graph
        uniformNodeDimensions: false,

      },

      userZoomingEnabled: false,
      userPanningEnabled: false,
    });

    cy.layout({
      name: 'grid', // Start with a grid layout to spread out nodes
      fit: true,
      padding: 50,
    }).run();

    // Then apply fcose layout
    cy.layout({
      name: 'fcose',
      nodeRepulsion: 10000,
      idealEdgeLength: 50,
      gravity: 0.1,
      tile: true,
      randomize: false,
      fit: true,
      padding: 50,
    }).run();
    // Cleanup function
    return () => cy.destroy();
  }, []);

  return <div id="cy" style={{ width: '90%', height: '80vh' }} />;
};

export default SkillsGraph;

