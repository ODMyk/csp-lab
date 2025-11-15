export function interrupt(): never {
  throw new Error("User interrupted");
}
