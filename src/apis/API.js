import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDhhNzZlZWZlNDQyNjA4MzE3NGZjMzIiLCJpYXQiOjE1NzQyMDQ5NDd9.m1cBfXWGtBsHnxCbPQs5ns_ZkgP1NKY1WTNOM96DJrE';

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${token}` }
});
