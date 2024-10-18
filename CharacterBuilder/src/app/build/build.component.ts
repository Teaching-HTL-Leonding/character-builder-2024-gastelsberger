import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ApiService} from '../api.service';

export type ImageData = {
  "eye": string,
  "hasHammer": boolean,
  "mouth": string,
  "rightHand": string,
  "hasTail": boolean
}

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './build.component.html',
  styleUrl: './build.component.css'
})

export class BuildComponent {
  apiService : ApiService = inject(ApiService);
  form: FormGroup;
  imageUrl : any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      eye: ['noEye'],
      hasHammer: [false],
      mouth: ['noMouth'], // Change to a single mouth field
      rightHand: ['noHand'], // Add rightHand to the form
      hasTail: [false],
    });
  }

  async onSubmit() {
    const imageData: ImageData = {
      eye: this.form.value.eye,
      hasHammer: this.form.value.hasHammer,
      mouth: this.form.value.mouth,
      rightHand: this.form.value.rightHand,
      hasTail: this.form.value.hasTail,
    };

    this.imageUrl = await this.apiService.createImage(imageData);
  }
}
