export function paginate(items, pageNumber, pageSize) {
  let startIndex = (pageNumber - 1) * pageSize;
  let item = [];
  for (let i = startIndex; i < startIndex + pageSize; i++) {
    if (i >= items.length) {
      break;
    }
    item.push(items[i]);
  }

  return item;
}
