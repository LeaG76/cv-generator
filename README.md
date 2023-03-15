<p align="center">
  <h1 align="center">CV Generator</h1>
  <h4 align="center">Resume CV with PDF export</h4>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img alt="CSS" src="https://img.shields.io/badge/-CSS-0068BA?style=flat&logo=css3&logoColor=white" />
  </a>

  <a href="https://fontawesome.com/">
    <img alt="FontAwesome" src="https://img.shields.io/badge/-Font_Awesome-2186DF?style=flat&logo=fontawesome&logoColor=white" />
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
    <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-DD4D25?style=flat&logo=html5&logoColor=white" />
  </a>

  <a href="https://ekoopmans.github.io/html2pdf.js/">
    <img alt="html2pdf.js" src="https://img.shields.io/badge/-html2pdf.js-16866B?style=flat&logo=javascript&logoColor=white" />
  </a>
  
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img alt="Javascript" src="https://img.shields.io/badge/-Javascript-EFD81D?style=flat&logo=javascript&logoColor=white" /> 
  </a> 
</p>

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/leag76/cv-generator?color=%23B5CDA3&logo=github&logoColor=white" />
  <img alt="Commit activity" src="https://img.shields.io/github/commit-activity/m/leag76/cv-generator?color=%23A76844&logo=github&logoColor=white" />
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/leag76/cv-generator?color=%23C1AC95&logo=github&logoColor=white" />
</p>

## About

> The project was created by inspiring me from the <a href="https://github.com/bedimcode">bedimcode</a> project called Responsive Resume Cv Smith (project link: <a href="https://github.com/bedimcode/responsive-resume-cv-smith">responsive-resume-cv-smith</a>) and watching the associated Youtube video of Bedimcode: <a href="https://www.youtube.com/watch?v=oYjseP_Qhv4">Responsive Resume Cv Website Using HTML CSS And JavaScript | Light/Dark Theme & Export PDF</a>

## Features

- [x] Mobile screen mode
- [x] Light/dark mode toggle
- [x] Download to PDF

## Get started

> **Warning** : To carry out this project, you must be connected to a local server, more particularly for the generation in PDF and for the display of the image from the txt file. More details [below](#configuration "Go to configuration")

### Customize your resume CV

- changer palette couleur
- changer police
- changer icons Font Awesome

### Configuration

Convert your logo image to Base64 and replace this :

```html
<img src="assets/pictures/profile.png" alt="Icon picture" class="home_img">
```

by this :

```html
<img src="your_base64_url" alt="Icon picture" class="home_img">
```

## TodoList

- Fix dark mode
- Change html2pdf Version 0.8.0 -> 0.9.3