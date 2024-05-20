import { Component, ViewChild, DestroyRef, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IHero } from '../../interfaces/interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppService } from '../../service/app-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(
    private readonly _appService: AppService,
    private readonly _destroyRef: DestroyRef
  ) {
  }

  displayedColumns: string[] = [
    'nameHero',
    'power',
    'ability',
    'level',
    'delete',
  ];

  public hero: IHero[] = [{ nameHero: '', power: 0, ability: [''], level: 0 }];

  @ViewChild(MatTable) table!: MatTable<IHero>;

  /**
   * Подписывается на Observable name$ из appService и 
   * присваивает значение свойству hero.
   * После делает проверку: если компонент таблицы существует, 
   * вызывает метод renderRows для обновления таблицы.
   */
  public ngOnInit(): void {
    this._appService.name$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((heroes) => {
        this.hero = heroes;
        if (this.table) {
          this.table.renderRows();
        }
      });
  }

  /**
   * Удаляет строку с переданным элементом типа IHero.
   * Вызывает метод removeByIndex из appService для удаления элемента.
   * После делает проверку: если компонент таблицы существует,
   * вызывает метод renderRows для обновления таблицы.
   * 
   * @param {IHero} element - массив данных героев, который нужно удалить
   */
  public removeTab(element: IHero): void {
    this._appService.mashaToStolovaya(element);
    if (this.table) {
      this.table.renderRows();
    }
  }
}
