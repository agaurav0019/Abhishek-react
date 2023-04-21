import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import RdsInput from "./rds-input";

describe("RdsInput", () => {
  it("renders input element with placeholder", () => {
    const onChange = jest.fn();
    render(
      <RdsInput placeholder="Enter your name" value="" onChange={onChange} />
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("calls onChange function when input value changes", () => {
    const onChange = jest.fn();
    render(<RdsInput placeholder="Enter your name" onChange={onChange} />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "John Doe" },
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("toggles password visibility on eye icon click", () => {
    const onChange = jest.fn();
    render(
      <RdsInput
        label="Password"
        id="password"
        inputType="password"
        onChange={onChange}
      />
    );
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const eyeIcon = screen.getByRole("img");
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("text");
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("password");
  });

  it("input disabled", () => {
    const onChange = jest.fn();
    render(<RdsInput onChange={onChange} isDisabled={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("read Only", () => {
    const onChange = jest.fn();
    render(<RdsInput onChange={onChange} readonly={true} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.readOnly).toBeTruthy();
  });
});
