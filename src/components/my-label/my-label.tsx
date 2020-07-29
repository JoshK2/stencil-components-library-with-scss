import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-label",
  styleUrl: "my-label.scss",
  shadow: true,
})
export class MyLabel {
  /**
   * The value of the label
   */
  @Prop() value: string;

  /**
   * The type of the label, can be primary, success, error, warning
   */
  @Prop() type: string = "primary";

  render() {
    return <div class={"label " + this.type}>{this.value}</div>;
  }
}
