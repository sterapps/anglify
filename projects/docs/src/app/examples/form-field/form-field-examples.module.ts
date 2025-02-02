import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '../../../../../anglify/src/modules/form-field/form-field.module';
import DisabledComponent from './disabled/disabled.component';
import WithoutLabelComponent from './without-label/without-label.component';
import PlaceholderComponent from './placeholder/placeholder.component';
import PersistentPlaceholderComponent from './persistent-placeholder/persistent-placeholder.component';
import HintComponent from './hint/hint.component';
import LongHintAndLongLabelComponent from './long-hint-and-long-label/long-hint-and-long-label.component';
import { ReadonlyComponent } from './readonly/readonly.component';
import { IconsComponent } from './icons/icons.component';
import { CounterComponent } from './counter/counter.component';
import { ManualErrorComponent } from './manual-error/manual-error.component';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerErrorHandlingComponent } from './server-error-handling/server-error-handling.component';
import { NativeInputValidationComponent } from './native-input-validation/native-input-validation.component';
import { PrefixAndSuffixComponent } from './prefix-and-suffix/prefix-and-suffix.component';
import { LabelSlotComponent } from './label-slot/label-slot.component';
import { IconModule } from '../../../../../anglify/src/modules/icon/icon.module';
import { DenseComponent } from './dense/dense.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DisabledValidationComponent } from './disabled-validation/disabled-validation.component';

@NgModule({
  imports: [CommonModule, FormFieldModule, ReactiveFormsModule, IconModule],
  declarations: [
    DisabledComponent,
    PlaceholderComponent,
    WithoutLabelComponent,
    PersistentPlaceholderComponent,
    HintComponent,
    LongHintAndLongLabelComponent,
    ReadonlyComponent,
    IconsComponent,
    CounterComponent,
    ManualErrorComponent,
    ReactiveFormsValidationComponent,
    ServerErrorHandlingComponent,
    NativeInputValidationComponent,
    PrefixAndSuffixComponent,
    LabelSlotComponent,
    DenseComponent,
    TextareaComponent,
    DisabledValidationComponent,
  ],
})
export class FormFieldExamplesModule {}
