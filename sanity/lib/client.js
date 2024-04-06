import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk8fClbDuWMpn6qWJaRvdyV5hk5zyS5nRfqbGWzyKlZlhIEBdldHmnokKicmZDYHBjHHJbVyzX4LnklJNBdvZavxolVjLLO6tlznox6qQxLCW55CERCTWra76EJTXjO6JcFKpa4nYMY6Mm1dIGbcitr9cnPx7k1eXQOLpIDSnaYQxjIL2ncv",
});
