"use client";

import { useRouter } from 'next/navigation';
import { Button, Heading } from "@rijkshuisstijl-community/components-react";

export default function Nav() {
  const router = useRouter();

  return (
    <header>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff"
        }}
      >
        {/* Left side: Title / Logo */}
        <Heading level={3}>DigiGrid</Heading>

        {/* Right side: Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={() => router.push("/")}>Subsidies</Button>
          <Button onClick={() => router.push("/")}>Contact</Button>
        </div>
      </nav>
    </header>
  );
}
