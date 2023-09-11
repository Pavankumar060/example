// Function to save an array with a timestamp
export function saveCart(key, arr) {
  const data = {
    array: arr,
    timestamp: new Date().getTime(), // Store the current timestamp
  };
  localStorage.setItem(key, JSON.stringify(data));
}

// Function to retrieve the array and check validity
export function getCart(key) {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    const data = JSON.parse(storedData);
    const timestamp = data.timestamp;
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    // Check if the data is still valid (less than 7 days old)
    if (new Date().getTime() - timestamp <= sevenDaysInMilliseconds) {
      return data.array; // Data is valid, return the array
    } else {
      // Data has expired, remove it from localStorage
      localStorage.removeItem(key);
    }
  }

  return null; // Data not found or expired
}
