import React from "react";
import Term from ".";
import renderer from "react-test-renderer";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const LONG_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas imperdiet tincidunt. Maecenas porttitor, mi dictum malesuada ornare, augue augue rutrum leo, eu gravida magna tellus fringilla diam. Phasellus sagittis viverra gravida. Sed vitae justo vitae lacus hendrerit cursus interdum sed massa. Nulla viverra enim non faucibus pretium. Quisque vel turpis nec purus aliquam scelerisque iaculis interdum sapien. Praesent dictum diam ex, in placerat erat sollicitudin eu. Proin aliquam massa eget gravida tempus. Quisque rutrum dolor ac ultricies pretium. Maecenas ornare turpis id justo aliquam, eget finibus sapien maximus. Aenean interdum augue vel orci sagittis pulvinar non sed erat. Nam vel rhoncus massa. Fusce egestas, ligula non volutpat rhoncus, velit mauris dictum ipsum, sit amet elementum leo lacus ac ante. Mauris convallis lectus eget dui bibendum auctor. Quisque erat neque, interdum ac sapien nec, viverra placerat mauris.
Aenean rhoncus dignissim fermentum. Suspendisse vitae orci at arcu tempor ornare. Donec imperdiet elementum neque, ut semper augue pretium eget. Quisque pretium sodales velit nec ullamcorper. Sed vehicula tortor in felis finibus lobortis. Pellentesque vel semper elit, pretium porta turpis. Sed cursus dolor libero, nec ornare metus sollicitudin id. Ut vestibulum libero dui, nec tincidunt metus mollis eu. Sed sed massa ex. Nam nisl dolor, porta sit amet massa nec, facilisis blandit lorem. Mauris tristique interdum sollicitudin. Aliquam at purus ut elit consequat volutpat. Suspendisse aliquam suscipit magna at tincidunt. Donec convallis quis libero sit amet aliquet. Mauris ullamcorper ante sit amet lectus suscipit pulvinar quis eu lacus.
Nullam nec nunc dui. Quisque libero lorem, vulputate sed diam non, sodales consectetur sem. Sed mollis libero sem, ac laoreet enim porttitor ut. Cras a nisl nisl. Suspendisse laoreet dui ac varius aliquam. Nam dolor risus, faucibus id tortor et, ornare ultrices urna. Quisque fermentum id eros a tincidunt. Vestibulum cursus est non nisl iaculis laoreet. In aliquam metus imperdiet dapibus posuere. Proin sollicitudin enim nec lobortis feugiat. Fusce consectetur nunc ac diam tristique sodales.
Aliquam varius sit amet dolor sed placerat. Curabitur imperdiet ullamcorper aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum tortor sed lacus maximus gravida. Mauris imperdiet elit vitae hendrerit elementum. Morbi imperdiet, erat congue gravida faucibus, elit purus tincidunt nulla, a mollis magna ipsum at ipsum. In hac habitasse platea dictumst. Donec varius blandit maximus. Nunc gravida tincidunt euismod.
Vivamus accumsan lectus non diam scelerisque sollicitudin. Maecenas gravida nibh in lectus ullamcorper bibendum. Integer suscipit sit amet leo a sodales. Phasellus convallis ut mauris et accumsan. Nulla convallis, felis eu ultrices consequat, tellus lorem tincidunt massa, vitae dignissim nunc ipsum et tortor. Integer gravida accumsan ex vel fringilla. Phasellus gravida ex nec lorem congue, ac tempor sapien iaculis. Nunc turpis lectus, molestie id porttitor in, vulputate ac tortor. Etiam elementum id quam eu porttitor. Donec at mi nulla. Donec est urna, dictum rhoncus ipsum et, ornare ullamcorper eros. Duis pellentesque, mi vel facilisis tempus, tortor elit suscipit velit, vel sollicitudin risus elit id purus. Suspendisse potenti. Sed accumsan ipsum id nisi bibendum, sit amet tincidunt nunc sollicitudin.`;

describe("Term", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Term term="term" definition="definition" onToggleExpand={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders long text", () => {
      const tree = renderer.create(<Term term="long term" definition={LONG_TEXT} onToggleExpand={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("opening", () => {
    it("icon changes on click", async () => {
      render(<Term term="term" definition="definition" onToggleExpand={() => {}} />);
      expect(screen.getByLabelText("down-arrow")).toBeDefined();

      // ACT
      await userEvent.click(screen.getByLabelText("down-arrow"));
      expect(screen.getByLabelText("up-arrow")).toBeDefined();
    });
  });
});
