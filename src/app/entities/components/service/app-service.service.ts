import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHero } from '../../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _name$$: BehaviorSubject<IHero[]> = new BehaviorSubject<IHero[]>([]);
  public name$: Observable<IHero[]> = this._name$$.asObservable();

  public bb: Array<IHero> = [
    {
      nameHero: 'Капитан Америка',
      power: 6,
      ability: ['Сила'],
      level: 8,
    },
    {
      nameHero: 'Тор',
      power: 10,
      ability: ['Магия', 'Сила'],
      level: 10,
    },
    {
      nameHero: 'Грут',
      power: 7,
      ability: ['Магия'],
      level: 1,
    },
    {
      nameHero: 'Железный Человек',
      power: 0,
      ability: ['Полет', 'Магия', 'Сила'],
      level: 1,
    },
  ];

  /**
   * Добавляет в массив bb поступающих массив данных героя
   * 
   * @param {IHero} data - массив данных героя, который нужно добавить
   */
  public setName(data: IHero): void {
    this.bb.push(data); 
  }

  /**
   * Функция удаления героя их массива bb
   * Удаляет героя по его индексу в массиве bb
   * @param {IHero} element - массив данных героя, который нужно удалить
   */
  public removeByIndex(element: IHero): void {
    const index = this.bb.indexOf(element);
    if (index >= 0) {
      this.bb.splice(index, 1);
    }
  }
}
