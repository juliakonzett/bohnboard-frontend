export async function fetchData() {
  try {
    const response = await fetch(
      "https://bohnapi.digit-one.com/data?start_time=2024-03-15%2015:00:00&end_time=2024-03-16%2020:00:00&step_size=hour"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("all done");
  }
}
