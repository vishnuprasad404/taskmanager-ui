import { SidebarComponent } from './sidebar.component';
import { Spectator, createComponentFactory } from "@ngneat/spectator";

describe("SidebarComponent", () => {
  let spectator: Spectator<SidebarComponent>;
  const createComponent = createComponentFactory({
    component: SidebarComponent
  });

  beforeEach(() => {
    spectator = createComponent()
  })

  it("should create the component", () => {
    expect(spectator.component).toBeTruthy()
  })
})