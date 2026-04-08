import { Component, inject, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { Harrypotterapiservice } from '../shared/harrypotterapiservice';
import { catchError, finalize } from 'rxjs';
import { Character } from '../models/character';
import { CharacterDetails } from '../character-details/character-details';

@Component({
  selector: 'app-character-list',
  imports: [CharacterDetails],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {
  private readonly HarrypotterapiService = inject(Harrypotterapiservice)

  characterList: Character[] = []
  detailShowing: boolean = false
 
  ngOnInit(): void {
    this.loadCharacters()
  }

  loadCharacters(){
    this.HarrypotterapiService.getCharacters().
    pipe(
      catchError( err =>{
        console.log(err)
        return []
      })
    ).subscribe(characters =>{
      this.characterList=characters
    })
  }

  toggleDetailShowing():void{
    this.detailShowing = !this.detailShowing
  }
}
