import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mt-24 text-start">
        <h1 className="font-bold">
          1. When should you use context API?
        </h1>
        <p className="ml-4 font-semibold">
        Context API is useful when you have data that needs to be shared across multiple components and you want to avoid prop drilling. However, it's important to use it judiciously and avoid overusing it as it can lead to unnecessary complexity in your code.
        </p>

        <h1 className="font-bold mt-4">2. What is a custom hook?</h1>
        <p className="ml-4 font-semibold">
        custom hooks are a powerful tool in React that allows you to create reusable stateful logic and improve the organization and maintainability of your code.
        </p>

        <h1 className="font-bold mt-4">
          3. What is useRef?
        </h1>
        <p className="ml-4 font-semibold">
        useRef is a powerful hook in React that allows you to hold a reference to a DOM element or to persist a value between renders. It's important to note that useRef does not trigger a re-render when the value of the ref changes, so it's not meant to be used for state management or for triggering re-renders.
        </p>

        <h1 className="font-bold mt-4">4. What is useMemo?</h1>
        <p className="ml-4 font-semibold">
        useMemo is a powerful hook in React that allows you to memoize a value and optimize the performance of your application by preventing unnecessary re-renders. However, it's important to use useMemo judiciously and only when necessary, as it can add unnecessary complexity to your code if overused.
        </p>
      </div>
    </div>
  );
};

export default Blog;
