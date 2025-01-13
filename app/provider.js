"use client"
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
    <div>
      {children}
      <ConvexProvider client={convex}>{children}</ConvexProvider>;
    </div>
  )
}

export default Provider;
