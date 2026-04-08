import { Component, Input, OnInit, inject } from '@angular/core';
import { Harrypotterapiservice } from '../shared/harrypotterapiservice';
import { Character } from '../models/character';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-character-details',
  imports: [JsonPipe, RouterLink],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetails implements OnInit {

private readonly HarrypotterapiService = inject(Harrypotterapiservice)

character!:Character

constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadCharacter(id!)
  }

  loadCharacter(id:string){
     this.HarrypotterapiService.getCharacterById(id).
        pipe(
          catchError( err => {
            console.log(err)
            return of (null)
          })
        ).subscribe(character => {
          if(character){
            this.character=character
          }
        })
  }
}
