import { useLoaderData, useOutletContext } from "@remix-run/react";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";

import type { SupabaseClient } from "@supabase/auth-helpers-remix";
import type { Database } from "../../database.types";

type Post = Database["public"]["Tables"]["posts"]["Row"];

import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = new Response();
  const supabase = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
    }
  );

  const { data } = await supabase.from("posts").select();

  return json({ serverPosts: data ?? [] }, { headers: response.headers });
};

export default function Index() {
  const { serverPosts } = useLoaderData<typeof loader>();
  const [posts, setPosts] = useState(serverPosts);
  const { supabase } = useOutletContext<{
    supabase: SupabaseClient<Database>;
  }>();

  useEffect(() => {
    setPosts(serverPosts);
  }, [serverPosts]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload) => setPosts([...posts, payload.new as Post])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, posts, setPosts]);

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
