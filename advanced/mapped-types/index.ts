import { Component } from '@angular/core';

interface Person {
    firstName: string;
    lastName: string;
    email: string;
    age?: number;
    gender?: boolean;
    birthday?: Date;
}

function validate(info: Person): boolean {
    return !!(info.firstName && info.lastName && info.email);
}

// sends the person information to the server.
function register(info: Person) { }

@Component({
    template: `
    <form (submit)="onSubmit()">
        <input name="firstName" [(ngModel)]="person.firstName">
        <input name="lastName" [(ngModel)]="person.lastName">
        <input name="email" [(ngModel)]="person.email">
        <button> Submit </button>
    </form>
    `
})
export class PersonInputComponent {
    person: Person;

    onSubmit() {
        if (validate(this.person)) {
            register(this.person);
        }
    }
}