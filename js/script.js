document.getElementById('downloadBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior (if it's inside a link)

  // Define the file path to your downloadable action plan
  const fileUrl = 'assets/action-plan.pdf'; // Path to the PDF file

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = fileUrl; // Set the href to the file path
  link.download = 'Action_Plan.pdf'; // Specify the name for the downloaded file
  document.body.appendChild(link); // Append link to body to make it work in Firefox
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up by removing the link from the DOM
});