// Global app controller
import axios from 'axios';

async function getData() {
  const res = await axios('https://jsonplaceholder.typicode.com/albums');
  console.log(res);
}
getData();
