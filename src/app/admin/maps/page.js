'use client'
import React from "react";

// components

import Maps from "./maps";

// layout for page

import DashboardLayout from "@/layouts/DashboardLayout";

export default function MapsPage() {
  return (
    <DashboardLayout children={<Maps />}>
    </DashboardLayout>
  );
}

