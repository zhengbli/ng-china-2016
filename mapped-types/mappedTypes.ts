import { Component } from '@angular/core';

interface RegisterInformation {
    firstName: string;
    lastName: string;
    age?: number;
    gender?: boolean;
    email: string;
    phone?: string;
    address?: string;
    birthday?: Date;
}
type OptionalRegisterInformation = { [K in keyof RegisterInformation]?: RegisterInformation[K] }

function validateRegisterInfo(info: OptionalRegisterInformation): info is RegisterInformation {
    return !!(info.firstName && info.lastName && info.email);
}

function registerOnServer(info: RegisterInformation) {
    // send the information to server
    // ...
}

@Component({
    template: `
    <form (submit)="onSubmit()">
        <input name="firstName" [(ngModel)]="registerInfo.firstName">
        <input name="lastName" [(ngModel)]="registerInfo.lastName">
        <input name="email" [(ngModel)]="registerInfo.email">
    </form>
    `
})
export class TestComponent {
    registerInfo: OptionalRegisterInformation;

    onSubmit() {
        // errors when used before checking
        registerOnServer(this.registerInfo);
        if (validateRegisterInfo(this.registerInfo)) {
            registerOnServer(this.registerInfo);
        }
        // errors when used before checking
        registerOnServer(this.registerInfo);
    }
}

// profiling and text explorer



