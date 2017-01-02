// If you're running on a device or in the Android simulator be sure to change
let DEV_URL = 'ws://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
  DEV_URL = ''; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  DEV_URL,
};

export default settings;
