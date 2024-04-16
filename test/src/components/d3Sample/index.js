import React, { useEffect } from 'react';
import * as d3 from 'd3';

const NetworkGraph = () => {
  const nodes = [
    {
      id: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      details: 'Node Details: blr-hsr-172.24.30.138-830-ocnos-csar',
    },
    {
      id: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      details: 'Node Details: blr-hsr-172.24.30.148-830-ocnos-csar',
    },
    {
      id: 'blr-hsr-172.24.30.146-830-ocnos-csar',
      details: 'Node Details: blr-hsr-172.24.30.146-830-ocnos-csar',
    },
    {
      id: 'blr-hsr-172.24.30.146-831-ocnos-csar',
      details: 'Node Details: blr-hsr-172.24.30.146-831-ocnos-csar',
    },
    {
      id: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      details: 'Node Details:blr-hsr-172.24.30.146-832-ocnos-csar',
    },
  ];

  const connections = [
    {
      source: 'blr-hsr-172.24.30.146-831-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '3.4.4.1',
      remoteIntefaceAddress: '3.4.4.2',
      localInterfaceName: 'xe3',
      remoteInterfaceName: 'xe8',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h34m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '3.4.4.1',
      remoteIntefaceAddress: '3.4.4.2',
      localInterfaceName: 'xe3',
      remoteInterfaceName: 'xe8',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h34m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-831-ocnos-csar',
      target: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      localInterFaceAddress: '3.4.4.1',
      remoteIntefaceAddress: '3.4.4.2',
      localInterfaceName: 'xe3',
      remoteInterfaceName: 'xe8',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h34m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '3.4.4.1',
      remoteIntefaceAddress: '3.4.4.2',
      localInterfaceName: 'xe1',
      remoteInterfaceName: 'xe7',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h34m',
      overlap: 2,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '3.4.4.1',
      remoteIntefaceAddress: '3.4.4.2',
      localInterfaceName: 'xe3',
      remoteInterfaceName: 'xe8',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h34m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge2',
      remoteInterfaceName: 'ge2',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 4,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge2',
      remoteInterfaceName: 'ge2',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-831-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge2',
      remoteInterfaceName: 'ge2',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-831-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge5',
      remoteInterfaceName: 'ge6',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 4,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge2',
      remoteInterfaceName: 'ge2',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 4,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      target: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      localInterFaceAddress: '2.2.2.1',
      remoteIntefaceAddress: '2.2.2.2',
      localInterfaceName: 'ge3',
      remoteInterfaceName: 'ge4',
      remoteIdentifier: '8.8.8.8',
      upTime: '1d04h46m',
      overlap: 5,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '4.4.4.2',
      remoteIntefaceAddress: '4.4.4.1',
      localInterfaceName: 'ge1',
      remoteInterfaceName: 'ge1',
      remoteIdentifier: '9.9.9.9',
      upTime: '1d04h33m',
      overlap: 3,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '4.4.4.2',
      remoteIntefaceAddress: '4.4.4.1',
      localInterfaceName: 'ge5',
      remoteInterfaceName: 'ge6',
      remoteIdentifier: '9.9.9.9',
      upTime: '1d04h33m',
      overlap: 4,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '4.4.4.2',
      remoteIntefaceAddress: '4.4.4.1',
      localInterfaceName: 'ge7',
      remoteInterfaceName: 'ge6',
      remoteIdentifier: '9.9.9.9',
      upTime: '1d04h33m',
      overlap: 5,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.138-830-ocnos-csar',
      localInterFaceAddress: '4.4.4.2',
      remoteIntefaceAddress: '4.4.4.1',
      localInterfaceName: 'ge7',
      remoteInterfaceName: 'ge6',
      remoteIdentifier: '9.9.9.9',
      upTime: '1d04h33m',
      overlap: 6,
      hasMultipleConnections: true,
    },
    {
      source: 'blr-hsr-172.24.30.148-830-ocnos-csar',
      target: 'blr-hsr-172.24.30.146-832-ocnos-csar',
      localInterFaceAddress: '4.4.4.2',
      remoteIntefaceAddress: '4.4.4.1',
      localInterfaceName: 'ge7',
      remoteInterfaceName: 'ge6',
      remoteIdentifier: '9.9.9.9',
      upTime: '1d04h33m',
      overlap: 5,
      hasMultipleConnections: true,
    },
  ];

  useEffect(() => {
    const width = 800;
    const height = 600;
    d3.select('#graph-container').html('');
    const svg = d3
      .select('#graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const graph = {
      nodes: nodes.map((node) => ({ id: node.id, details: node.details })),
      links: connections.map((conn) => ({
        source: nodes.findIndex((node) => node.id === conn.source),
        target: nodes.findIndex((node) => node.id === conn.target),
        localInterface: conn.localInterfaceName,
        remoteInterface: conn.remoteInterfaceName,
        overlap: conn.overlap || 0,
        hasMultipleConnections: conn.hasMultipleConnections || false,
      })),
    };

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => d.index)
          .distance(300)
      )
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const linkGroup = svg.append('g').attr('class', 'links');
    const dotGroup = svg.append('g').attr('class', 'dots');
    const dotGroup1 = svg.append('g').attr('class', 'dots');
    const link = linkGroup
      .selectAll('path')
      .data(graph.links)
      .enter()
      .append('path')
      .style('stroke', (d) => color(d.source))
      .style('fill', 'none')
      .attr('stroke-width', 2);

    link
      .append('title')
      .text(
        (d) =>
          `Link Details: Local: ${d.localInterface}, Remote: ${d.remoteInterface}`
      );

    const handler = d3.drag();
    const dragstarted = (event, d) => {
      event.sourceEvent.stopPropagation();
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    };
    const dragged = (event, d) => {
      d.fx = event.x;
      d.fy = event.y;
      d.fixed = true;
    };
    const dragended = (event, d) => {
      if (!event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    };

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter()
      .append('circle')
      .attr('r', 15)
      .attr('fill', 'grey')
      .call(
        handler
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    node.append('title').text((d) => d.details);

    const dotRadius = 2.5;

    const dots = dotGroup
      .selectAll('.dot')
      .data(graph.links)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', dotRadius)
      .style('fill', 'red')
      .append('title')
      .text((d) => `Dot Details: Node: ${nodes[d.source].id}, Local: ${d.localInterface}, Remote: ${d.remoteInterface}`);
    const dots1 = dotGroup1
      .selectAll('.dot')
      .data(graph.links)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', dotRadius)
      .style('fill', 'red');
    // ... (your existing code)

const ticked = () => {
  link.attr('d', (d) => {
    if (d.hasMultipleConnections) {
      const curveSharpness = d.overlap * 30;
      const sourceX = d.source.x;
      const sourceY = d.source.y;
      const targetX = d.target.x;
      const targetY = d.target.y;
      const midX = (sourceX + targetX) / 2;
      const midY = (sourceY + targetY) / 2;
      const dx = targetX - sourceX;
      const dy = targetY - sourceY;
      const normalLength = Math.sqrt(dx * dx + dy * dy);
      const normalX = dx / normalLength;
      const normalY = dy / normalLength;
      const curveX = midX + curveSharpness * normalY;
      const curveY = midY - curveSharpness * normalX;

      return `M${sourceX},${sourceY} Q${curveX},${curveY} ${targetX},${targetY}`;
    } else {
      // For straight links, update dot positions
      return `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`;
    }
  });

  const dotDistance = 0.5; // Adjust this value to set the distance between dots

  // Update dot positions for both dots and dots1
  dots
    .attr('cx', (d, i) => {
      if (d.hasMultipleConnections) {
        const length = link.nodes()[i].getTotalLength();
        const t = (d.overlap / 20); // Use t parameter to get the point along the curve
        const point = link.nodes()[i].getPointAtLength(t * length);
        return point.x + dotDistance * Math.cos(Math.atan2(point.y - d.target.y, point.x - d.target.x));
      } else {
        const ratio = 0.8; // Place dot at the middle for straight lines
        return d.source.x + (d.target.x - d.source.x) * ratio;
      }
    })
    .attr('cy', (d, i) => {
      if (d.hasMultipleConnections) {
        const length = link.nodes()[i].getTotalLength();
        const t = (d.overlap / 20); // Use t parameter to get the point along the curve
        const point = link.nodes()[i].getPointAtLength(t * length);
        return point.y + dotDistance * Math.sin(Math.atan2(point.y - d.target.y, point.x - d.target.x));
      } else {
        const ratio = 0.8; // Place dot at the middle for straight lines
        return d.source.y + (d.target.y - d.source.y) * ratio;
      }
    });

  dots1
    .attr('cx', (d, i) => {
      if (d.hasMultipleConnections) {
        const length = link.nodes()[i].getTotalLength();
        const t = ((d.overlap + 1) / 22); // Use t parameter to get the point along the curve
        const point = link.nodes()[i].getPointAtLength((1 - t) * length); // Use (1 - t) to get the other end
        return point.x + dotDistance * Math.cos(Math.atan2(point.y - d.source.y, point.x - d.source.x));
      } else {
        const ratio = 0.8; // Place dot at the middle for straight lines
        return d.target.x + (d.source.x - d.target.x) * ratio;
      }
    })
    .attr('cy', (d, i) => {
      if (d.hasMultipleConnections) {
        const length = link.nodes()[i].getTotalLength();
        const t = ((d.overlap + 1) / 22); // Use t parameter to get the point along the curve
        const point = link.nodes()[i].getPointAtLength((1 - t) * length); // Use (1 - t) to get the other end
        return point.y + dotDistance * Math.sin(Math.atan2(point.y - d.source.y, point.x - d.source.x));
      } else {
        const ratio = 0.8; // Place dot at the middle for straight lines
        return d.target.y + (d.source.y - d.target.y) * ratio;
      }
    });

  node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
};
    simulation.nodes(graph.nodes).on('tick', ticked);

    simulation.force('link').links(graph.links);
  }, [nodes, connections]);

  return (
    <div id="graph-container">
      {/* Render any additional components, such as a legend or information panel */}
    </div>
  );
};

export default NetworkGraph;
