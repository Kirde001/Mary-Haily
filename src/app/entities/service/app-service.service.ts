import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHero } from '../interfaces/interface';
import { BB } from '../const/heroes';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private _name$$: BehaviorSubject<IHero[]> = new BehaviorSubject<IHero[]>(BB);
  public name$: Observable<IHero[]> = this._name$$.asObservable();



  /**
   * Добавляет в массив bb поступающих массив данных героя
   * 
   * @param {IHero} data - массив данных героя, который нужно добавить
   */
  public addMary(data: IHero): void {
    const mary = this._name$$.getValue().slice(); 
    mary.push(data);
    this._name$$.next(mary)
  }

  /**
   * Функция удаления героя их массива bb
   * Удаляет героя по его индексу в массиве bb
   * @param {IHero} element - массив данных героя, который нужно удалить
   */
  public mashaToStolovaya(element: IHero): void {
    const mary = this._name$$.getValue().slice(); 
    const index = mary.indexOf(element);
    mary.splice(index, 1);
    this._name$$.next(mary)
    }
  }
