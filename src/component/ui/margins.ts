export type margins = "xl" | "lg" | "md" | "xs";

export function createMargins(top?: margins, bottom?: margins): string {
  const names: string[] = [];

  switch (top) {
    case "xs":
      names.push("margin-top-xs");
      break;
    case "md":
      names.push("margin-top-md");
      break;
    case "lg":
      names.push("margin-top-lg");
      break;
    case "xl":
      names.push("margin-top-xl");
      break;
  }

  switch (bottom) {
    case "xs":
      names.push("margin-bottom-xs");
      break;
    case "md":
      names.push("margin-bottom-md");
      break;
    case "lg":
      names.push("margin-bottom-lg");
      break;
    case "xl":
      names.push("margin-bottom-xl");
      break;
  }

  return names.join(" ");
}
