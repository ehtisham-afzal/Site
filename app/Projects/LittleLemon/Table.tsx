import React from "react";

const Table = () => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Stack</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E Commerce</td>
            <td>
              <menu>
                <li>JavaScript</li>
                <li>React</li>
                <li>TailwindCSS</li>
                <li>Express</li>
                <li>React-router-dom</li>
                <li>Redux ReduxToolkit ReduxQuerry</li>
                <li>Vite</li>
                <li>Auth0</li>
                <li>Cloudinary</li>
                <li>ShadCn &lsquo;Radix ui&lsquo;</li>
                <li>React-hook-form</li>
                <li>And more</li>
              </menu>
            </td>
            <td>
              <menu>
                <li>
                  <a target="_blank" href="https://littlelemon-sham.vercel.app">
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/EHTISHAM-Afzal/LittleLemon"
                  >
                    Github Repo
                  </a>
                </li>
              </menu>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
