import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { skillsData } from '../utils/skillsData';


// TODO: - add more edges in skillsData
// - figure out a responsive representation while maintaining some amound of creativity

const SkillsGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const renderGraph = () => {
      const width = window.innerWidth * 1;  // Use 95% of the window width
      const height = window.innerHeight * 1.25;  // Use 85% of the window height

      const nodes = skillsData.nodes.map(node => ({
        id: node.data.id,
        label: node.data.label,
        group: node.data.type || 'default',
      }));

      const links = skillsData.edges.map(edge => ({
        source: edge.data.source,
        target: edge.data.target,
      }));

      d3.select(svgRef.current).selectAll('*').remove();
      const svg = d3.select(svgRef.current)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height].join(' '))
        .attr('preserveAspectRatio', 'xMidYMid meet');

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(125))  // Increase link distance
        .force('charge', d3.forceManyBody().strength(-600))  // Increase repulsion
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('x', d3.forceX(width / 2).strength(0.025))  // Keep the graph centered
        .force('y', d3.forceY(height / 2).strength(0.175))
        .force('collision', d3.forceCollide().radius(d => {
          if (d.group === 'main') return 90; // Collision radius for main nodes
          if (d.group === 'sub1') return 60; // Collision radius for subnodes
          return 40;  // Collision radius for default nodes
        }));



      const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke-width', 1)
        .attr('stroke', '#ccc')
        .attr('opacity', 0.2);

      const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', d => {
          if (d.group === 'main') return 60;
          if (d.group === 'sub1') return 40;
          return 15;  // Default node size
        })
        .attr('fill', 'none')
        .attr('stroke', d => {
          if (d.group === 'main') return '#FFFFFF';  // Main node outline color
          return '#CCCCCC';  // Subnode and default node outline color
        })
        .attr('stroke-width', d => {
          if (d.group === 'main') return 4;  // Thicker outline for main nodes
          if (d.group === 'sub1') return 2.5;  // Medium outline for subnodes
          return 1.5;  // Thin outline for default nodes
        })
        .attr('fill', 'transparent')
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));

      const label = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .attr('dy', d => {
          if (d.group === 'main') return -45;
          if (d.group === 'sub1') return -30;
          return -10;
        })
        .attr('text-anchor', 'middle')
        .attr('font-size', d => d.group === 'main' ? '18px' : '16px')  // Larger font for main nodes
        .attr('font-weight', d => d.group === 'main' || d.group === 'sub1' ? 'bold' : 'normal')  // Bold for main and subnodes
        .attr('text-decoration', d => d.group === 'main' ? 'underline' : 'none')  // Underline for main nodes
        .text(d => d.label)
        .attr('fill', 'var(--text-color-secondary)');  // White text for all nodes

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);

        label
          .attr('x', d => d.x)
          .attr('y', d => d.y + (d.group === 'main' ? -25 : -15));
      });

      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      function handleNodeClick(event, clickedNode) {
        if (!clickedNode || !clickedNode.id) {
          console.error('Node clicked has no ID:', clickedNode);
          return;
        }

        console.log('Node clicked:', clickedNode);

        // Set all nodes and links to very low opacity
        node.attr('opacity', 0.1);
        link.attr('opacity', 0.1);

        if (clickedNode.group === 'main') {
          // Handle click for main nodes (same logic as before)
          node.filter(n => n.id === clickedNode.id)
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 5)
            .attr('opacity', 1);

          const connectedSubnodes = node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'sub1') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'sub1')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 3)
            .attr('opacity', 1);

          connectedSubnodes.each(function (d) {
            node.filter(n => links.some(l =>
              (l.source.id === d.id && l.target.id === n.id && n.group === 'default') ||
              (l.target.id === d.id && l.source.id === n.id && n.group === 'default')
            ))
              .attr('stroke', '#FFFFFF')
              .attr('stroke-width', 2)
              .attr('opacity', 1);
          });

          node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'default') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'default')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 2)
            .attr('opacity', 1);

          link.filter(l =>
            (l.source.id === clickedNode.id && (l.target.group === 'sub1' || l.target.group === 'default')) ||
            (l.target.id === clickedNode.id && (l.source.group === 'sub1' || l.source.group === 'default')) ||
            (connectedSubnodes.data().some(subnode =>
              (l.source.id === subnode.id && l.target.group === 'default') ||
              (l.target.id === subnode.id && l.source.group === 'default')))
          )
            .attr('stroke', '#FFFFFF')
            .attr('opacity', 1);
        }

        if (clickedNode.group === 'default') {
          // Handle click for default nodes
          // Highlight the clicked default node
          node.filter(n => n.id === clickedNode.id)
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 2)
            .attr('opacity', 1);

          // Highlight any main nodes connected to this default node
          node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'main') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'main')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 5)
            .attr('opacity', 1);

          // Highlight any subnodes connected to this default node
          node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'sub1') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'sub1')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 3)
            .attr('opacity', 1);

          // Highlight any default nodes connected to this default node
          const connectedDefaultNodes = node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'default') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'default')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 2)
            .attr('opacity', 1);

          // Highlight the links connecting the default node to main nodes, subnodes, and other default nodes
          link.filter(l =>
            (l.source.id === clickedNode.id && (l.target.group === 'main' || l.target.group === 'sub1' || l.target.group === 'default')) ||
            (l.target.id === clickedNode.id && (l.source.group === 'main' || l.source.group === 'sub1' || l.source.group === 'default'))
          )
            .attr('stroke', '#FFFFFF')
            .attr('opacity', 1);
        }

        if (clickedNode.group === 'sub1') {
          // Handle click for subnodes
          // Highlight the clicked subnode
          node.filter(n => n.id === clickedNode.id)
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 3)
            .attr('opacity', 1);

          // Highlight any main nodes connected to this subnode
          node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'main') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'main')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 5)
            .attr('opacity', 1);

          // Highlight any default nodes connected to this subnode
          node.filter(n => links.some(l =>
            (l.source.id === clickedNode.id && l.target.id === n.id && n.group === 'default') ||
            (l.target.id === clickedNode.id && l.source.id === n.id && n.group === 'default')
          ))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 2)
            .attr('opacity', 1);

          // Highlight the links connecting the subnode to main nodes and default nodes
          link.filter(l =>
            (l.source.id === clickedNode.id && (l.target.group === 'main' || l.target.group === 'default')) ||
            (l.target.id === clickedNode.id && (l.source.group === 'main' || l.source.group === 'default'))
          )
            .attr('stroke', '#FFFFFF')
            .attr('opacity', 1);
        }
      }

      // Ensure that the click event passes the node data:
      node.on('click', (event, d) => handleNodeClick(event, d));

      // Add an event listener to the background (SVG) to reset the graph
      d3.select(svgRef.current).on('click', function (event) {
        if (event.target.tagName === 'svg') {  // Check if the background was clicked
          resetGraph();
        }
      });

      function resetGraph() {
        // Reset all nodes and links to their default styles
        node.attr('stroke', d => {
          if (d.group === 'main') return '#FFFFFF';
          return '#CCCCCC';
        }).attr('stroke-width', d => {
          if (d.group === 'main') return 4;
          if (d.group === 'sub1') return 2.5;
          return 1.5;
        }).attr('opacity', 1);

        link.attr('stroke', '#CCCCCC').attr('opacity', 0.2);
      }

      // Ensure that the click event passes the node data:
      node.on('click', (event, d) => handleNodeClick(event, d));

      // Add an event listener to the background (SVG) to reset the graph
      d3.select(svgRef.current).on('click', function (event) {
        if (event.target.tagName === 'svg') {  // Check if the background was clicked
          resetGraph();
        }
      });


      return () => {
        simulation.stop();  // Stop the simulation before re-rendering
      };
    };

    renderGraph();  // Initial render

    // Handle window resize
    const handleResize = () => {
      renderGraph();  // Re-render the graph on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default SkillsGraph;

