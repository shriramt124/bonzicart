
export default function handler(req, res) {
  const { width, height } = req.query;
  
  // Generate a random color from a professional palette
  const colors = [
    '#F56565', '#ED8936', '#ECC94B', '#48BB78', '#38B2AC', 
    '#4299E1', '#667EEA', '#9F7AEA', '#ED64A6', '#718096'
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const lighterColor = lightenColor(randomColor, 30);
  
  // Generate a pattern for more visually appealing placeholders
  const patterns = [
    'circles', 'diagonal-stripes', 'dots', 'crosshatch', 'zigzag'
  ];
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  
  // Define SVG pattern definitions
  let patternDef = '';
  let patternBackground = '';
  
  switch(pattern) {
    case 'circles':
      patternDef = `
        <pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="5" fill="${lighterColor}" />
        </pattern>
      `;
      patternBackground = 'url(#pattern)';
      break;
    case 'diagonal-stripes':
      patternDef = `
        <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="${lighterColor}" stroke-width="2" />
        </pattern>
      `;
      patternBackground = 'url(#pattern)';
      break;
    case 'dots':
      patternDef = `
        <pattern id="pattern" width="15" height="15" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.5" fill="${lighterColor}" />
          <circle cx="12" cy="12" r="1.5" fill="${lighterColor}" />
        </pattern>
      `;
      patternBackground = 'url(#pattern)';
      break;
    case 'crosshatch':
      patternDef = `
        <pattern id="pattern" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M0,0 L15,15 M15,0 L0,15" stroke="${lighterColor}" stroke-width="1"/>
        </pattern>
      `;
      patternBackground = 'url(#pattern)';
      break;
    case 'zigzag':
      patternDef = `
        <pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="${lighterColor}" />
        </pattern>
      `;
      patternBackground = 'url(#pattern)';
      break;
    default:
      patternBackground = lighterColor;
  }
  
  // Create an SVG with random product silhouette
  const productIcons = [
    // Box/package icon
    `<rect x="${width*0.3}" y="${height*0.3}" width="${width*0.4}" height="${height*0.4}" fill="white" stroke="#333" stroke-width="2" />
     <line x1="${width*0.3}" y1="${height*0.3}" x2="${width*0.7}" y2="${height*0.3}" stroke="#333" stroke-width="2" />
     <path d="M${width*0.3},${height*0.3} L${width*0.5},${height*0.2} L${width*0.7},${height*0.3}" fill="none" stroke="#333" stroke-width="2" />`,
    
    // Cup/mug icon
    `<path d="M${width*0.35},${height*0.35} 
              L${width*0.35},${height*0.65} 
              Q${width*0.35},${height*0.7} ${width*0.4},${height*0.7} 
              L${width*0.55},${height*0.7} 
              Q${width*0.6},${height*0.7} ${width*0.6},${height*0.65} 
              L${width*0.6},${height*0.35} Z" fill="white" stroke="#333" stroke-width="2" />
     <path d="M${width*0.6},${height*0.45} 
              Q${width*0.7},${height*0.45} ${width*0.7},${height*0.5} 
              Q${width*0.7},${height*0.55} ${width*0.6},${height*0.55}" fill="none" stroke="#333" stroke-width="2" />`,
    
    // Camera icon
    `<rect x="${width*0.3}" y="${height*0.4}" width="${width*0.4}" height="${height*0.25}" rx="5" fill="white" stroke="#333" stroke-width="2" />
     <circle cx="${width*0.5}" cy="${height*0.525}" r="${width*0.1}" fill="none" stroke="#333" stroke-width="2" />
     <rect x="${width*0.4}" y="${height*0.35}" width="${width*0.2}" height="${height*0.05}" fill="white" stroke="#333" stroke-width="2" />`,
    
    // Headphones icon
    `<circle cx="${width*0.4}" cy="${height*0.6}" r="${width*0.05}" fill="white" stroke="#333" stroke-width="2" />
     <circle cx="${width*0.6}" cy="${height*0.6}" r="${width*0.05}" fill="white" stroke="#333" stroke-width="2" />
     <path d="M${width*0.4},${height*0.55} 
              C${width*0.4},${height*0.45} ${width*0.6},${height*0.45} ${width*0.6},${height*0.55}" fill="none" stroke="#333" stroke-width="2" />
     <line x1="${width*0.4}" y1="${height*0.55}" x2="${width*0.4}" y2="${height*0.65}" stroke="#333" stroke-width="2" />
     <line x1="${width*0.6}" y1="${height*0.55}" x2="${width*0.6}" y2="${height*0.65}" stroke="#333" stroke-width="2" />`,
    
    // T-shirt icon
    `<path d="M${width*0.35},${height*0.4} 
              L${width*0.45},${height*0.35} 
              L${width*0.55},${height*0.35} 
              L${width*0.65},${height*0.4} 
              L${width*0.65},${height*0.65} 
              L${width*0.35},${height*0.65} Z" fill="white" stroke="#333" stroke-width="2" />
     <path d="M${width*0.45},${height*0.35} 
              C${width*0.45},${height*0.4} ${width*0.55},${height*0.4} ${width*0.55},${height*0.35}" fill="none" stroke="#333" stroke-width="2" />`,
  ];
  
  const randomIcon = productIcons[Math.floor(Math.random() * productIcons.length)];
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${patternDef}
      </defs>
      <rect width="${width}" height="${height}" fill="${randomColor}" />
      <rect width="${width}" height="${height}" fill="${patternBackground}" />
      ${randomIcon}
      <text x="${width/2}" y="${height/2 + 60}" font-family="Arial" font-size="12" fill="white" text-anchor="middle">${width} × ${height}</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}

// Helper function to lighten a color
function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)}`;
}
