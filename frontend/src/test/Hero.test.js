import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("hero_image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});

// src/test/Hero.test.js

// ... (existing imports)

describe("Hero Component", () => {
  test("renders the sign-up button", () => {
    // Correctly render the component that contains the button.
    // Assuming the button is a part of the Hero component.
    render(<Hero />);

    // The rest of your test code remains the same.
    const signUpButton = screen.getByRole("button", {
      name: /Sign up for free/i,
    });

    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveTextContent("Sign up for free");
  });
});