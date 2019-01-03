import { NgModule }                             from '@angular/core';
import { CdkTableModule }                       from '@angular/cdk/table';
import { 
  MatAutocompleteModule, 
  MatButtonModule, 
  MatButtonToggleModule, 
  MatPaginatorModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule, 
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatGridListModule, 
  MatIconModule, 
  MatInputModule,
  MatListModule,
  MatMenuModule, 
  MatProgressBarModule, 
  MatProgressSpinnerModule,
  MatRadioModule, 
  MatSelectModule, 
  MatSidenavModule, 
  MatSliderModule, 
  MatSortModule,
  MatSlideToggleModule, 
  MatSnackBarModule, 
  MatTableModule, 
  MatTabsModule, 
  MatToolbarModule,
  MatTooltipModule, 
  MatFormFieldModule, 
  MatExpansionModule, 
  MatStepperModule,
  MatTreeModule,
  
}                                                 from '@angular/material';

import { CustomErrorStateMatcherDirective } from './error-state-matcher';
import { MatListOptionFixDirective } from './mat-list-option-fix';
import { NgrxMatSelectViewAdapter } from './mat-select-view-adapter';


@NgModule({
  imports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatNativeDateModule,
    MatTreeModule,
    
    
  ],
  declarations: [
    NgrxMatSelectViewAdapter,
   // CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    MatNativeDateModule,
    NgrxMatSelectViewAdapter,
   // CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  
})
export class MaterialModule { }
