import { useOutletContext, Form, useNavigation } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "database.types";
import loginStyle from '~/components/Login/login.css';

export default function Login() {
  const { supabase } = useOutletContext<{
    supabase: SupabaseClient<Database>;
  }>();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

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
      <Form method="post" id="login-form">
          <div>
              <label htmlFor="email">Email</label>
              <input
              type="text"
              id="email"
              name="email"
              required
              />
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input
              type="password"
              id="password"
              name="password"
              required
              />
          </div>
          <button disabled={isSubmitting}>{isSubmitting ? 'Logging In' : 'Login'}</button>  
      </Form>
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
