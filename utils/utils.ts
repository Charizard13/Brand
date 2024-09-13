import { redirect } from "next/navigation";
import { elementsIds } from "./const";

/**
 * Scrolls to the element with the specified ID.
 * @param {keyof typeof elementsIds} elementId - The ID of the element to scroll to.
 */
export const handleButtonClickById = (elementId: keyof typeof elementsIds) => {
  const element = document.getElementById(elementsIds[elementId]);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @returns This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string
): never {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
