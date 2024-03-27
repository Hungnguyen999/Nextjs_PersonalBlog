'use client'
import React from "react";

// components
import Settings from "./settings";
import DashboardLayout from "@/layouts/DashboardLayout";

// layout for page

export default function SettingsPage() {
  return (
    <DashboardLayout children={<Settings />}>

    </DashboardLayout>
  );
}

