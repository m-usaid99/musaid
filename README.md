## TO DO

This is a todo for me to keep track of tasks that I am currently doing. I will be replacing this later with a more appropriate README.

### **Summary of the Interactive Skills Graph Idea:**

We decided to create an interactive skills graph for your About page, where:

1. **Introduction Text**: The page begins with an introduction at the top.
2. **Scroll-Triggered Animation**: As the user scrolls down, the skills graph zooms in.
3. **Big Nodes Zoom In**: Major skill clusters (e.g., "Frontend," "Backend") zoom in first.
4. **Smaller Nodes Appear**: Following the big nodes, smaller nodes (e.g., "React," "Node.js") either fade in or zoom in.
5. **Connection Lines**: After all nodes appear, connection lines gradually draw in to illustrate relationships between skills.

### **Detailed To-Do List for Implementing the Graph:**

1. **Design & Planning:**

   - Finalize the visual design and layout of the graph.
   - Determine node sizes, colors, and connections for each skill.

2. **Set Up Cytoscape.js:**

   - Install and configure Cytoscape.js in your React project.
   - Define the data structure for nodes and edges (skills and their connections).

3. **Implement Scroll-Triggered Animation:**

   - Use a scroll library like ScrollMagic or a custom solution to trigger animations on scroll.
   - Ensure smooth transitions and responsiveness.

4. **Zoom in Big Nodes:**

   - Implement the zoom-in effect for the large nodes as the user scrolls to the graph.
   - Make sure the zoom-in feels natural and engages the user.

5. **Fade/Zoom in Smaller Nodes:**

   - After the big nodes, animate the smaller nodes to appear around their respective clusters.
   - Use a fade-in or zoom-in effect to make the transition smooth.

6. **Draw Connection Lines:**

   - Once all nodes are in place, animate the connection lines between related skills.
   - Use a gradual draw effect to emphasize the relationships.

7. **Testing & Optimization:**

   - Test the graph across different devices and browsers to ensure smooth performance.
   - Optimize animations for performance, ensuring they don’t affect page load times.

8. **Final Integration:**
   - Integrate the graph fully into your About page, ensuring consistency with the site’s overall design.
   - Implement any additional UI tweaks or enhancements as needed.

This to-do list should guide you through the implementation of the skills graph, ensuring it’s dynamic, interactive, and consistent with the rest of your site’s design.
