import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Forms {
  constructor(
    public readonly myFormBuilder: FormBuilder
  ) {
  }

  /**
   * Создает и возвращает FormGroup для отображения героя 
   * 
   * @returns FormGroup для отображения героя
   * с полями power, ability, level, nameHero
   */
  public profileForm(): FormGroup {
    return this.myFormBuilder.group({
      power: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      ability: new FormControl(''),
      level: new FormControl('', [Validators.pattern(/[0-9]/)]),
      nameHero: new FormControl('', [Validators.pattern(/[a-zA-Zа-яёА-ЯЁ]/)]),
    });
  }

  /**
   * Создает и возвращает FormGroup для фильтрации карточек героев 
   * 
   * @returns FormGroup для фильтрации героев 
   * с полями levelStart, LevelFinish
   * ability, beName, sortLevel
   */
  public searchHero(): FormGroup {
    return this.myFormBuilder.group({
      levelStart: new FormControl(''),
      levelFinish: new FormControl(''),
      ability: new FormControl(''),
      byName: new FormControl(''),
      sortLevel: new FormControl(''),
    });
  }

  /**
   * Создае и возвращает FormGroup для массива способностей 
   * 
   * @returns FormGroup для способностей героев с полем name
   */
  public abilityNew(): FormGroup {
    return this.myFormBuilder.group({
      name: new FormControl(''),
    });
  }
}
