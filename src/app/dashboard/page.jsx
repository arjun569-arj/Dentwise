import React from "react";
import { SignOutButton } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <SignOutButton>
        <button>Sign Out</button>
      </SignOutButton>
    </div>
  );
}

export default Dashboard;
