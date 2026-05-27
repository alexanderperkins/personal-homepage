# Personal Homepage

My homepage with general information.

---

## Author

Alex Perkins
[Email](mailto:perkins.ale@northeastern.edu)
[GitHub](https://github.com/alexanderperkins)
[LinkedIn](https://linkedin.com/in/alexandercperkins)

---

## Class Link

[Course Name — Section Number](Web Development — CS5610)

---

## Project Objective

Implement homepage using plain HTML5, CSS3 and ES6+. Should be a front-end only static page, no backend nor any components libraries. No jQuery, and all you JS code must be in ES6 modules. 

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | My home section, featured projects, about teaser |
| About | `/pages/about.html` | Bio, skills grid, career timeline |
| Projects | `/pages/projects.html` | Full project list with category filter |

---

## Screenshot

![Homepage screenshot](./images/homepageimage.jpg)

---

## Project Structure

```
personal-homepage/
├── index.html              # Home page
├── pages/
│   ├── about.html          # About page
│   ├── projects.html       # Projects page (with JS filter)
├── css/
│   ├── reset.css           # CSS reset
│   └── style.css           # Main stylesheet (custom properties, layout, components)
├── js/
│   ├── main.js             # Entry point — imports and runs all modules
│   ├── nav.js              # Mobile nav toggle module
│   ├── scroll.js           # IntersectionObserver scroll-reveal module
│   └── filter.js           # Projects category filter module
│   └── typing.js           # Animinated typing module
├── images/
│   └── beach_profile.jpg         # SVG favicon (replace with your own)
│   └── gradution.jpg         # SVG favicon (replace with your own)
│   └── hammock.jpg       # SVG favicon (replace with your own)
│   └── profile.png         # SVG favicon (replace with your own)
├── .eslintrc.config.js     # ESLint flat config (class-required)
├── .prettierrc             # Prettier formatting config
├── .gitignore
├── package.json            # Dependencies and npm scripts
├── LICENSE                 # MIT License
└── README.md
```

---

## Instructions to Build & Run

1. Clone / update repository to github
2. Install any necessary dependencies or extensions such as live server
3. Test locally e.g. right click on html and open with live server
4. Run lint
5. Format with prettier
6. Deploy to netlify or other hosting site

---

## GenAI Tools

### Tools Used

| Tool | Model | Version |
|------|-------|---------|
| Claude | Claude Sonnet 4 | `claude-sonnet-4-20250514` |

### How It Was Used

Claude Sonnet 4 was used to build the initial HTML, CSS, and ES6 framework for this project. It was primarily used as a code-generation assistant to set up first. All output was reviewed, edited, and adapted by the student such as inclusion, sizing, and positioning of images and backgrounds, editing content for student's background, projects, and other relevant text as well as design.

### Prompts Used

**Prompt 1 — Project framework:**
> "I need you to help me create the foundation for a homepage using vanilla HTML5, CSS3 and ES6+. This should be a front-end only static page, so you shouldn't be using a backend or any components libraries. You cannot use jQuery, and all you JS code must be in ES6 modules.Some additional requirements I want from this are below: - include  information for me to edit for author, description, and icon - include at 3 html pages for introduction, about me, and projects - add buttons in footer linked for email, github, linkedin - descriptive README including sections for Author, Class Link, Project Objective, Screenshot, and Instructions to build - Uses the class eslint config file and it doesn't throw any error - use MIT license - include a package.json file listing all the dependencies of the project - CSS, JS and Images and other resources organized in different folders - Use ES6 modules Use type="module" in the package.json file, and use type="module" in any html scripts e.g.:  <script type="module" src="./js/main.js"></script> "

**Prompt 2 — AI page (Projects):**
> "Make the third page for my personal homepage called projects. The page should be clean and minimal, organize it for my list of projects so that it can be filtered by categories, and provide a button that links to my github page for each project listed."

**Prompt 3 — original JS funcionality (typing.js)**
> "Add an original JS functionality with more than 5 lines of code. Including libraries doesn't count."

### Student Modifications

- Updated or edited the following: name, introduction, background, project descriptions and categories and tags, education, skills, titles, links, icon initials, timelines, readme, htmls (i.e. index, projects, about), typing.js, .
- Screenshots or images added for to images folder and linked to htmls and css for backgrounds as well as screenshot of homepage to the README after deployment.

---

## License

This project is licensed under the [MIT License](./LICENSE).
