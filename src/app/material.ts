import {MatChipsModule, MatButtonModule, MatGridListModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatChipsModule,
        MatButtonModule,
        MatGridListModule
    ],
    exports: [
        MatChipsModule,
        MatButtonModule,
        MatGridListModule
    ]
})

export class MaterialModule{};