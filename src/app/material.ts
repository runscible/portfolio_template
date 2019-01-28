import {MatChipsModule, 
        MatButtonModule,
        MatGridListModule,
        MatMenuModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatChipsModule,
        MatButtonModule,
        MatGridListModule,
        MatMenuModule
    ],
    exports: [
        MatChipsModule,
        MatButtonModule,
        MatGridListModule,
        MatMenuModule
    ]
})

export class MaterialModule{};