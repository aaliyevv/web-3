import React from 'react';

function HomePage() {
  const projects = [
    {
      name: 'Project 1',
      description: 'info about Project 1',
      links: [
        { url: 'http://project1website.com', text: 'Project Website' },
        { url: 'http://project1video.com', text: 'Project Video' },
      ],
    },
    {
      name: 'Project 2',
      description: 'info about Project 2',
      links: [
        { url: 'http://project2website.com', text: 'Project Website' },
        { url: 'http://project2video.com', text: 'Project Video' },
      ],
    },
  ];

  return (
    <div>
      <section>
        <h2>General Introduction</h2>
        <p>Your introduction goes here...</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;