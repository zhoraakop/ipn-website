/* export const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuth = () => {
  return localStorage.getItem("isAuth") === "true";
};

export const logout = () => {
  localStorage.removeItem("isAuth");
  window.dispatchEvent(new Event("authChange"));
}; */