import { Routes } from '@angular/router';
import { CharacterList } from './character-list/character-list';
import { CharacterDetails } from './character-details/character-details';

export const routes: Routes = [
    {path: 'details/:id', title:'details', component:CharacterDetails},
    {path: '', title:'Home', component:CharacterList}
];
