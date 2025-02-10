import Header from '@/Components/Header/Header';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          <div className='bg-[#F6F3FC] lg:sticky lg:top-0'><Header/></div>
          {children}
      </div>
    );
  }