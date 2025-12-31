const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const booksContainer = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");

let nextUrl = null;
let loading = false;
let currentSearch = "";

/* ---------- URL BUILDER ---------- */
function buildBaseUrl() {
  let url =
    `http://skunkworks.ignitesol.com:8000/books?topic=${category}&mime_type=image`;

  if (currentSearch.trim() !== "") {
    url += `&search=${encodeURIComponent(currentSearch)}`;
  }

  return url;
}

/* ---------- FETCH BOOKS ---------- */
async function fetchBooks(url) {
  if (loading || !url) return;
  loading = true;

  try {
    const response = await fetch(url);
    const data = await response.json();

    nextUrl = data.next;
    renderBooks(data.results);
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  loading = false;
}

/* ---------- RENDER ---------- */
function renderBooks(books) {
  books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const img = document.createElement("img");
    img.src = book.formats["image/jpeg"];
    img.alt = book.title;

    const title = document.createElement("p");
    title.textContent = book.title;

    bookDiv.appendChild(img);
    bookDiv.appendChild(title);

    bookDiv.onclick = () => openBook(book.formats);

    booksContainer.appendChild(bookDiv);
  });
}

/* ---------- OPEN BOOK ---------- */
function openBook(formats) {
  if (formats["text/html"]) {
    window.open(formats["text/html"]);
  } else if (formats["application/pdf"]) {
    window.open(formats["application/pdf"]);
  } else if (formats["text/plain"]) {
    window.open(formats["text/plain"]);
  } else {
    alert("No viewable version available");
  }
}

/* ---------- INFINITE SCROLL ---------- */
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 200
  ) {
    fetchBooks(nextUrl);
  }
});

/* ---------- SEARCH ---------- */
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  booksContainer.innerHTML = "";
  nextUrl = null;
  fetchBooks(buildBaseUrl());
});

/* ---------- INITIAL LOAD ---------- */
fetchBooks(buildBaseUrl());
