import { Component, OnInit } from '@angular/core';
import { Forms } from './form-form-builder.service';
import { FormGroup } from '@angular/forms';
import { AppService } from '../service/app-service.service';
import { IHero } from '../../interfaces/interface';
import { IAbility } from '../../interfaces/interfaceAbility';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {

  constructor(
    private readonly _form: Forms,
    private readonly _appService: AppService
  ) {
  }

  public myTitleForm: FormGroup = this._form.profileForm();
  public abilityForm: FormGroup = this._form.abilityNew();
  public dataHero = this._appService.bb;
  public search: FormGroup = this._form.searchHero();

  public hero: IHero[] = [{ nameHero: '', power: 0, ability: [''], level: 0 }];

  /**
   * Присваивает значение свойству hero из appService
   */
  public ngOnInit(): void {
    this.hero = this._appService.bb;
  }

  /**
   * Функция, которая срабатывает при нажатии на кнопку
   * Возвращает в appService в функцию setName полученные значения
   * из формы myTitleForm
   * В форме myTitleForm сбрасывает значения
   */
  public onOkClick(): void {
    const res = this.myTitleForm.value;
    this._appService.setName(res);
    this.myTitleForm.reset(); 
  }

  /**
   * Функция, которая срабатывает при нажатии на кнопку 
   * Удаляет строку с переданным элементом типа IHero.
   * Вызывает метод removeByIndex из appService для удаления элемента.
   * 
   * @param {IHero} element - массив героя, который нужно удалить 
   */
  public removeTab(element: IHero): void {
    this._appService.removeByIndex(element); 
  }

  /**
   * Добавляет новую строку из формы abiliteForm и добавляет в
   * массив способностей героя abilitys.
   * Сбрасывает значения в форме
   */
  public setPart(): void {
    const res = this.abilityForm.value;
    this.abilitys.push(res);
    this.abilityForm.reset();
  }

  public abilitys: IAbility[] = [
    { name: 'Полет' },
    { name: 'Магия' },
    { name: 'Сила' },
  ];
}
