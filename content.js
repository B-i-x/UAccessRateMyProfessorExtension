async function fetchProfessorData() {
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = encodeURIComponent('https://www.ratemyprofessors.com/search/professors/1402?q=test');

  try {
    const response = await fetch(proxyUrl + targetUrl);
    if (!response.ok) {
      alert('Error fetching data: ' + response.statusText);
      return;
    }
    const data = await response.json();
    alert('Response from Rate My Professors: ' + data.contents);
  } catch (error) {
    alert('Failed to fetch data: ' + error.message);
  }
}

fetchProfessorData();
