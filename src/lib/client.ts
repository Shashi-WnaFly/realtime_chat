import { treaty } from "@elysia/eden";
import type { App } from "../app/api/[[...slugs]]/route";

const baseUrl =
  typeof window === "undefined" ? "http://localhost:3000" : window.location.origin;

export const client = treaty<App>(baseUrl).api;
