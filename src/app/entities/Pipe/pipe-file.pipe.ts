import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/interface';

@Pipe({
  name: 'iconUrl',
})
export class PipeFilePipe implements PipeTransform {

  /**
   * Преобразует массив героев с учетом заданных критериев фильтрации и сортировки
   * 
   * @param {any[]} users - массив героев, который нужно отфильтровать и/или отсортировать 
   * @param {any} value - объект со значениями критериев фильтрации и сортировки
   * @returns возвращает отфильтрованный и/или отсортированный массив героев
   */
  public transform(users: any[], value: any) {

    if (value.byName) {
      users = users.filter((user) => {
        if (
          user.nameHero
            .toLowerCase()
            .includes(value.byName.toLowerCase())
        ) {
          return user;
        }
      });
    }

    if (value.ability) {
      const selectedAbilities = value.ability.map((ability: string) =>
        ability.toLowerCase()
      );
      users = users.filter((user) => {
        return selectedAbilities.every((ability: string) =>
          user.ability.some(
            (heroAbility: string) => heroAbility.toLowerCase() === ability
          )
        );
      });
    }

    if (value.levelStart) {
      users = users.filter((user) => {
        if (user.level >= value.levelStart) {
          return user;
        }
      });
    }

    if (value.levelFinish) {
      users = users.filter((user) => {
        if (user.level <= value.levelFinish) {
          return user;
        }
      });
    }

    if (value.sortLevel) {
      if (value.sortLevel == 1) {
        users = users.sort(function (a, b) {
          return a.level - b.level;
        });
      } else {
        users = users.sort(function (a, b) {
          return b.level - a.level;
        });
      }
    }

    return users;
  }
}
