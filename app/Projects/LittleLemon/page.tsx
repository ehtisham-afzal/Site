import { LittleLemonStack } from "../../lib/Data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="justify-between flex flex-col w-full py-12 text-start tracking-wide prose text-foreground mt-32">
      <section>
        <h1 className="py-2 tracking-wider text-foreground">
          LittleLemon
        </h1>
        <p className="flex w-full flex-wrap overflow-hidden">
          LittleLemon is a mobile-first full-stack web application that I
          developed using the MERN stack (MongoDB, Express, React, and Node.js).
          I learned how to build the front-end of this application from the
          <b> Meta Front-End Developer Professional Certificate</b> course on
          Coursera, taught by meta engineers. This e-commerce application has
          many features, such as table booking form that could store the booking
          data in a<b> MongoDB</b>
          database and use it to avoid table overbooking and a universal cart, a
          smooth shopping experience, a product showcase, and support pages. I
          created this application from scratch to demonstrate my skills and
          knowledge in front-end development.
        </p>
        <iframe className="w-full h-80" src="https://www.youtube.com/embed/6iJaz7yslUk?si=wbLCi00fFzWyf4II" />
        {/* <YouTube
        playlabel="Play the video"
        id="https://www.youtube.com/embed/6iJaz7yslUk?si=wbLCi00fFzWyf4II"
      /> */}
      </section>

      <section className="w-full my-2">
        <table className="text-left my-4 w-full">
          <thead>
            <tr>
              <th className="text-[hsl(60,9.1%,97.8%)]">Type</th>
              <th className="text-[hsl(60,9.1%,97.8%)]">Stack</th>
              <th className="text-[hsl(60,9.1%,97.8%)]">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>E Commerce</td>
              <td>
                <menu className="">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Express</li>
                  <li>React-router-dom</li>
                  <li>Redux ReduxToolkit ReduxQuerry</li>
                  <li>Vite</li>
                  <li>Auth0</li>
                  <li>Cloudinary</li>
                  <li>ShadCn `Radix ui`</li>
                  <li>React-hook-form</li>
                  <li>And more</li>
                </menu>
              </td>
              <td>
                <menu>
                  <li>
                    <a
                      className="text-white"
                      target="_blank"
                      href="https://littlelemon-sham.vercel.app"
                    >
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white"
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
      <section className="w-full">
        <Image
          width={700}
          height={500}
          alt="LilleLemon Hero section"
          className="w-full h-fit"
          src="/LettleLemonHero700px.jpg"
        />
      </section>
      <h2 className="text-[hsl(60,9.1%,97.8%)]">Project Purpose And Goal</h2>
      <p>
        The main purpose of this project is to apply the skill I just learned.
        The project has three phases. The first phase is to build the user
        interface, which allows the user to see the design and layout of the
        application. The second phase is to make the application functional,
        which enables the user to reserve a table online. The third phase is the
        most extensive and complex, as it involves refactoring the entire
        application as a full-stack e-commerce application with all the features
        that such an application requires.
      </p>
      <h2 className="text-[hsl(60,9.1%,97.8%)]">Web Stack And Explaination</h2>
      {/* <div className="w-full h-fit space-y-0 flex justify-center items-center space-x-2 flex-wrap">
        {LittleLemonStack.map((logo) => (
          <Image
            key={logo.Name}
            className="p-1 rounded-lg bg-white w-20 h-20"
            width={1}
            height={1}
            alt={logo.Name}
            src={logo.ImageURL}
          />
        ))}
      </div> */}
      <p>
        <b> React</b> is a popular and fast front-end library that helps me
        create dynamic and interactive user interfaces with ease. I use choose
        them write JSX syntax to write HTML-like code in JavaScript and leverage
        the power of hooks, components, props and state management. <br />
        <b> Express</b>is a minimalist and flexible back-end framework that runs
        on Node.js. I used it to build RESTful APIs, handle routing, middleware,
        error handling. <br />
        <b> MongoDB</b> is a scalable and flexible NoSQL database that stores
        data in JSON-like documents. I choose it to store querries and data
        efficiently and reliably. MongoDB also supports various features such as
        indexing, aggregation, transactions, sharding and replication. <br />
        <b> Redux</b> is a state management library that works well with React.
        I choose it to manage the global state of your application in a single
        source of truth. Redux helps me avoid prop drilling, maintain
        consistency, debug easily and implement complex logic with reducers,
        actions and middleware with using <i> ReduxToolkit and ReduxQuerry</i> I
        leverage the super powers of Redux. <br />
        <b> ShadCN-UI</b> is a sleek and modern UI library that provides
        ready-made components for React projects. I choose it to create
        beautiful and responsive web pages with minimal code. ShadCN-UI also
        supports theming, customization, accessibility and animations.
      </p>
      {/* <div className="w-full flex flex-wrap">
        <Image
          className="w-full h-fit"
          width={1}
          height={1}
          alt="LittleLemon mockup"
          src="/Brown Modern Visit Our Website Video Instagram Post.png"
        />
        <Image
          className="w-full h-fit"
          width={1}
          height={1}
          alt="LittleLemon mockup"
          src="/Brown Modern Visit Our Website Video Instagram Post (2).png"
        />
      </div> */}

      <h2 className="text-[hsl(60,9.1%,97.8%)]">
        Problems And Thought Process
      </h2>
      <p>
        I faced some challenges while working on this project, especially in
        terms of code organization and structure. One of the most difficult
        tasks was to create a booking form that could store the booking data in
        a MongoDB database and use it to avoid table overbooking. Another
        challenge was to implement a cart system that was managed with Redux.{" "}
        <br />I tried to make the components as reusable as possible and use
        props for minor variations.
      </p>
      {/* <div className="w-full flex flex-wrap h-fit">
        <Image
          width={1}
          height={1}
          alt="cart image"
          className="w-full h-fit"
          src="/Web capture_3-12-2023_182245_littlelemon-sham.vercel.app.jpeg"
        />
        <Image
          width={1}
          height={1}
          alt="cart image"
          className="w-full h-fit"
          src="/Web capture_3-12-2023_181458_littlelemon-sham.vercel.app.jpeg"
        />
      </div> */}
      <h2 className="text-[hsl(60,9.1%,97.8%)]">Lesson Learned</h2>
      <p>
        I have successfully built an E Commerce web app using the skill that I
        recently acquired through online courses and tutorials. This project was
        not only a way to showcase my abilities, but also a valuable opportunity
        to deepen my understanding of the skill and practice it in a real-world
        scenario. I faced some challenges and difficulties along the way, but I
        was able to overcome them with perseverance and creativity. I am proud
        of what I have accomplished and I look forward to applying my skill to
        more projects in the future.
      </p>
      <h2 className="text-[hsl(60,9.1%,97.8%)]">Other Projects</h2>
      <p>Coming Soon</p>
      <h2 className="text-[hsl(60,9.1%,97.8%)]">Lets Build Togather</h2>
      <p>
        Feel free to reach out if your looking for Developer, have a question,
        or just want to connect
        <br />
        <br />
        <a
          className="text-[hsl(60,9.1%,97.8%)]"
          href="mailto:shaminterprise@gmail.com"
        >
          Ehtisham G mail
        </a>
      </p>
    </main>
  );
};

export default page;
