function parseImage(markdown) {
  const imgRegex = /\(\S+\)/gm;;
  const altRegex = /!\[\w+\W\w+\W?\]/gm;
  let imgUrl = markdown.match(imgRegex);
  let altText = markdown.match(altRegex);
  imgUrl = imgUrl[0].replace('(', '');
  imgUrl = imgUrl.replace(')', '');
  altText = altText[0].replace('![','');
  altText = altText.replace(']','');
  markdown = `<img src="${imgUrl}" alt="${altText}">`;

  return markdown;
}

module.exports = parseImage;