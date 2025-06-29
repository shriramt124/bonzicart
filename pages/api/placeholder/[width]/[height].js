
// Simple placeholder image API
export default function handler(req, res) {
  const { width, height } = req.query;
  
  // Set Content-Type
  res.setHeader('Content-Type', 'image/svg+xml');
  
  // Generate a placeholder SVG image
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect x="45%" y="45%" width="10%" height="10%" fill="#ff7700"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#333" text-anchor="middle" dominant-baseline="middle">
        ${width}×${height}
      </text>
    </svg>
  `;
  
  res.status(200).send(svg);
}
