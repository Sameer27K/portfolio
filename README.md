<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>sameer khan - Portfolio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="intro">
        <h1>sameer khan</h1>
        <h2>Web Developer</h2>
        <a href="#contact" class="btn">Hire Me</a>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <img src="profile.jpg" alt="Profile Picture">
        <p>I am a web developer with experience in HTML, CSS, and JavaScript. I am passionate about creating beautiful and functional websites that meet my clients' needs. In my free time, I enjoy hiking, reading, and spending time with my family.</p>
      </section>
      <section id="portfolio">
        <h2>My Portfolio</h2>
        <ul>
          <li>
            <img src="portfolio-1.jpg" alt="Project 1">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque vitae nunc vehicula accumsan. Sed fermentum scelerisque diam, vel mollis ipsum eleifend et.</p>
            <a href="#" class="btn">View Project</a>
          </li>
          <li>
            <img src="portfolio-2.jpg" alt="Project 2">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque vitae nunc vehicula accumsan. Sed fermentum scelerisque diam, vel mollis ipsum eleifend et.</p>
            <a href="#" class="btn">View Project</a>
          </li>
          <li>
            <img src="portfolio-3.jpg" alt="Project 3">
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque vitae nunc vehicula accumsan. Sed fermentum scelerisque diam, vel mollis ipsum eleifend et.</p>
            <a href="#" class="btn">View Project</a>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email">
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; sameer khan 2023</p>
    </footer>
  </body
