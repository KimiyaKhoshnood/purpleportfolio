"use client"
import dynamic from 'next/dynamic';
import React from 'react'
const DraggableAndResizable = dynamic(
    () => import("@/Sections/DraggableAndResizable/DraggableAndResizable"),
    { ssr: false }
);
const page = () => {
    return (
        <DraggableAndResizable
            rowHeight={50}
            cols={{ lg: 12, md: 12, sm: 6, xs: 6, xxs: 2 }}
        />
    )
}

export default page