export function createNoop() {
  return {
    setContext(ctx: string) {
      console.log("setting context", ctx);
    },
  };
}
