import {Component, Input, ChangeDetectionStrategy} from '@angular/core'
import {StoreModel} from "../../models/StoreModel";

@Component({
    selector: 'td[simpleGridDataImage]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        i {
            cursor: pointer;
        }
    `],
    template: `
        <i (click)="onClick($event)" class="fa {{value}}"></i>
        <!--<i (click)="onClick($event)" style="color: {{color}}; font-size: 1.5em" class="fa {{value}}"></i>-->
         <!--<img src="{{ value }}" style="width: 40px; height: 40px"/>-->
    `
})
export class SimpleGridDataImage {
    private value;
    storeModel:StoreModel;

    @Input()
    set item(i_storeModel:StoreModel) {
        this.storeModel = i_storeModel
    }

    @Input()
    set field(i_field) {
        this.value = i_field;
    }
    
    @Input()
    color;

    onClick(event){
        // alert(event)
    }

}

