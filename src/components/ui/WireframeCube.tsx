
import React, { useEffect, useRef } from 'react';

const WireframeCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Cube parameters
    const cubeSize = Math.min(window.innerWidth, window.innerHeight) * 0.3;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Define the 8 corners of a cube
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1]
    ];
    
    // Define the 12 edges of the cube
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];
    
    // Animation parameters
    let angle = 0;
    let scale = 1;
    let scaleFactor = 0.001;
    let lastTime = 0;
    
    // Animation function
    const animate = (time: number) => {
      // Calculate delta time for smoother animations
      const deltaTime = lastTime ? (time - lastTime) / 16 : 1;
      lastTime = time;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotation angles
      angle += 0.002 * deltaTime;
      
      // Update scale
      scale += scaleFactor * deltaTime;
      if (scale > 1.2 || scale < 0.8) scaleFactor = -scaleFactor;
      
      // Rotation matrices
      const cosX = Math.cos(angle * 0.7);
      const sinX = Math.sin(angle * 0.7);
      const cosY = Math.cos(angle * 0.5);
      const sinY = Math.sin(angle * 0.5);
      const cosZ = Math.cos(angle * 0.3);
      const sinZ = Math.sin(angle * 0.3);
      
      // Project 3D points to 2D
      const projectedVertices = vertices.map(vertex => {
        let [x, y, z] = vertex;
        
        // Apply scale
        x *= cubeSize * scale;
        y *= cubeSize * scale;
        z *= cubeSize * scale;
        
        // Rotate around X axis
        const ry1 = y * cosX - z * sinX;
        const rz1 = y * sinX + z * cosX;
        
        // Rotate around Y axis
        const rx2 = x * cosY + rz1 * sinY;
        const rz2 = -x * sinY + rz1 * cosY;
        
        // Rotate around Z axis
        const rx3 = rx2 * cosZ - ry1 * sinZ;
        const ry3 = rx2 * sinZ + ry1 * cosZ;
        
        // Convert to screen coordinates
        return [centerX + rx3, centerY + ry3];
      });
      
      // Draw edges
      ctx.strokeStyle = 'rgba(125, 125, 125, 0.3)';
      ctx.lineWidth = 1;
      
      edges.forEach(edge => {
        const [v1, v2] = edge;
        ctx.beginPath();
        ctx.moveTo(projectedVertices[v1][0], projectedVertices[v1][1]);
        ctx.lineTo(projectedVertices[v2][0], projectedVertices[v2][1]);
        ctx.stroke();
      });
      
      // Draw vertices
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      projectedVertices.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-[-2] pointer-events-none" />;
};

export default WireframeCube;
