import { Component, Input } from '@angular/core';
import { Character } from '../models/character';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [JsonPipe],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetails {
  @Input() character!:Character
}
