export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const content = document.createElement('div');
    content.className = 'card-with-button';

    let button;
    const img = document.createElement('div');
    const cardText = document.createElement('div');
    [...row.children].forEach((div, index) => {
      switch (index) {
        case 0:
          if (!div.textContent) {
            break;
          }
          img.className = 'card-image';
          img.append(div);
          content.append(img);
          break;
        case 1:
          if (!div.textContent) {
            break;
          }
          cardText.className = 'card-text';
          cardText.append(div);
          content.append(cardText);
          break;
        case 2:
          if (!div.textContent) {
            break;
          }
          button = document.createElement('button');
          button.className = 'card-button';
          button.textContent = div.textContent;
          content.append(button);
          break;
        case 3:
          if (!button || !div.querySelector('p')) {
            break;
          }
          button.addEventListener('click', () => {
            const url = div.querySelector('p').innerHTML;
            window.location.href = url;
          });
          break;
        default:
          break;
      }
    });
    if (content.children.length > 0) {
      li.append(content);
      ul.append(li);
    }
  });
  block.textContent = '';
  block.append(ul);
  // const card = document.createElement('div');
  // card.className = 'card-with-button';
  // card.append(image);

  // // Create button
  // const defaultButton = document.createElement('button');
  // defaultButton.className = 'button';
  // defaultButton.textContent = button.textContent;
  // defaultButton.href = button.href;

  // card.append(defaultButton);
  // block.textContent = '';
  // block.append(card);
}
