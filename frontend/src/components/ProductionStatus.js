import React, { useState, useEffect } from 'react';

function ProductionStatus() {
  const [status, setStatus] = useState({
    currentOrder: '',
    itemsProduced: 0,
    targetProduction: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus({
        currentOrder: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        itemsProduced: Math.floor(Math.random() * 1000),
        targetProduction: 1000,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>Production Status</h3>
      <p>Current Order: {status.currentOrder}</p>
      <p>Items Produced: {status.itemsProduced}</p>
      <p>Target Production: {status.targetProduction}</p>
      <progress value={status.itemsProduced} max={status.targetProduction}></progress>
    </div>
  );
}

export default ProductionStatus;