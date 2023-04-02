export async function fetchImagesData(searchText, page) {
  const API_KEY = '34996742-4ea6220e7b2b20fdf73389bee';
  const URL = `https://pixabay.com/api/?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
