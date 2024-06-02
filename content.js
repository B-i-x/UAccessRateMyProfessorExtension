async function fetchProfessorData() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.ratemyprofessors.com/search/professors/1402?q=test';
  
    try {
      const response = await fetch(proxyUrl + targetUrl);
      if (!response.ok) {
        alert('Error fetching data: ' + response.statusText);
        return;
      }
      const data = await response.text();
      alert('Response from Rate My Professors: ' + data);
    } catch (error) {
      alert('Failed to fetch data: ' + error.message);
    }
  }
  
  fetchProfessorData();
  