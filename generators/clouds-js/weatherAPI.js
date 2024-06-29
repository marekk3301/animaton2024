// Fetch the CSV file
fetch('weatherData.csv')
  .then(response => response.text()) // Get the text from the response
  .then(csvText => {
    // Split the CSV text into an array of lines
    const lines = csvText.split('\n');

    // Iterate over each line (starting from index 1 to skip the header)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim(); // Trim any extra whitespace
      if (line !== '') {
        // Split the line by semicolon assuming your CSV is semicolon-separated
        const parts = line.split(';');

        // Access each column data based on your requirement
        const datetime = parts[0];
        const windspeed = parseFloat(parts[1]);
        const winddir = parseFloat(parts[2]);
        const cloudcover = parseFloat(parts[3]);
        const weather = parseInt(parts[4]); // Convert to integer if needed

        // Perform operations with the data, for example:
        console.log(`Date: ${datetime}, Weather: ${weather}`);
      }
    }
  })
  .catch(error => {
    console.error('Error fetching or parsing CSV file:', error);
  });