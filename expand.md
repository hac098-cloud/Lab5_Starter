# Expand

## 1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections?

It is important to carefully design IDs and classes because they are shared between HTML, CSS, and JavaScript. In HTML, they identify elements, in CSS they are used for styling, and in JavaScript they are used to select and manipulate elements. Poorly named or inconsistent IDs and classes can make code harder to maintain, harder to read, and can cause conflicts. Good naming improves clarity, reusability, and makes collaboration easier.

---

## 2. What are Data attributes? Why might they be useful? How do you access them? What are the implications when it comes to microdata?

Data attributes are custom attributes in HTML that start with `data-`, such as `data-id` or `data-value`. They allow developers to store extra information directly on HTML elements.

They are useful because they provide a simple way to pass data between HTML and JavaScript without affecting the structure or style.

You can access them in JavaScript using:

```js
element.dataset.name
```

For example, `data-id` becomes `element.dataset.id`.

When it comes to microdata, data attributes can store metadata, but they are not standardized for search engines like microdata or schema.org. Overusing them for structured data may not provide SEO benefits.

---

## 3. What is a DOM fragment? Why are they powerful?

A DOM fragment, or `DocumentFragment`, is a lightweight container used to hold DOM elements temporarily before adding them to the actual document.

They are powerful because changes made inside a fragment do not immediately affect the live page. This improves performance when adding many elements because the browser can update the page once instead of many times.

---

## 4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

A Virtual DOM is a lightweight copy of the real DOM used by frameworks like React. Instead of updating the real DOM directly, changes are first made in the Virtual DOM, then the framework compares changes and updates only what is needed.

You gain more efficient updates, more predictable UI behavior, and easier state-based programming.

You lose some simplicity because there is another layer of abstraction. It can also add memory usage and framework complexity.

---

## 5. In JavaScript, why is the class attribute called className?

In JavaScript, `class` is a reserved keyword used to define classes. Because of this, DOM elements use `className` instead of `class` to access or change the HTML class attribute.

---

## 6. What is the difference between using addEventListener() and something like onClick()?

`addEventListener()` allows multiple event handlers to be attached to the same element and event. It is more flexible and is usually better for larger projects.

`onClick` is simpler, but assigning a new `onClick` function can overwrite the previous one.

The advantage of `addEventListener()` is flexibility and support for multiple listeners. The disadvantage is slightly more syntax. The advantage of `onClick` is that it is easy to understand. The disadvantage is that it is less flexible.