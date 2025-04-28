import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App"; // Make sure path is correct

// FIRST TEST
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// SECOND TEST
test("displays an image of myself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/portrait|photo|image of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// THIRD TEST
test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

// FOURTH TEST
test("displays a paragraph with my biography", () => {
  render(<App />);
  const bio = screen.getByText(/i am/i); // Adjust regex based on actual bio
  expect(bio).toBeInTheDocument();
});

// FIFTH TEST
test("displays a link to my GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

// SIXTH TEST
test("displays a link to my LinkedIn profile", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});