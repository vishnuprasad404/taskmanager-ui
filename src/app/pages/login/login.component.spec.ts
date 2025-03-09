import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { LoginComponent } from "./login.component";

describe("LoginComponent",()=>{
    let spectator: Spectator<LoginComponent>;
    const createComponent = createComponentFactory({
        component:LoginComponent
    });

    beforeEach(()=>{
        spectator=createComponent()
    })

    it("should create the component",()=>{
        expect(spectator.component).toBeTruthy()
    })
})