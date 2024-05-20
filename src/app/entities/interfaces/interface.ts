/**
 * Интерфейс героя
 *
 * @param {string} nameHero - имя героя
 * @param {number} power - сила героя
 * @param {Array} ability - способности героя
 * @param {number} level - уровень героя
 */
export interface IHero {
  nameHero: string;
  power: number;
  ability: Array<string>;
  level: number;
}
