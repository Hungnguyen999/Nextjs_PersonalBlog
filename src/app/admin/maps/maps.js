'use client'
import React from "react";

// components

import MapExample from "@/components/Maps/MapExample.js";

export default function MapsPage() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample lat={"40.748817"} lng={"-73.985428"} />
          </div>
        </div>
      </div>
    </>
  );
}
