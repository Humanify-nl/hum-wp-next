const BASE_URL = process.env.WP_REST_URL;
const MENU_URL = process.env.WP_REST_MENU_URL;

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + '/posts?acf_format=standard');
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getPages() {
  const pagesRes = await fetch(BASE_URL + '/pages?acf_format=standard');
  const pages = await pagesRes.json();
  return pages;
}

export async function getPage(slug) {
  const pages = await getPages();
  const pageArray = pages.filter((page) => page.slug == slug);
  const page = pageArray.length > 0 ? pageArray[0] : null;
  return page;
}

export async function getPageByUri(uri) {
  const pages = await getPages();
  const page = pages.filter((page) => page.next_path == uri);
  //const page = pageArray.length > 0 ? pageArray[0] : null;
  return page;
}

export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + '/events?_embed');
  const events = await eventsRes.json();
  return events;
}

export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'events':
      elements = await getEvents();
      break;
    case 'pages':
      elements = await getPages();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}

export async function getMenu(menuName) {
  const menuRes = await fetch(MENU_URL + '/' + menuName );
  const menu = await menuRes.json();
  return menu;
}


// WP request with app password
export async function getUsers() {
  const user = process.env.WP_APP_USER;
  const password = process.env.WP_APP_PASSWORD;
  const getUsersRes = await fetch(BASE_URL + '/users?context=edit', {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Authorization": "Basic " + btoa(user + ':' + password),
      "Content-Type": "application/json",
    },
  });
  const getUsers = await getUsersRes.json();
  return getUsers;
}

/*
export async function getPages() {
  const pageRes = await fetch(BASE_URL + '/pages?');
  const pages = await pageRes.json();
  return pages;
}
*/
/*
export async function getPageBySlug(uri) {

  let uri = 

  let query = '_fields=link,id';

  const pageDataRes = await fetch(BASE_URL + '/pages?' + query);
  const pageData = await pageDataRes.json();
  const page = pageData;

  return {
    page,
  };

}
*/