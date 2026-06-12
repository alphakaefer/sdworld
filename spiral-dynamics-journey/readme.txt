=== Spiral Dynamics Journey ===
Contributors: sdworld
Tags: spiral dynamics, education, interactive, oer, scrollytelling
Requires at least: 5.0
Tested up to: 6.8
Requires PHP: 7.0
Stable tag: 1.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Interaktive Scroll-Reise durch die Ebenen von Spiral Dynamics – mit erlebbaren Konflikten und Phasenübergängen.

== Description ==

Eine interaktive Lern-Erfahrung zum Modell Spiral Dynamics (nach Clare W. Graves,
Don Beck und Christopher Cowan):

* Acht Ebenen ("Memes") von Beige bis Türkis, jeweils in ihrer Farbe inszeniert
* Auf jeder Ebene ein interaktives Konflikt-Szenario: Entscheidungen mit den
  Mitteln dieser Ebene führen in Sackgassen – erst die nächste Ebene bringt
  die Lösung
* Phasenübergänge werden so erlebbar, nicht nur erklärt
* Freischalt-Mechanik: Die nächste Ebene öffnet sich erst nach dem erlebten
  Übergang (abschaltbar)
* Jede Ebene verlinkt frei lizenzierte Bildungsressourcen (OER), v. a.
  Wikipedia/Wikimedia (CC BY-SA)
* Kein Tracking, keine externen Skripte, keine Abhängigkeiten

Das Modell wird mit Einordnung präsentiert: Spiral Dynamics ist eine Heuristik
für Reflexion und Bildung, keine bestätigte wissenschaftliche Theorie.

== Installation ==

1. Den Ordner `spiral-dynamics-journey` nach `wp-content/plugins/` hochladen
   (oder das ZIP über "Plugins → Installieren → Plugin hochladen" einspielen).
2. Das Plugin im WordPress-Backend aktivieren.
3. Den Shortcode `[spiral_dynamics_journey]` auf einer Seite einfügen –
   am besten auf einer Seite mit voller Breite und ohne Seitenleiste.

== Shortcode-Attribute ==

* `locked="no"` – alle Ebenen sofort zugänglich (ohne Freischalt-Mechanik)
* `progress="no"` – Fortschritt nicht im Browser (localStorage) speichern

Beispiel: `[spiral_dynamics_journey locked="no" progress="no"]`

== Frequently Asked Questions ==

= Werden externe Inhalte geladen? =

Nein. Alle Inhalte liegen im Plugin. OER-Quellen werden nur verlinkt
(Öffnen in neuem Tab), nicht eingebettet.

= Ist der Inhalt frei nutzbar? =

Ja. Code: GPL-2.0-or-later. Texte der Reise: CC BY-SA 4.0.

== Changelog ==

= 1.1.0 =
* Neu: Block "Methoden & zentrale Konzepte" je Ebene mit Links zu
  karlhosang.de (Polyvagal-Theorie, OKRs, GFK, Holokratie u. v. m.).
* Asset-Version erhöht, damit Browser/Caches die neuen Inhalte laden.

= 1.0.0 =
* Erste Version: 8 Ebenen, interaktive Konflikte, Phasenübergänge, OER-Links.
