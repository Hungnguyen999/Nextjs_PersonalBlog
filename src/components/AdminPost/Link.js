import React from "react";
import NextLink from "next/link";

export default function Link(props) {
  return <NextLink className="text-blue-600 dark:text-blue-500 hover:underline" {...props} />;
}
