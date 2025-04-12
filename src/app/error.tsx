"use client";
export default function Error() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const theme = localStorage.getItem("theme") || "light";
            document.documentElement.classList.add(theme);
            window.onload = function () {
              document.getElementById("back-button").addEventListener("click", function () {
                history.back();
              });
            };
          `,
        }}
      />
      <style>{`
    html, body {
      margin: 0;
      padding: 0;
      font-family: system-ui, sans-serif;
    }

    html.light {
      background-color: #ffffff;
      color: #1a202c;
    }

    html.dark {
      background-color: #1a202c;
      color: #f7fafc;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: inherit;
    }

    #back-button {
      background-color: #319795;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    #back-button:hover {
      background-color: #2c7a7b;
    }
  `}</style>

      <main>
        <h1>500 - Error</h1>
        <p>Unknown error</p>
        <button id="back-button">Back</button>
      </main>
    </>

  );
}