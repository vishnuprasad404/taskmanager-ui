import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent",()=>{
    let spectator: Spectator<DashboardComponent>;
    const createComponent = createComponentFactory({
        component:DashboardComponent
    });

    beforeEach(()=>{
        spectator=createComponent()
    })

    it("should create the component",()=>{
        expect(spectator.component).toBeTruthy()
    })
})