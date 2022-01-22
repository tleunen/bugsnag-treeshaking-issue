import Bugsnag, { Config } from "@bugsnag/js";

export function createClient(config: Config) {
  console.log("Creating Bugsnag client");
  const client = Bugsnag.createClient(config);

  return {
    setContext(ctx: string) {
      console.log("Bugsnag context", ctx);
      client.setContext(ctx);
    },
  };
}
