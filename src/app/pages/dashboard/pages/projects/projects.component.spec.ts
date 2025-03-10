import { ProjectsComponent } from './projects.component';
import { Spectator, createComponentFactory } from "@ngneat/spectator";

describe("ProjectsComponent",()=>{
    let spectator: Spectator<ProjectsComponent>;
    const createComponent = createComponentFactory({
        component:ProjectsComponent
    });

    beforeEach(()=>{
        spectator=createComponent()
    })

    it("should create the component",()=>{
        expect(spectator.component).toBeTruthy()
    })
})