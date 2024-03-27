"use client";

const { usePathname } = require("next/navigation");
const { useEffect } = require("react");

const { IStaticMethods } = require("preline/preline");
// Ensure that IStaticMethods is defined properly

if (typeof window !== 'undefined') {
  window.HSStaticMethods = IStaticMethods;
}

function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}

module.exports = PrelineScript;
