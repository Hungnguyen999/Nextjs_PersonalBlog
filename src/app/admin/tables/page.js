'use client'
import React from "react";

// components

import Tables from "./tables";

// layout for page
import DashboardLayout from "@/layouts/DashboardLayout";

export default function TablesPage() {
  return (
    <DashboardLayout children={<Tables />}>
    </DashboardLayout>
  );
}
