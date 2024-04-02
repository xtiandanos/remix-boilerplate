import { redirect, useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "database.types";
import { useEffect } from "react";

export default function Login() {
  const { supabase } = useOutletContext<{
    supabase: SupabaseClient<Database>;
  }>();

  const handleEmailLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "support.staff.1@everesteffect.com",
      password: "pi8CdqkXBLr9T7Q72jEi",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
