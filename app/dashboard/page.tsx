"use client";

import { auth } from "../../components/lib/firebase";
import FormComponent from "./form-component";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function DashboardPage() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <FormComponent />;
  }

  return (
    <div>
      {error && <p>Error signing in: {error.message}</p>}
      <h2>Welcome to the Admin Dashboard</h2>
      <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
    </div>
  );
}
