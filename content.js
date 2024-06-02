async function fetchProfessorData() {
    const response = await fetch('https://www.ratemyprofessors.com/search/professors/1402?q=test');
    if (!response.ok) {
      alert('Error fetching data: ' + response.statusText);
      return;
    }
    const data = await response.text();
    alert('Response from Rate My Professors: ' + data);
}
  
fetchProfessorData();
  