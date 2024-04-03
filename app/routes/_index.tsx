import { redirect} from "@remix-run/react";
import Login from "~/components/Login";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData);
  return redirect('/dashboard');
}

export default function LoginPage() {
  return (
    <div className="mt-10">
      <Login />
    </div>
  );
}


