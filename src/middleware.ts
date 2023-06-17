export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/profile"],
  matcher: ["/((?!register|api|login).*)"],
  // Esto garantiza que cualquier ruta que no sea para los directorios de registro , inicio de sesión y api estará protegida.
};
