import Sample from './sample.jpg';
import './sample-image.scss';

class SampleImage {
  render() {
    const img = document.createElement('img');
    img.src = Sample;
    img.alt = 'Sample';
    img.classList.add('sample-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default SampleImage;
