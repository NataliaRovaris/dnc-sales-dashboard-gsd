import { highlightsConverter } from "@/utils/highlightTextConverter";

describe("highlightTextConverter", () => {
  it("should return the correct text for alert", () => {
    expect(highlightsConverter("alert")).toBe("* Meta longe de ser batida");
  });
  it("should return the correct text for alert", () => {
    expect(highlightsConverter("success")).toBe(
      "* A meta do mês foi batida! Parabéns!"
    );
  });
  it("should return the correct text for alert", () => {
    expect(highlightsConverter("warning")).toBe("* Falta pouco, vamos lá!");
  });
  it("should return the correct text for alert", () => {
    expect(highlightsConverter("default")).toBe("* Sem dados no momento");
  });
});
