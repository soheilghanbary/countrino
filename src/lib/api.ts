export async function getCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return await res.json();
}
