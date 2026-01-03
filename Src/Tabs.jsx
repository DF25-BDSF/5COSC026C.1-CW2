import React from "react";

export default function Tabs({ tabs, activeKey, onChange }) {
  const activeContent = tabs.find(t => t.key === activeKey)?.content;

  return (
    <>
      <div className="tabs">
        {tabs.map(t => (
          <button
            key={t.key}
            className={`tab ${activeKey === t.key ? "active" : ""}`}
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeContent}
      </div>
    </>
  );
}