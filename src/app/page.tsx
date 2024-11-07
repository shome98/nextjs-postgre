"use client"
import { useEffect, useState } from "react";


export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(()=>setIsClient(true),[])
  return (
    <><h1 className="mt-2 ml-16 text-3xl px-9 py-9">{isClient ? 'This is never prerendered' : 'Prerendered'}</h1></>
  );
}
