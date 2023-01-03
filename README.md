<div lang="fi-FI">

# response200/eslint-config

Kireät ESLint-säännöt JavaScript/TypeScript/JSX-projekteihin yhdessä kätevässä
paketissa. Linttaus pitää koodisi siistinä ja yhtenäisenä sekä auttaa välttämään
sudenkuoppia ja suoranaisia virheitä.

<a href="README-en.md" hreflang="en-GB" rel="alternate" lang="en-GB">English documentation in README-en.md</a>

JS-, TS- ja JSX-säännöt voi jokaisen erikseen kytkeä tai jättää kytkemättä
päälle. `response200/eslint-config` käyttää pohjana seuraavia yleisiä
säännöstöjä, joiden lisäksi paketti sisältää lisäsääntöjä ja joidenkin sääntöjen
kiristyksiä.

* [eslint/recommended](https://eslint.org/docs/rules)
* [eslint-config-standard](https://github.com/standard/eslint-config-standard)
* [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
* [eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)

Paketin mukana tulee `lint.sh`-työkalu, jonka avulla on kätevä lintata erilaisia
tiedostovalikoimia. Lisää siitä alempana kohdassa [lint.sh](#lintsh).

## Asennus

### Npm 7 tai uudempi

Jos käytössäsi on npm-versio 7 tai uudempi, aja seuraava komento:

```sh
npm install --save-dev @response200/eslint-config
```

### Npm 6 tai vanhempi

Jos käytössäsi on npm-versio 6 tai vanhempi, aja seuraava monimutkaisempi
komento (npm 6 ja vanhemmat eivät asenna peerDependencyjä automaattisesti):

```sh
npm install --save-dev @response200/eslint-config \
  eslint \
  eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise \
  eslint-config-standard-with-typescript @typescript-eslint/eslint-plugin typescript \
  eslint-config-standard-jsx eslint-plugin-jsx-a11y eslint-plugin-react
```

Jos et aio käyttää TypeScript-sääntöjä, voit jättää moduulit
`eslint-config-standard-with-typescript`, `@typescript-eslint/eslint-plugin` ja
`typescript` asentamatta.

Jos et aio käyttää JSX-sääntöjä, voit jättää moduulit
`eslint-config-standard-jsx`, `eslint-plugin-jsx-a11y` ja `eslint-plugin-react`
asentamatta.

## Konfigurointi

Lisää `.eslintrc.js`-tiedostoon seuraavat konfiguraatiot:

```js
const path = require('path')

module.exports = {
  extends: [
    '@response200/eslint-config/recommended',
    '@response200/eslint-config/recommended-jsx'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@response200/eslint-config/recommended-typescript'
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
}
```

Jos et käytä TypeScriptiä tai halua käyttää siihen liittyviä sääntöjä, voit
jättää pois seuraavat rivit.

```js
const path = require('path')

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@response200/eslint-config/recommended-typescript'
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
```

Jos et käytä JSX:ää tai halua käyttää siihen liittyviä sääntöjä, voit jättää
pois seuraavan rivin.

```js
    '@response200/eslint-config/recommended-jsx'
```

## Mainittavaa JSX-säännöistä ja Reactista

`response200/eslint-config` sisältää JSX-sääntöjä ja `eslint-plugin-react`-moduuli
asennetaan automaattisesti sen mukana. React-spesifejä sääntöjä ei kuitenkaan
ole kytketty päälle. `response200/eslint-config` pyrkii olemaan geneerinen
lint-säännöstö, joka soveltuu kaikenlaisiin JSX-projekteihin ml. projektit,
joissa käytetään jotain toista JSX-kirjastoa kuten esimerkiksi
[Crankia](https://crank.js.org).

Jos kuitenkin käytät Reactia, on suositeltua lisätä [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react),
[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
ja [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)
säännöstöt. Aja seuraava komento asentaaksesi ne:

```sh
npm install --save-dev eslint-plugin-react-hooks eslint-config-standard-react
```

Lisää sitten seuraavat rivit `.eslintrc.js`-tiedoston `extends`-taulukkoon:

```js
  extends: [
    ...
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-react'
  ],
```

## lint.sh

`response200/eslint-config`-paketissa tulee mukana `lint.sh`. Se on kätevä
komentorivityökalu, jonka avulla erilaisten tiedostovalikoimien linttaaminen
git-versiohallinnoidussa projektissa onnistuu nopeasti ja helposti. Työkalu on
apuväline eslintin ajamiseen.

Työkalulla on viisi toimintamoodia:

* paths (linttaa määrätyt tiedostot ja hakemistot)
* changed (linttaa committaamattomat muutetut tiedostot ml. staged-tilassa olevat)
* staged (linttaa staged-tilassa olevat committaamattomat muutetut tiedostot)
* rev (linttaa tiedostot, joita on muutettu määrätyn commitin jälkeen)
* branch (linttaa aktiivisena olevan haaran muutetut tiedostot)

Lint.sh kokoaa listan muutetuista .js, .jsx, .ts ja .tsx-tiedostoista `git diffin`
avulla. `paths`-moodissa lista muodostuu käyttäjän määräämän mukaisesti. Lista
ja muut lint.sh:lle mahdollisesti annetut komentoriviargumentit passataan
eslintille.

Esimerkki 1: linttaa määrätyt tiedostot ja hakemistot
```sh
npx lint.sh paths foo.js bar.tsx directory/subdirectory
```


Esimerkki 2: linttaa määrätyt tiedostot ja ohjeista eslint tekemään
automaattiset korjaukset
```sh
npx lint.sh paths foo.js bar.tsx --fix
```


Esimerkki 3: linttaa committaamattomat muutetut tiedostot
```sh
npx lint.sh changed
```


Esimerkki 4: linttaa staged-tilassa olevat committaamattomat muutetut tiedostot
```sh
npx lint.sh staged
```

**Vinkki:** skriptaa gitin pre-commit-koukku ajamaan `node_modules/.bin/lint.sh staged --fix`.
Automatisoitu linttaus ja automaattinen virheiden korjaus commitin yhteydessä!


Esimerkki 5: linttaa viimeisimmässä commitissa muutetut tiedostot
```sh
npx lint.sh rev HEAD~1..HEAD
```

**Vinkki:** `rev`-moodi hyväksyy minkä tahansa git-revision argumentikseen.
Katso `man 7 gitrevisions`, mihin kaikkeen git-revisioita voikaan käyttää.


Esimerkki 6: linttaa aktiivisena olevan haaran muutetut tiedostot
```sh
npx lint.sh branch
```

**Vinkki:** laita CI-ympäristösi suorittamaan `node_modules/.bin/lint.sh branch`
pull requestin yhteydessä ja estä haaran/pull requestin liittäminen masteriin,
jos lint.sh palauttaa linttausvirheitä (paluukoodi muu kuin 0). Automatisoitu
koodin laadun- ja koodauskäytäntöjen valvonta.

**Lisävinkki:** moodeista voi käyttää myös lyhenteitä p, c, s, r ja b.

## Yleisiä ongelmia

### Pisteellä alkavien tiedostojen linttaaminen epäonnistuu TypeScript-projektissa

Kun TypeScript-projektissa yrittää lintata ESLintin `.eslintrc.js`-tiedostoa tai
jotakin muuta pisteellä alkavaa tiedostoa, saattaa linttaus epäonnistua ja
seuraava virhe tulee tulostetuksi:

```
/path/to/.eslintrc.js
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .eslintrc.js.
The file must be included in at least one of the projects provided
```

Ongelma johtuu siitä, ettei `tsc` oletuksena käsittele pisteellä alkavia
tiedostoja. Ongelman voi korjata lisäämällä `tsconfig.json`-tiedostoon seuraavat
rivit:

```json5
{
  // This include array enables linting of dotfiles.
  "include": ["**/*", "**/.*"]
}
```

## Lisenssi

[BSD 3-Clause](LICENCE.md). Toteuttanut Joel Posti.

## Tue response200/eslint-configin kehitystä

`response200/eslint-config` on ilmainen avoimen lähdekoodin projekti. Toivon, että
se olisi hyödyksi. Jos haluat tukea sen kehitystä tai olet muuten vain
avokätisellä tuulella, voit lahjoittaa sopivaksi katsomasi summan
[PayPalilla](https://paypal.me/joelposti).
</div>
