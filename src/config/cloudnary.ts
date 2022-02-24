import * as dotenv from "dotenv";
import { v2 } from 'cloudinary';

dotenv.config();

v2.config({
  cloud_name: 'duxzvouuw',
  api_key: '968827896984917',
  api_secret: 'CZkyiB7dde3X15LPP5fsr5X1ESs'
})

export default v2;