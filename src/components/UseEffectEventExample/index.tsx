import React, { useState, useEffect, useCallback } from "react";

// Note: useEffectEvent is experimental and may not be available in the stable React version
// This is a polyfill/demonstration of the concept
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useEffectEvent<T extends (...args: any[]) => any>(fn: T): T {
  const ref = React.useRef<T>();
  ref.current = fn;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useCallback((...args: any[]) => {
    return ref.current!(...args);
  }, []) as T;
}

const UseEffectEventExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [logs, setLogs] = useState<Array<{ id: string; message: string }>>([]);

  // Regular function that we want to call in useEffect
  const logAction = (action: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = `${timestamp}: ${action} (count: ${count}, name: ${name})`;
    const logEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message,
    };
    setLogs((prev) => [...prev, logEntry]);
    console.log(message);
  };

  // Using useEffectEvent - this function won't cause useEffect to re-run
  // when count or name changes, but will always use the latest values
  const onTimer = useEffectEvent(() => {
    logAction("Timer tick");
  });

  // useEffect with timer that runs every 3 seconds
  useEffect(() => {
    console.log("Setting up timer...");
    const interval = setInterval(() => {
      onTimer(); // This uses the latest count and name values
    }, 3000);

    return () => {
      console.log("Cleaning up timer...");
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - timer setup only once!

  // For comparison: regular useEffect that would re-run on every count/name change
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     logAction('Timer tick (regular)');
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [count, name]); // Would recreate timer on every change!

  const clearLogs = () => setLogs([]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>useEffectEvent Hook Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Controls</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <label>Count:</label>
          <button onClick={() => setCount((c) => c - 1)}>-</button>
          <span style={{ margin: "0 10px", fontWeight: "bold" }}>{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <button
          onClick={() => logAction("Manual action")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007ACC",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Log Manual Action
        </button>

        <button
          onClick={clearLogs}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Clear Logs
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Key Benefits of useEffectEvent:</h3>
        <ul style={{ textAlign: "left" }}>
          <li>✅ Timer setup only once (check console)</li>
          <li>✅ Always uses latest count and name values</li>
          <li>✅ No unnecessary effect re-runs</li>
          <li>✅ Cleaner dependency arrays</li>
        </ul>
      </div>

      <div>
        <h3>Activity Log:</h3>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "4px",
            padding: "10px",
            maxHeight: "300px",
            overflowY: "auto",
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        >
          {logs.length === 0 ? (
            <div style={{ color: "#6c757d", fontStyle: "italic" }}>
              No logs yet. Wait for timer or click "Log Manual Action"
            </div>
          ) : (
            logs.map((log) => (
              <div key={log.id} style={{ marginBottom: "2px" }}>
                {log.message}
              </div>
            ))
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeaa7",
          borderRadius: "4px",
        }}
      >
        <h4>💡 What's happening:</h4>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          The timer logs every 3 seconds using <code>useEffectEvent</code>. Even
          though the effect has an empty dependency array, the timer callback
          always sees the latest values of <code>count</code> and{" "}
          <code>name</code>.
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          Without <code>useEffectEvent</code>, you'd need to include{" "}
          <code>count</code> and <code>name</code>
          in the dependency array, causing the timer to be recreated on every
          change.
        </p>
      </div>
    </div>
  );
};

export default UseEffectEventExample;
