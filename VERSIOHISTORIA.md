<div lang="fi-FI">

# Versiohistoria

<!-- New entries inserted automatically after this line -->

## [2.0.0](https://github.com/response200/eslint-config/compare/v1.1.0...v2.0.0) (2022-12-26)

### Muutokset linttaussääntöihin
- Lisätty
  @typescript-eslint/no-duplicate-enum-values,
  @typescript-eslint/no-meaningless-void-operator,
  @typescript-eslint/no-redundant-type-constituents,
  @typescript-eslint/no-unsafe-declaration-merging ja
  @typescript-eslint/no-useless-empty-export-säännöt
  recommended-typescript-säännöstöön.

- Lisätty promise/no-multiple-resolved-sääntö recommended-säännöstöön.

- Löysätty @typescript-eslint/consistent-type-assertions-säännön
  `objectLiteralTypeAssertions`-asetusta. Tyyppiväittämien tekeminen
  objektiliteraaleille on nyt sallittua. Sellaisten tyyppiväittämien
  tekemiselle on joitakin oikeita käyttötarpeita.

- Poistettu @typescript-eslint/no-implicit-any-catch-sääntö
  recommended-typescript-säännöstöstä. Sääntöä ei enää tarvita, koska
  TypeScript 4.4:stä lähtien on ollut mahdollista asettaa
  `useUnknownInCatchVariables`-asetus päälle tsconfig.json-tiedostossa.

- @typescript-eslint/naming-convention-sääntö on korjattu @typescript-eslint/eslint-pluginissa.
  Aiempi versio ei tarkistanut luokkien kenttien nimiä.

- @typescript-eslint/consistent-type-imports-sääntö tukee nyt `type`-avainsanoja
  import-komentojen aaltosulkujen sisällä.

- @typescript-eslint/comma-dangle-säännön `enums`, `generics` ja
  `tuples`-asetusten oletusarvot olivat muuttuneet asentoon `ignore`. Asetukset
  piti eksplisiittisesti kääntää takaisin asentoon `never`.

- Poistettu @typescript-eslint/no-unsafe-argument-sääntö
  recommended-typescript-säännöstöstä. Sääntöä ei tarvitse enää eksplisiittisesti
  kytkeä päälle, koska se on oletuksena päällä @typescript-eslint/eslint-pluginin
  tuoreimmissa versioissa.

### Ylläpitotoimenpiteet
- Päivitetty peer-riippuvuudet. Lopetettu kokeilu liittyen `>=`-versiorajauksiin.
  Käytetään jatkossa `^`-merkintää peer-riippuvuuksien versiorajauksina.

- Päivitetty kehitysriippuvuudet.

- Poistettu fs-extra kehitysriippuvuuksista. Sitä tarvittiin hakemistojen
  kopioimiseen rekursiivisesti. Node.js 16.7.0:sta lähtien fs.promises.cp on
  tukenut rekursiivista hakemistojen kopiointia.

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

### Muutokset linttaussääntöihin
- Lisätty @typescript-eslint/no-unsafe-argument-sääntö
  recommended-typescript-säännöstöön. Nyt kaikki @typescript-eslint/no-unsafe-*-
  säännöt ovat päällä.

- Enumien avainten kirjoitusasu pakotetaan nyt StrictPascalCase-muotoon. Aiemmin
  myös strictCamelCase sallittiin.

- Kytketty @typescript-eslint/comma-dangle-sääntö päälle ja comma-dangle-sääntö
  pois päältä recommended-typescript-säännöstössä. Nyt enumin viimeisen kentän
  perässä ei enää saa olla pilkkua.

- Poistettu @typescript-eslint/member-ordering-sääntö
  recommended-typescript-säännöstöstä. Sääntö oli liian kireä ja sen hyöty oli
  kyseenalainen erityisesti, kun ottaa huomioon, ettei sääntörikkomuksia voinut
  korjata automaattisesti `--fix`-vivulla.

- Operator-linebreak-sääntö ei toiminut oikein .ts- ja .tsx-tiedostoissa. Nyt
  sääntö toimii oikein.

### Ylläpitotoimenpiteet
- Päivitetty kehitysriippuvuudet.

- Korjattu vain kehitysriippuvuuksia koskettanut haavoittuvuus: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

Ensimmäinen julkaisu.

</div>
