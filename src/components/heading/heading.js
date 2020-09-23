import './heading.scss';

class Heading {
  render(pageName) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = `This is ${pageName}`;
    body.appendChild(h1);
  }
}

const yo = 132875328;

export default Heading;
