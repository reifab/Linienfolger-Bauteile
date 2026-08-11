---
layout: default
title: Hindernissensor IDUINO ST1081
---

# Hindernissensor IDUINO ST1081

## Identifikation

| Merkmal | Angabe |
|---|---|
| Reichelt-Artikelnummer | `ARD LINE FINDER2` |
| Hersteller-Teilenummer | `ST1081` |
| Bestellmenge | 2 |
| Funktion im Linienfolger | Hindernis vorne erkennen |
| Signalbezeichnung | `H_v` |

## Technische Angaben

- Betriebsspannung: 3,3 bis 5 V
- Betriebsstrom: mindestens 20 mA
- einstellbarer Erkennungsbereich: ungefähr 2 bis 40 cm
- Arbeitswinkel: ungefähr 35°
- Ausgang: digitales TTL-Signal
- Hindernis erkannt: LOW beziehungsweise logische 0
- kein Hindernis: HIGH beziehungsweise logische 1
- Abmessungen: ungefähr 45 × 16 × 10 mm

## Anschlussbelegung

Die Pinbezeichnungen sind direkt auf dem Modul aufgedruckt:

| Pin | Bedeutung | Verwendung im Linienfolger |
|---|---|---|
| `+` | Versorgungsspannung, 3,3 bis 5 V DC | Anschluss an 5 V |
| `Gnd` | Masse beziehungsweise Bezugspotential | Anschluss an GND |
| `out` | digitaler Signalausgang | Messpunkt für das Hindernissignal `H_v` |
| `EN` | Freigabeeingang; LOW-aktiv | im Unterrichtsaufbau nicht verwendet |

Die Ausgangsspannung wird zwischen **`out` und `Gnd`** gemessen. Der Pin heisst
bei diesem Modul ausdrücklich `out`. Die Bezeichnung `SIG` gehört zum Grove
Line Finder und darf nicht auf den ST1081 übertragen werden.

## Für den Unterricht wichtig

Der Ausgang ist **aktiv LOW**. Das Signal wird also gerade dann wirksam, wenn
am Ausgang eine logische 0 anliegt. Vor dem Einsatz werden Schaltschwelle und
zuverlässiger Erkennungsabstand am Potentiometer eingestellt und gemessen.

## Dokumentation

- [Produktseite bei Reichelt](https://www.reichelt.de/de/de/shop/produkt/arduino_-_ir-hindernissensor_2_40_cm_38_khz-282521)
- Quellenstand geprüft am 23.07.2026
- Eine eindeutig zuordenbare Herstellerseite wurde noch nicht gefunden.

## Offene Arbeiten

- [ ] Technische Angaben mit dem tatsächlich eingesetzten Modul abgleichen.
- [ ] Hersteller und Originaldokumentation eindeutig bestimmen.
- [ ] Veröffentlichungsrechte für eine PDF-Kopie prüfen.
- [ ] Nach Veröffentlichung QR-Code auf diese Seite erzeugen.
