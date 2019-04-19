module.exports = {
  theme: {
    content: {
      width: '800px',
    },
    palette: {
      primary: 'red',
    },
    spacing: {
      unit: '8px',
      units: (x = 1) => `${x * 8}px`,
    }
  }
}
