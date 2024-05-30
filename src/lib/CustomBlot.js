import Quill from 'quill';

const Image = Quill.import('formats/image');

class CustomImageBlot extends Image {
  static create(value) {
    const node = super.create(value.src);
    node.setAttribute('src', value.src);
    node.setAttribute('width', value.width || '300'); // Default width to 300 if not provided
    return node;
  }

  static value(node) {
    return {
      src: node.getAttribute('src'),
      width: node.getAttribute('width'),
    };
  }
}

CustomImageBlot.blotName = 'image';
CustomImageBlot.tagName = 'img';
Quill.register(CustomImageBlot, true);

export default CustomImageBlot;