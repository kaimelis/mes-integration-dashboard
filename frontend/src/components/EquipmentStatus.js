import React, { useState, useEffect } from 'react';

function EquipmentStatus() {
  const [equipmentStatus, setEquipmentStatus] = useState({
    machine1: 'Operational',
    machine2: 'Operational',
    machine3: 'Operational',
    machine4: 'Operational',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const statuses = ['Operational', 'Maintenance', 'Offline'];
      setEquipmentStatus({
        machine1: statuses[Math.floor(Math.random() * statuses.length)],
        machine2: statuses[Math.floor(Math.random() * statuses.length)],
        machine3: statuses[Math.floor(Math.random() * statuses.length)],
        machine4: statuses[Math.floor(Math.random() * statuses.length)],
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>Equipment Status</h3>
      {Object.entries(equipmentStatus).map(([machine, status]) => (
        <p key={machine}>
          {machine}: <span style={{ color: status === 'Operational' ? 'green' : status === 'Maintenance' ? 'orange' : 'red' }}>{status}</span>
        </p>
      ))}
    </div>
  );
}

export default EquipmentStatus;