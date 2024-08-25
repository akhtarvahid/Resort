import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mocking react-medium-image-zoom
jest.mock("react-medium-image-zoom", () => ({ children }) => (
  <div>{children}</div>
));

describe("ZoomedImage", () => {
  it("renders without crashing", () => {
    const root = ReactDOM.createRoot(document.createElement("div"));
    root.render(<App />);
    root.unmount();
  });

  it("should match the 5+5=10", () => {
    expect(5 + 5).toBe(11);
  });
});
