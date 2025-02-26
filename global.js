console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

const ARE_WE_HOME = document.documentElement.classList.contains('home');

let pages = [
  { url: '../index.html', title: 'Home' },
  { url: './projects/', title: 'Projects' },
  { url: './contact/', title: 'Contact'},
  { url: 'https://github.com/jpadsc', title:'GitHub'}
];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  if (!ARE_WE_HOME && !url.startsWith('http')) {
    url = '../' + url;
  }
  // Create link and add it to nav
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  nav.append(a);
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
  }
  if (a.host != location.host ) {
    a.target = "_blank";
  }
  
}

document.body.insertAdjacentHTML(
  'afterbegin',
  `
	<label class="color-scheme">
		Theme:
		<select>
      <option value="light dark">Automatic</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option> 
		</select>
	</label>`
);

let select = document.querySelector('select');

select.addEventListener('input', function (event) {
  localStorage.colorScheme = event.target.value;
  console.log('color scheme changed to', event.target.value);
  document.documentElement.style.setProperty('color-scheme', event.target.value);
});

if ("colorScheme" in localStorage) {
  document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
  select.value = localStorage.colorScheme;
}



// let navLinks = $$("nav a");
// let currentLink = (navLinks).find((a) => a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add('current');
