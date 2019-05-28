import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export class BaseFormComponent {

    public registerForm: FormGroup;
    public submitted = false;
    public isEditar: boolean;

    constructor() { }

    public canDeactivateMessage(): boolean | Observable<boolean> {
        return true;
    }

    public bindFields(model: object, group: FormGroup): void {
        const keys: string[] = Object.keys(model);
        keys.forEach(prop => {
            const control = group.get(prop);
            if (control) {
                model[prop] = control.value;
            }
        });
    }

    get form() {
        return this.registerForm.controls;
    }
}
