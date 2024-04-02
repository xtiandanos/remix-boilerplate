import { useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "database.types";
import loginStyle from '~/components/Login/login.css';

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
    <div className="form-container">
      <form method="post" id="login-form">
          <div>
              <label htmlFor="title">Email Login</label>
              <input
              type="text"
              id="email"
              name="email"
              required
              />
          </div>
          <button>Login</button>
          
      </form>
      </div>
      <div className="content-normal">
        <button onClick={handleEmailLogin}>Email Login</button>
        <button onClick={handleLogout} className="logout">Logout</button>
      </div>
    </>
    
  );
}

export function links() {
  return [{ rel: 'stylesheet', href:loginStyle }];
}
