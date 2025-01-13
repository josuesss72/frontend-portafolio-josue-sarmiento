export const { STRAPI_TOKEN, NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function query(url: string, preventCache = false) {
  // Construcción de la URL con parámetros
  const queryParams = new URLSearchParams({
    ...(preventCache && { t: Date.now().toString() }), // Agrega timestamp si preventCache es true
  });

  const fullUrl = `${NEXT_PUBLIC_STRAPI_HOST}/api/${url}&${queryParams}`;
  return await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data from Strapi.");
    });
}
