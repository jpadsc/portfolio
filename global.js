console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let currentLink = ($$("nav a")).find((a) => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add('current');
