import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { RegisterComponent } from "./register.component";

describe("RegisterComponent",()=>{
    let spectator: Spectator<RegisterComponent>;
    const createComponent = createComponentFactory({
        component:RegisterComponent
    });

    beforeEach(()=>{
        spectator=createComponent()
    })

    it("should create the component",()=>{
        expect(spectator.component).toBeTruthy()
    })
})