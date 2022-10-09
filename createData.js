const fs = require('fs');
const axios = require('axios').default;
require('dotenv').config();

(async () => {
  try {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const apiKeyHeaderOption = {
      headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
    };

    const tags = await axios.get(`${url}/tags`, apiKeyHeaderOption);
    const categories = await axios.get(`${url}/category`, apiKeyHeaderOption);

    const jsonData = {
      tags: tags.data.contents,
      categories: categories.data.contents,
    };

    fs.writeFileSync('./public/sidebar.json', JSON.stringify(jsonData));
  } catch (e) {
    console.error(e);
  }
})();
