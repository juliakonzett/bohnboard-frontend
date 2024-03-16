export async function fetchData() {
  try {
    const response = await fetch("https://bohnapi.digit-one.com/data/latest");

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("all done");
  }
}
