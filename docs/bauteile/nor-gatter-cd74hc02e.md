---
layout: default
title: Vierfach-NOR-Gatter CD74HC02E
---

# Vierfach-NOR-Gatter CD74HC02E

## Identifikation

| Merkmal | Angabe |
|---|---|
| Reichelt-Artikelnummer | `CD74HC02E` |
| Hersteller | Texas Instruments |
| Gehäuse | PDIP-14, 14 Anschlüsse |
| Menge laut Rechnung vom 06.08.2026 | 16 Stück |

## Funktion

Der Baustein enthält vier unabhängige NOR-Gatter mit je zwei Eingängen.
Der Ausgang `Y` ist nur dann logisch 1, wenn beide Eingänge `A` und `B`
logisch 0 sind: `Y = NICHT (A ODER B)`.

| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

## Versorgung und Pinbelegung

Die empfohlene Versorgungsspannung beträgt **2 bis 6 V**.
`VCC` liegt an Pin 14, `GND` an Pin 7.

| Gatter | Eingang A | Eingang B | Ausgang Y |
|---|---|---|---|
| 1 | Pin 2 | Pin 3 | Pin 1 |
| 2 | Pin 5 | Pin 6 | Pin 4 |
| 3 | Pin 8 | Pin 9 | Pin 10 |
| 4 | Pin 11 | Pin 12 | Pin 13 |

Die Pinbelegung gilt für die Draufsicht gemäss Datenblatt. Vor dem Einstecken
Kerbe bzw. Pin-1-Markierung prüfen.

## Für den Unterricht wichtig

- Auf dem [Breadboard](steckbrett-set1.html) über der Mittelrinne einsetzen.
- Einen 100-nF-Abblockkondensator nahe zwischen `VCC` und `GND` anschliessen.
- Unbenutzte Eingänge auf einen definierten Pegel (`GND` oder `VCC`) legen;
  unbenutzte Ausgänge offen lassen.
- Der Baustein verarbeitet Logiksignale. Motoren werden über den
  [Motortreiber](motortreiber-l298n-me089.html) angesteuert.

## Dokumentation

- [Produktseite bei Reichelt](https://www.reichelt.de/de/de/shop/produkt/nor-gate_2-input_2_6_v_dip-14-353057)
- [Texas Instruments: CD74HC02](https://www.ti.com/product/CD74HC02)
- [TI-Datenblatt SCHS125D, Revision D, Dezember 2020](https://www.ti.com/lit/ds/symlink/cd74hc02.pdf), insbesondere Seiten 3, 4 und 13.
- Artikel und Menge mit der internen Rechnung vom 06.08.2026 abgeglichen.
- Quellenstand geprüft am 19.09.2026.

[Zurück zur Bauteilübersicht](../index.html)
