import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const productsDir = path.join(process.cwd(), 'public/products');

  const products = fs.readdirSync(productsDir).map((folder) => {
    const folderPath = path.join(productsDir, folder);
    const images = fs.readdirSync(folderPath).map((file) => `/products/${folder}/${file}`);
    
    return {
      title: folder,
      images,
    };
  });

  res.status(200).json(products);
}
