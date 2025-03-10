import { HeaderComponent } from './header.component';
import { Spectator, createComponentFactory } from "@ngneat/spectator";

describe("HeaderComponent", () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent
  });

  beforeEach(() => {
    spectator = createComponent()
  })

  it("should create the component", () => {
    expect(spectator.component).toBeTruthy()
  })
})