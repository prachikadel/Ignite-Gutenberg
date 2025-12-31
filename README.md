# Ignite-Gutenberg
Assessment Task

Gutenberg Project – Responsive Web App
A responsive web application built using HTML, CSS, and JavaScript that allows users to explore books from the Project Gutenberg collection.
The app is designed mobile‑first, follows the provided UI style guide, and supports dark mode, responsive layouts, and infinite scrolling.

Features
Responsive Design
Mobile‑first approach
Optimized layouts for mobile, tablet, and desktop
Adaptive grids for book listings

Modern UI
Matches the provided Gutenberg UI designs
Soft shadows, gradients, and smooth hover animations
Typography based on Montserrat
Clean, accessible color palette

Dark Mode
Toggle between light and dark themes
Smooth theme transition animations
Dark mode respects the original design theme

Search & Browse
Browse books by genre
Search books by title or author
Search works across all books within the selected genre
Results fetched directly from the API (not filtered locally)

Infinite Scrolling
Automatically loads more books as the user scrolls
Uses API pagination (next URL)

Book Viewing
Opens books in the following priority:
HTML
PDF
TXT
Displays an alert if no viewable format is available

Tech Stack
HTML shown (Structure)
CSS3 (Responsive design, animations, dark mode)
Vanilla JavaScript (API handling, search, infinite scroll)
Gutendex API (Project Gutenberg books)

Project Structure
.
├── index.html      # Home / Genre selection page
├── books.html      # Books listing page
├── style.css       # All styles (responsive + dark mode)
├── script.js       # Application logic (API, search, scroll)
└── README.md       # Project documentation

API Used
Gutendex API
Base URL:
http://skunkworks.ignitesol.com:8000/books

Query Parameters Used
topic – filter books by genre
search – search by title or author
mime_type=image – ensures only books with covers are shown

Responsive Behavior
Mobile (≤ 768px)
Single‑column genre list
2‑column book grid
Compact headers and spacing
Desktop (> 768px)
Two‑column genre layout
5‑column book grid
Centered content with increased spacing

Dark Mode
Dark mode can be toggled using the theme button
Implemented using CSS variables
No impact on functionality or API behavior

How to Run the Project
Clone or download the repository
Open index.html in any modern browser
Select a genre to explore books
Use the search bar to filter books
Scroll to load more results
No build tools or dependencies required.

Assessment Notes
All functional requirements are preserved
UI matches the provided designs
No external libraries or frameworks used
Code is structured, readable, and scalable
Focused on frontend best practices

Author
Built as part of a Frontend Developer Assessment
by Prachi Kadel

