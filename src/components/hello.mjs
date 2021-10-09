const data = {
  text: 'Welcome!',
  style: {
    h1: `
      padding-bottom: 1em;
      color: #333;
      border-bottom: 2px solid #333;
    `
  }
}

const template = `
  <h1 style="${data.style.h1}">${data.text}</h1>
`

export default template
