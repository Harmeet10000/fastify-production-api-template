import axios from 'axios';

async function generateTraffic() {
  const baseUrl = 'http://localhost:3000/api';
  
  while (true) {
    try {
      await axios.get(`${baseUrl}/jobs`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error generating traffic:', error);
    }
  }
}

generateTraffic();