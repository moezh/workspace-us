import type { APIRoute } from "astro";
import { sql } from "bun";

export const GET: APIRoute = async () => {
  const res = await sql`
  SELECT NOW();
`;
  return new Response(JSON.stringify(res[0]));
};
