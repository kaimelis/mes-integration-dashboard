import React, { useState, useEffect } from 'react';

function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    oee: 0,
    availability: 0,
    performance: 0,
    quality: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        oee: (Math.random() * 100).toFixed(2),
        availability: (Math.random() * 100).toFixed(2),
        performance: (Math.random() * 100).toFixed(2),
        quality: (Math.random() * 100).toFixed(2),
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>Performance Metrics</h3>
      <p>OEE: {metrics.oee}%</p>
      <p>Availability: {metrics.availability}%</p>
      <p>Performance: {metrics.performance}%</p>
      <p>Quality: {metrics.quality}%</p>
    </div>
  );
}

export default PerformanceMetrics;