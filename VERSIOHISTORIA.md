<div lang="fi-FI">

# Versiohistoria

<!-- New entries inserted automatically after this line -->

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

- Kytketty @typescript-eslint/no-unsafe-argument-sääntö päälle
  recommended-typescript-säännöstössä. Nyt kaikki @typescript-eslint/no-unsafe-*-
  säännöt ovat päällä.
- Enumien avainten kirjoitusasu pakotetaan nyt StrictPascalCase-muotoon. Aiemmin
  myös strictCamelCase sallittiin.
- Kytketty @typescript-eslint/comma-dangle-sääntö päälle ja comma-dangle-sääntö
  pois päältä recommended-typescript-säännöstössä. Nyt enumin viimeisen kentän
  perässä ei enää saa olla pilkkua. 
- Kytketty @typescript-eslint/member-ordering-sääntö pois päältä
  recommended-typescript-säännöstössä. Sääntö oli liian kireä ja sen hyöty oli
  kyseenalainen erityisesti, kun ottaa huomioon, ettei sääntörikkomuksia voinut
  korjata automaattisesti `--fix`-vivulla.
- Operator-linebreak-sääntö ei toiminut oikein .ts- ja .tsx-tiedostoissa. Nyt
  sääntö toimii oikein.

- Päivitetty devDependenciet.
- Korjattu vain devDependencyjä koskettanut haavoittuvuus: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

Ensimmäinen julkaisu.

</div>
