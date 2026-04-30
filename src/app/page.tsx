import { SignUpButton, SignOutButton, Show } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Show when="signed-in">
        <SignOutButton>Sign Out</SignOutButton>
      </Show>

      <Show when="signed-out">
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </Show>
    </div>
  );
}
