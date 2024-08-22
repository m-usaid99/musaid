import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { skillsData } from '../utils/skillsData';

const SkillsGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = window.innerWidth * 0.95;  // Use 95% of the window width
    const height = window.innerHeight * 0.85;  // Use 85% of the window height

    const nodes = skillsData.nodes.map(node => ({
      id: node.data.id,
      label: node.data.label,
      group: node.data.type || 'default',
    }));

    const links = skillsData.edges.map(edge => ({
      source: edge.data.source,
      target: edge.data.target,
    }));

    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', [0, 0, width, height].join(' '))  // Ensure the graph fits the viewBox
      .attr('preserveAspectRatio', 'xMidYMid meet');  // Keep aspect ratio centered

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-700))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.07))  // Keep the graph centered
      .force('y', d3.forceY(height / 2).strength(0.25));

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
      .attr('r', d => d.group === 'main' ? 35 : 15)
      .attr('fill', d => d.group === 'main' ? '#333' : '#666')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('dy', d => d.group === 'main' ? -20 : -15)  // Position higher for 'main' nodes
      .attr('text-anchor', 'middle')
      .attr('font-weight', d => d.group === 'main' ? 'bold' : 'normal')  // Bold text for 'main' nodes
      .text(d => d.label)
      .attr('fill', '#fff');

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
        .attr('y', d => d.y + (d.group === 'main' ? -25 : -15));  // Adjust label position based on node type
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

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default SkillsGraph;

