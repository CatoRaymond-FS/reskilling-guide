document.getElementById('downloadBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Define the file path to your downloadable action plan
  const fileUrl = 'assets/action-plan.pdf'; // Adjust if needed

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'Action_Plan.pdf'; // Suggested filename
  document.body.appendChild(link); // Required for Firefox
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up
});