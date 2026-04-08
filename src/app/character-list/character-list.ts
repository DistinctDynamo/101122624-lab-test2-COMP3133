import { Component, inject, OnInit} from '@angular/core';
import { Harrypotterapiservice } from '../shared/harrypotterapiservice';
import { catchError } from 'rxjs';
import { Character } from '../models/character';
import { CharacterDetails } from '../character-details/character-details';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  imports: [CharacterDetails, FormsModule, MatCardModule, RouterLink],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {
  private readonly HarrypotterapiService = inject(Harrypotterapiservice)

  characterList: Character[] = []
  detailShowing: boolean = false
  house:string ='All'
 
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

  get filteredCharacters(): Character[] {
    if (this.house === 'All') return this.characterList;
    return this.characterList.filter(c => c.house === this.house);
  }

}
