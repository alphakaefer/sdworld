/**
 * Spiral Dynamics Journey – Inhalte (Deutsch)
 *
 * Modell nach Clare W. Graves, popularisiert von Don Beck & Christopher Cowan.
 * Die Texte hier sind eigene, frei lizenzierte Zusammenfassungen (CC BY-SA 4.0).
 * Verlinkte OER-Quellen illustrieren die jeweilige Ebene.
 */
window.SDJ_DATA = {
	meta: {
		title: 'Die Spirale durchleben',
		subtitle: 'Eine interaktive Reise durch Spiral Dynamics',
		intro: [
			'Spiral Dynamics beschreibt, wie Menschen, Organisationen und Gesellschaften ' +
			'ihre Wertesysteme entwickeln – in Wellen, die aufeinander aufbauen. Jede Ebene ' +
			'(jedes „Meme“) ist eine Antwort auf die Lebensbedingungen ihrer Zeit.',
			'Das Spannende sind die Übergänge: Jede Ebene erzeugt irgendwann Probleme, ' +
			'die sie mit ihren eigenen Mitteln nicht mehr lösen kann. Erst die nächste ' +
			'Ebene bringt die Antwort – und erzeugt später wieder neue Probleme.',
			'Auf dieser Reise schlüpfst du auf jeder Ebene in eine Rolle, triffst ' +
			'Entscheidungen mit den Mitteln dieser Ebene – und erlebst, warum sie scheitern. ' +
			'Erst dann öffnet sich der Übergang zur nächsten Ebene.'
		],
		disclaimer:
			'Hinweis: Spiral Dynamics ist ein heuristisches Modell, keine bestätigte ' +
			'wissenschaftliche Theorie. Es ordnet keine Menschen in Schubladen – jede:r ' +
			'trägt mehrere Ebenen in sich, je nach Lebensbereich und Situation.',
		startLabel: 'Reise beginnen',
		lockedHint: 'Erlebe zuerst den Übergang auf der vorherigen Ebene.',
		oerHeading: 'Zum Vertiefen (freie Bildungsressourcen)',
		methodsHeading: 'Methoden & zentrale Konzepte',
		methodsIntro: 'Werkzeuge, mit denen sich auf dieser Ebene arbeiten lässt ' +
			'(vertiefende Artikel von Karl Hosang):',
		articleLabel: 'Diese Ebene im Detail',
		conflictHeading: 'Der Konflikt dieser Ebene',
		conflictQuestion: 'Wie entscheidest du – mit den Mitteln dieser Ebene?',
		deadEndLabel: 'Sackgasse',
		revealLabel: 'Warum scheitert diese Ebene hier?',
		transitionHeading: 'Der Phasenübergang',
		nextSolutionHeading: 'Die Antwort der nächsten Ebene'
	},
	levels: [
		{
			id: 'beige',
			order: 1,
			code: 'AN',
			tier: 1,
			name: 'Beige',
			subtitle: 'Überleben',
			color: '#b9a87f',
			textTone: 'dark',
			motto: '„Ich tue, was ich tun muss, um zu überleben.“',
			world:
				'Die Welt ist unmittelbar: Hunger, Durst, Kälte, Gefahr. Es gibt kein ' +
				'„Morgen“, keine Pläne, kaum ein Ich – nur Instinkt und Reflex. Der ' +
				'Mensch lebt von Moment zu Moment, geleitet von Körper und Sinnen.',
			gains: ['Instinkt', 'Wachheit für Gefahr', 'unmittelbare Bedürfnisse stillen'],
			shadow: ['keine Vorsorge', 'völlige Schutzlosigkeit allein'],
			conflict: {
				title: 'Der Winter kommt',
				intro:
					'Du bist allein unterwegs. Die Tage werden kürzer, die Beeren sind ' +
					'abgeerntet, nachts hörst du Wölfe. Dein Körper wird schwächer. ' +
					'Du spürst: So überstehst du die Kälte nicht.',
				options: [
					{
						label: 'Weiterziehen und allein nach Nahrung suchen',
						outcome:
							'Du wanderst, bis die Kräfte schwinden. Was du findest, reicht ' +
							'für einen Tag – nicht für einen Winter. Allein bist du zu langsam, ' +
							'zu schwach, zu verwundbar.'
					},
					{
						label: 'Einen Unterschlupf suchen und durchhalten',
						outcome:
							'Die Höhle schützt vor Wind, nicht vor Hunger. Als das Fieber kommt, ' +
							'ist niemand da, der Wasser bringt. Ein einzelner Körper hat ' +
							'keine Reserven – und keinen Ersatz.'
					},
					{
						label: 'Kämpfen, wenn die Gefahr kommt',
						outcome:
							'Gegen ein einzelnes Tier vielleicht. Aber das Rudel jagt gemeinsam – ' +
							'und du bist allein. Instinkt allein gewinnt diesen Kampf nicht.'
					}
				],
				crisis:
					'Auf Beige gibt es nur den einzelnen Körper und den Augenblick. ' +
					'Doch Kälte, Krankheit und Rudel besiegt kein Einzelner. Das Problem ' +
					'„Überleben über den Moment hinaus“ ist auf dieser Ebene unlösbar.',
				nextSolution:
					'Der Zusammenschluss: Menschen, die teilen, wachen und sich kümmern, ' +
					'überstehen, was den Einzelnen tötet. Aus dem Ich wird ein Wir – ' +
					'die Sippe, gehalten von Ritualen, Ahnen und Zugehörigkeit. ' +
					'Das ist der Schritt nach PURPUR.'
			},
			oer: [
				{
					label: 'Wikipedia: Spiral Dynamics (Übersicht aller Ebenen)',
					url: 'https://en.wikipedia.org/wiki/Spiral_Dynamics',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Maslowsche Bedürfnishierarchie (Grundbedürfnisse)',
					url: 'https://de.wikipedia.org/wiki/Maslowsche_Bed%C3%BCrfnishierarchie',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die beige Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-beige/'
				},
				methods: [
					{ label: 'Polyvagal-Theorie', url: 'https://karlhosang.de/polyvagal-theorie/' },
					{ label: 'Ressourcenaktivierung', url: 'https://karlhosang.de/ressourcen-psychologie/' }
				]
			}
		},
		{
			id: 'purpur',
			order: 2,
			code: 'BO',
			tier: 1,
			name: 'Purpur',
			subtitle: 'Stamm & Geborgenheit',
			color: '#7d5ba6',
			textTone: 'light',
			motto: '„Wir halten zusammen und ehren die Ahnen.“',
			world:
				'Die Welt ist magisch und beseelt: Geister wohnen in Bäumen, Flüssen und ' +
				'Träumen. Sicherheit gibt die Sippe – ihre Rituale, Tabus und Ältesten. ' +
				'Wer dazugehört, ist geschützt. Wer die Bräuche verletzt, gefährdet alle.',
			gains: ['Zugehörigkeit', 'Tradition & Rituale', 'gegenseitige Fürsorge'],
			shadow: ['Tabus blockieren Neues', 'Angst vor Geistern statt Verstehen'],
			conflict: {
				title: 'Die große Dürre',
				intro:
					'Seit Monden fällt kein Regen. Die Wasserstelle des Stammes versiegt. ' +
					'Die Ältesten vollziehen die Regenrituale der Ahnen – doch der Himmel ' +
					'bleibt leer. Eine junge Jägerin hat jenseits des verbotenen Hügels ' +
					'eine Quelle entdeckt. Aber das Land dort ist Tabu: Dort zürnen die Geister.',
				options: [
					{
						label: 'Größere Opfer darbringen, die Rituale verstärken',
						outcome:
							'Die Trommeln schlagen Tag und Nacht. Der Regen kommt nicht. ' +
							'Die Schwächsten werden krank vor Durst. Das Ritual erklärt die ' +
							'Welt – aber es verändert sie nicht.'
					},
					{
						label: 'Den Schamanen um Deutung bitten',
						outcome:
							'Der Schamane liest die Zeichen: „Jemand hat ein Tabu verletzt.“ ' +
							'Die Sippe sucht Schuldige statt Wasser. Das Misstrauen wächst – ' +
							'die Quelle bleibt unberührt hinter dem verbotenen Hügel.'
					},
					{
						label: 'Das Tabu achten und auf die Ahnen vertrauen',
						outcome:
							'Gehorsam hält die Sippe zusammen – und führt sie gemeinsam ' +
							'ins Verdursten. Die Regel, die einst schützte, ist zur tödlichen ' +
							'Fessel geworden.'
					}
				],
				crisis:
					'Purpur kann der Dürre nichts entgegensetzen: Das magische Weltbild ' +
					'deutet die Not, aber es kann sie nicht beheben. Und das Tabu verbietet ' +
					'genau den Weg, der retten würde. Die Sippe braucht jemanden, der es wagt, ' +
					'sich über die Geister zu stellen.',
				nextSolution:
					'Ein starkes Ich bricht aus dem Wir aus: Die Jägerin überschreitet das ' +
					'Tabu, trotzt den Geistern – und bringt Wasser. Macht, Mut und ' +
					'Durchsetzung sprengen die Fesseln der Tradition. ' +
					'Das ist der Schritt nach ROT.'
			},
			oer: [
				{
					label: 'Wikipedia: Animismus (magisch-beseeltes Weltbild)',
					url: 'https://de.wikipedia.org/wiki/Animismus',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Tabu',
					url: 'https://de.wikipedia.org/wiki/Tabu',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die purpurne Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-purpur/'
				},
				methods: [
					{ label: 'Gruppendynamik', url: 'https://karlhosang.de/gruppendynamik/' },
					{ label: 'Team-Building', url: 'https://karlhosang.de/team-building/' },
					{ label: 'Storytelling', url: 'https://karlhosang.de/storytelling/' }
				]
			}
		},
		{
			id: 'rot',
			order: 3,
			code: 'CP',
			tier: 1,
			name: 'Rot',
			subtitle: 'Macht & Durchsetzung',
			color: '#c0392b',
			textTone: 'light',
			motto: '„Ich nehme mir, was ich will – jetzt.“',
			world:
				'Die Welt ist ein Dschungel: Die Starken nehmen, die Schwachen dienen. ' +
				'Das Ich ist erwacht – impulsiv, stolz, furchtlos. Respekt bekommt, wer ' +
				'Stärke zeigt. Schuld und Geduld sind Worte für Verlierer.',
			gains: ['Selbstbehauptung', 'Mut & Tatkraft', 'Befreiung von lähmenden Tabus'],
			shadow: ['endlose Fehden', 'nichts Dauerhaftes entsteht'],
			conflict: {
				title: 'Das Reich, das nicht hält',
				intro:
					'Du bist die stärkste Kriegerin, der gefürchtetste Anführer weit und ' +
					'breit. Doch kaum ziehst du nach Süden, fällt der Norden von dir ab. ' +
					'Dein bester Kämpfer verbündet sich heimlich mit deinem Rivalen. ' +
					'Jeder Sieg gebiert drei neue Feinde. Du kannst nicht überall sein.',
				options: [
					{
						label: 'Härter durchgreifen – ein Exempel statuieren',
						outcome:
							'Die Angst gehorcht – solange du hinschaust. In deinem Rücken ' +
							'wächst der Hass. Wer durch Furcht herrscht, darf niemals schlafen.'
					},
					{
						label: 'Die Rivalen einen nach dem anderen besiegen',
						outcome:
							'Für jeden besiegten Rivalen rächt sich ein Bruder, ein Sohn, ein ' +
							'Clan. Die Blutrache kennt kein Ende – sie kennt nur dich als ' +
							'nächstes Ziel.'
					},
					{
						label: 'Treue mit Beute erkaufen',
						outcome:
							'Deine Krieger bleiben, solange die Beute fließt. Ein magerer ' +
							'Sommer – und sie folgen dem, der mehr verspricht. Gekaufte Treue ' +
							'gehört immer dem Höchstbietenden.'
					}
				],
				crisis:
					'Rohe Macht kann erobern, aber nichts erhalten. Ohne Regeln, die auch ' +
					'gelten, wenn niemand hinschaut, zerfällt alles beim ersten Machtwechsel. ' +
					'Das Problem „Ordnung über den starken Einzelnen hinaus“ ist auf Rot unlösbar.',
				nextSolution:
					'Gesetz und höherer Sinn: Regeln, die über jedem Einzelnen stehen – auch ' +
					'über dir. Pflicht, Disziplin und der Glaube an eine größere Ordnung ' +
					'machen aus Horden ein Gemeinwesen, aus Beute eine Zukunft. ' +
					'Das ist der Schritt nach BLAU.'
			},
			oer: [
				{
					label: 'Wikipedia: Egozentrismus',
					url: 'https://de.wikipedia.org/wiki/Egozentrismus',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Blutrache (warum Fehden nicht enden)',
					url: 'https://de.wikipedia.org/wiki/Blutrache',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die rote Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-rot/'
				},
				methods: [
					{ label: 'Law of Attraction', url: 'https://karlhosang.de/law-of-attraction/' },
					{ label: 'Ressourcenaktivierung', url: 'https://karlhosang.de/ressourcen-psychologie/' },
					{ label: 'Visionsfindung', url: 'https://karlhosang.de/inspirierende-fragen-visionsfindung/' }
				]
			}
		},
		{
			id: 'blau',
			order: 4,
			code: 'DQ',
			tier: 1,
			name: 'Blau',
			subtitle: 'Ordnung & Sinn',
			color: '#2e5fa3',
			textTone: 'light',
			motto: '„Es gibt eine richtige Ordnung – und ich diene ihr.“',
			world:
				'Die Welt hat einen Plan: Gesetze, Pflichten, eine Wahrheit. Wer sich ' +
				'einordnet, opfert das Jetzt für die Belohnung später – im Leben oder ' +
				'danach. Disziplin, Loyalität und Moral schaffen Stabilität und Vertrauen.',
			gains: ['Verlässlichkeit & Recht', 'Sinn & Moral', 'Planung über Generationen'],
			shadow: ['Dogmatismus', 'Abweichendes wird bestraft statt geprüft'],
			conflict: {
				title: 'Die Krankheit, die im Buch nicht steht',
				intro:
					'Deine Stadt ist wohlgeordnet: Jede Frage hat ihre Vorschrift, jede ' +
					'Vorschrift ihren Wächter. Dann kommt eine neue Seuche. Die heiligen ' +
					'Schriften und die alten Regeln kennen sie nicht. Eine Heilerin ' +
					'experimentiert mit unerlaubten Methoden – und ihre Kranken werden gesund.',
				options: [
					{
						label: 'Strenger an den bewährten Vorschriften festhalten',
						outcome:
							'Die Prozessionen werden länger, die Listen genauer – die Seuche ' +
							'breitet sich aus. Eine Regel, die für eine alte Welt geschrieben ' +
							'wurde, beantwortet keine neue Frage.'
					},
					{
						label: 'Die Heilerin bestrafen – Ordnung muss sein',
						outcome:
							'Die Abweichlerin schweigt fortan. Mit ihr verschwindet das ' +
							'einzige Wissen, das wirkte. Die Ordnung ist gerettet – ' +
							'die Kranken sind es nicht.'
					},
					{
						label: 'Auf Geduld und Belohnung im Jenseits verweisen',
						outcome:
							'Trost beruhigt die Seelen, aber heilt keine Körper. Wer auf das ' +
							'Danach vertröstet, gibt das Hier verloren.'
					}
				],
				crisis:
					'Blau hat auf alles eine Antwort – außer auf das Neue. Wenn die eine ' +
					'Wahrheit versagt, wird Treue zur Falle: Die Ordnung schützt sich selbst ' +
					'statt der Menschen. Das Problem „Neues lösen“ ist auf Blau unlösbar.',
				nextSolution:
					'Prüfen statt glauben: beobachten, messen, vergleichen, verwerfen, ' +
					'verbessern. Was funktioniert, zählt – egal, was im Buch steht. Vernunft, ' +
					'Wissenschaft und Unternehmergeist setzen Energie frei. ' +
					'Das ist der Schritt nach ORANGE.'
			},
			oer: [
				{
					label: 'Wikipedia: Konformität',
					url: 'https://de.wikipedia.org/wiki/Konformit%C3%A4t',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Dogma',
					url: 'https://de.wikipedia.org/wiki/Dogma',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die blaue Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-blau/'
				},
				methods: [
					{ label: 'Konditionierung', url: 'https://karlhosang.de/konditionierung/' },
					{ label: 'Operatoren (Bloomsche Taxonomie)', url: 'https://karlhosang.de/anforderungsbereiche-lernen-bloomsche-taxonomie/' }
				]
			}
		},
		{
			id: 'orange',
			order: 5,
			code: 'ER',
			tier: 1,
			name: 'Orange',
			subtitle: 'Leistung & Erfolg',
			color: '#e0731d',
			textTone: 'light',
			motto: '„Wer wagt, gewinnt – und Besseres ist möglich.“',
			world:
				'Die Welt ist ein Spielfeld voller Chancen: Wissenschaft erklärt sie, ' +
				'Technik verbessert sie, Märkte belohnen die Tüchtigen. Erfolg ist machbar, ' +
				'Fortschritt messbar. Autonomie und Strategie schlagen blinden Gehorsam.',
			gains: ['Wissenschaft & Innovation', 'Wohlstand', 'individuelle Freiheit'],
			shadow: ['Externalisierte Kosten', 'Statusrennen ohne Ziellinie'],
			conflict: {
				title: 'Der Sieg, der sich nicht mehr lohnt',
				intro:
					'Dein Unternehmen ist Marktführer. Die Kurven zeigen nach oben – und ' +
					'trotzdem: Deine besten Leute brennen aus, der Fluss hinter dem Werk ' +
					'kippt um, und nachts fragst du dich, wofür eigentlich. Die Konkurrenz ' +
					'schläft nicht, also drückst du weiter aufs Tempo.',
				options: [
					{
						label: 'Effizienz steigern, Wachstum beschleunigen',
						outcome:
							'Die Zahlen steigen – die Krankmeldungen auch. Mehr vom Gleichen ' +
							'löst kein Problem, das durch mehr vom Gleichen entstanden ist.'
					},
					{
						label: 'Eine grüne Imagekampagne starten',
						outcome:
							'Das Logo wird grün, der Fluss bleibt braun. Als es auffliegt, ' +
							'kostet das Vertrauen mehr, als die Kampagne je einbrachte. ' +
							'Optimierte Wahrnehmung heilt keine Wirklichkeit.'
					},
					{
						label: 'Boni erhöhen – Leistung muss sich lohnen',
						outcome:
							'Die Besten bleiben ein Quartal länger – müde Augen über vollen ' +
							'Konten. Geld misst alles, aber es bedeutet nichts. Die Sinnfrage ' +
							'steht nicht auf der Gehaltsabrechnung.'
					}
				],
				crisis:
					'Orange optimiert brillant innerhalb des Spiels – aber es kann das Spiel ' +
					'selbst nicht infrage stellen. Erschöpfte Menschen, beschädigte Ökosysteme ' +
					'und die Sinnleere sind keine Effizienzprobleme. Auf Orange sind sie unlösbar.',
				nextSolution:
					'Der Blick auf das Ganze der Gemeinschaft: Beziehungen statt Kennzahlen, ' +
					'Zuhören statt Übertrumpfen, Verantwortung für Mensch und Natur. Alle ' +
					'Stimmen zählen, nicht nur die lauten und schnellen. ' +
					'Das ist der Schritt nach GRÜN.'
			},
			oer: [
				{
					label: 'Wikipedia: Leistungsgesellschaft',
					url: 'https://de.wikipedia.org/wiki/Leistungsgesellschaft',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Externer Effekt (externalisierte Kosten)',
					url: 'https://de.wikipedia.org/wiki/Externer_Effekt',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die orange Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-orange/'
				},
				methods: [
					{ label: 'Getting Things Done', url: 'https://karlhosang.de/getting-things-done-gtd-skizze/' },
					{ label: 'OKRs', url: 'https://karlhosang.de/okrs/' },
					{ label: '7 Wege zur Effektivität', url: 'https://karlhosang.de/die-7-wege-zur-effektivitaet/' },
					{ label: 'Innovations-Methoden', url: 'https://karlhosang.de/innovations-methoden/' },
					{ label: 'Coaching als Business', url: 'https://karlhosang.de/coaching-business/' },
					{ label: 'Gamification', url: 'https://karlhosang.de/was-ist-gamification/' },
					{ label: 'Design Thinking', url: 'https://karlhosang.de/design-thinking/' }
				]
			}
		},
		{
			id: 'gruen',
			order: 6,
			code: 'FS',
			tier: 1,
			name: 'Grün',
			subtitle: 'Gemeinschaft & Empathie',
			color: '#2e8b57',
			textTone: 'light',
			motto: '„Alle Stimmen zählen – wir entscheiden gemeinsam.“',
			world:
				'Die Welt ist ein Beziehungsgeflecht: Jeder Mensch hat seine Wahrheit, ' +
				'jede Kultur ihren Wert. Hierarchien machen misstrauisch, Konsens schafft ' +
				'Vertrauen. Gefühle dürfen sein, Schwache werden gehört, die Erde wird geschützt.',
			gains: ['Empathie & Inklusion', 'ökologisches Bewusstsein', 'flache Strukturen'],
			shadow: ['Entscheidungslähmung', 'Relativismus: nichts darf mehr gelten'],
			conflict: {
				title: 'Der Konsens, der nicht kommt',
				intro:
					'Eure Gemeinschaft entscheidet alles im Konsens – das ist euer Stolz. ' +
					'Jetzt muss das Dach des Gemeinschaftshauses vor dem Winter saniert ' +
					'werden, und die Förderfrist läuft in zwei Wochen ab. Drei Gruppen ' +
					'haben drei unvereinbare Vorstellungen. Jede Sichtweise ist ' +
					'„gleich gültig“. Die Zeit nicht.',
				options: [
					{
						label: 'Noch einen Gesprächskreis einberufen',
						outcome:
							'Der Kreis ist warm, das Zuhören echt – und nach sechs Stunden ' +
							'vertagt ihr euch wieder. Reden ersetzt kein Entscheiden. ' +
							'Die Frist rückt näher.'
					},
					{
						label: 'Einfach abstimmen lassen – Mehrheit entscheidet',
						outcome:
							'Die Mehrheit gewinnt, die Minderheit fühlt sich überrollt – ' +
							'„das ist ja wie früher!“. Zwei Familien ziehen aus. Ihr habt ' +
							'eine Entscheidung – und einen Riss in der Gemeinschaft.'
					},
					{
						label: 'Den Konflikt vertagen – Harmonie geht vor',
						outcome:
							'Der Winter fragt nicht nach Harmonie. Die Frist verstreicht, ' +
							'es regnet in den Gemeinschaftsraum. Vermiedener Konflikt ist ' +
							'nur verschobener Konflikt – mit Wasserschaden.'
					}
				],
				crisis:
					'Grün hat das Zuhören perfektioniert – und das Entscheiden verlernt. ' +
					'Wenn alle Sichtweisen gleich gültig sind, gibt es kein Kriterium mehr, ' +
					'und Konsens skaliert nicht mit Dringlichkeit. Das Problem „entscheiden, ' +
					'ohne zu verletzen“ ist auf Grün unlösbar.',
				nextSolution:
					'Funktional denken: Nicht jede Frage braucht denselben Prozess. Manche ' +
					'brauchen den Kreis, manche Expertise, manche eine schnelle klare Ansage – ' +
					'und alle Ebenen der Spirale haben ihren Ort und Wert. Struktur folgt ' +
					'Aufgabe, nicht Ideologie. Das ist der Sprung nach GELB – ' +
					'in den zweiten Rang der Spirale.'
			},
			oer: [
				{
					label: 'Wikipedia: Postmaterialismus',
					url: 'https://de.wikipedia.org/wiki/Postmaterialismus',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Konsensprinzip',
					url: 'https://de.wikipedia.org/wiki/Konsensprinzip',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die grüne Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-gruen/'
				},
				methods: [
					{ label: 'Beziehungskompetenz', url: 'https://karlhosang.de/beziehungskompetenz/' },
					{ label: 'Achtsamkeit & Meditation', url: 'https://karlhosang.de/achtsamkeit-meditation/' },
					{ label: 'Sustainable Development Goals', url: 'https://karlhosang.de/sustainable-development-goals/' },
					{ label: 'Konfliktlösung & Mediation', url: 'https://karlhosang.de/konfliktloesung/' },
					{ label: 'Trauma-Integration', url: 'https://karlhosang.de/trauma-integration/' },
					{ label: 'Somatic Experiencing', url: 'https://karlhosang.de/anleitung-somatic-experiencing-in-9-schritten/' },
					{ label: 'Holokratie', url: 'https://karlhosang.de/holokratie/' },
					{ label: 'Gewaltfreie Kommunikation (GFK)', url: 'https://karlhosang.de/gewaltfreie-kommunikation-gfk/' },
					{ label: 'Heldenreise', url: 'https://karlhosang.de/heldenreise-seminar-joseph-campbell/' }
				]
			}
		},
		{
			id: 'gelb',
			order: 7,
			code: 'GT',
			tier: 2,
			name: 'Gelb',
			subtitle: 'Integral & systemisch',
			color: '#d9b515',
			textTone: 'dark',
			motto: '„Was braucht dieses System – jetzt, hier, von mir?“',
			world:
				'Die Welt ist ein lebendiges System aus Systemen. Zum ersten Mal sieht ' +
				'man die ganze Spirale: Jede Ebene war eine notwendige Antwort, keine ist ' +
				'„böse“. Angstfrei, flexibel, kompetenzorientiert – Komplexität ist ' +
				'kein Feind mehr, sondern Material.',
			gains: ['Systemdenken', 'Flexibilität ohne Dogma', 'alle Ebenen integrieren'],
			shadow: ['einsame Einsicht', 'Distanz statt Verbundenheit'],
			conflict: {
				title: 'Die Einsicht, die niemand umsetzt',
				intro:
					'Du verstehst die großen Zusammenhänge – Klima, Lieferketten, Politik, ' +
					'Psychologie. Du siehst, wo die Hebel liegen, und entwirfst elegante ' +
					'Lösungen, die alle Ebenen mitnehmen. Aber: Die Konzerne misstrauen den ' +
					'Aktivisten, die Aktivisten den Behörden, die Behörden einander. ' +
					'Und du bist allein mit deiner Landkarte.',
				options: [
					{
						label: 'Ein noch besseres Konzept ausarbeiten',
						outcome:
							'Das Papier ist brillant. Es überzeugt alle, die es lesen – ' +
							'alle zwölf. Einsicht allein bewegt keine Systeme, in denen ' +
							'Millionen fühlen, fürchten und hoffen.'
					},
					{
						label: 'Jeden Akteur einzeln in seiner Sprache überzeugen',
						outcome:
							'Es funktioniert – einer nach dem anderen. Aber die Krise rechnet ' +
							'in Jahren, dein Ansatz in Jahrzehnten. Ein kluger Kopf skaliert nicht.'
					},
					{
						label: 'Allein ein Pilotprojekt aufbauen',
						outcome:
							'Das Projekt gelingt und bleibt eine Insel. Die Welt drumherum ' +
							'bewundert es – und macht weiter wie bisher. Inseln verändern ' +
							'keine Ozeane.'
					}
				],
				crisis:
					'Gelb durchschaut die Systeme – als Einzelne:r. Doch planetare Probleme ' +
					'übersteigen jede individuelle Intelligenz. Was fehlt, ist kein besseres ' +
					'Denken, sondern ein gemeinsames Fühlen und Handeln als verbundenes Ganzes. ' +
					'Das ist auf Gelb allein unlösbar.',
				nextSolution:
					'Die Erde als ein lebendiges Ganzes erfahren – nicht nur verstehen. ' +
					'Kollektive Intelligenz, globale Identität, Wissenschaft und Spiritualität ' +
					'verbunden: Das Ich denkt nicht mehr nur über das Ganze nach, es weiß ' +
					'sich als Teil davon. Das ist der Schritt nach TÜRKIS.'
			},
			oer: [
				{
					label: 'Wikipedia: Systemdenken',
					url: 'https://de.wikipedia.org/wiki/Systemdenken',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Integrale Theorie (Ken Wilber)',
					url: 'https://de.wikipedia.org/wiki/Integrale_Theorie',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die gelbe Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-gelb/'
				},
				methods: [
					{ label: 'Komplexe menschliche Systeme', url: 'https://karlhosang.de/komplexe-menschliche-systeme-eigenschaften/' },
					{ label: 'Organisationsdesign', url: 'https://karlhosang.de/organisationsdesign/' },
					{ label: 'Visionspyramide', url: 'https://karlhosang.de/visionspyramide/' },
					{ label: 'Systemische Fragetechniken', url: 'https://karlhosang.de/systemische-fragetechniken/' },
					{ label: 'Agile Methoden / Mindset', url: 'https://karlhosang.de/agile-mindset/' },
					{ label: 'Facilitation', url: 'https://karlhosang.de/facilitation-kompetenz/' },
					{ label: 'Systemisches Design Thinking', url: 'https://karlhosang.de/systemisches-design-thinking/' }
				]
			}
		},
		{
			id: 'tuerkis',
			order: 8,
			code: 'HU',
			tier: 2,
			name: 'Türkis',
			subtitle: 'Holistisch & global',
			color: '#168f8f',
			textTone: 'light',
			motto: '„Alles Leben ist ein einziges, verbundenes Ganzes.“',
			world:
				'Die Welt ist ein einziger Organismus: Mensch, Biosphäre und Kosmos als ' +
				'verwobenes Feld. Denken und Fühlen, Wissenschaft und Spiritualität, ' +
				'Ich und Wir fließen zusammen. Gehandelt wird aus Verbundenheit – ' +
				'im Dienst des Lebens selbst.',
			gains: ['globale Identität', 'kollektive Intelligenz', 'Ganzheit von Kopf und Herz'],
			shadow: ['noch kaum gelebt – mehr Ahnung als Alltag'],
			isFinal: true,
			reflection: {
				title: 'Die Spirale ist offen',
				intro:
					'Du hast acht Wellen durchlebt – jede war Antwort und Ursache zugleich. ' +
					'Auch Türkis ist kein Gipfel: Eines Tages wird es Probleme erzeugen, ' +
					'die erst eine nächste, heute unbekannte Ebene lösen kann. ' +
					'Die Spirale endet nicht. Sie dreht sich weiter – durch uns.',
				questions: [
					'In welchen Lebensbereichen lebst du welche Ebene – Familie, Arbeit, Krise?',
					'Welcher Übergang auf dieser Reise kam dir am bekanntesten vor?',
					'Welche Konflikte in deinem Umfeld sind vielleicht Ebenen-Konflikte – ' +
					'unlösbar mit den Mitteln, mit denen sie gerade ausgetragen werden?',
					'Und: Welche Probleme unserer Zeit kann vielleicht erst eine Ebene lösen, ' +
					'die es noch gar nicht gibt?'
				],
				finishLabel: 'Reise abschließen',
				restartLabel: 'Reise von vorn beginnen',
				outro:
					'Denk daran: Menschen sind keine Farben. Die Spirale beschreibt ' +
					'Wertesysteme, nicht Wert von Menschen. Jede Ebene, die du durchlaufen ' +
					'hast, bleibt ein Teil von dir – und hat ihre Stunde.'
			},
			oer: [
				{
					label: 'Wikipedia: Holismus',
					url: 'https://de.wikipedia.org/wiki/Holismus',
					license: 'CC BY-SA'
				},
				{
					label: 'Wikipedia: Gaia-Hypothese',
					url: 'https://de.wikipedia.org/wiki/Gaia-Hypothese',
					license: 'CC BY-SA'
				}
			],
			kh: {
				article: {
					label: 'Die türkise Ebene',
					url: 'https://karlhosang.de/spiral-dynamics-tuerkis/'
				},
				methods: [
					{ label: 'Overview-Effekt', url: 'https://karlhosang.de/overview-effekt/' },
					{ label: 'Transzendenz', url: 'https://karlhosang.de/transzendenz/' },
					{ label: 'Reinventing Mindfulness', url: 'https://karlhosang.de/achtsamkeits-methode-erfinden/' }
				]
			}
		}
	],
	sources: {
		heading: 'Quellen & freie Bildungsressourcen (OER)',
		note:
			'Die verlinkten Inhalte stehen unter freien Lizenzen (überwiegend CC BY-SA) ' +
			'und können für Bildungszwecke genutzt, geteilt und bearbeitet werden. ' +
			'Die Texte dieser Anwendung: CC BY-SA 4.0. „Spiral Dynamics“ ist ein Modell ' +
			'nach Clare W. Graves, ausgearbeitet von Don Beck und Christopher Cowan; ' +
			'es ist wissenschaftlich nicht allgemein anerkannt und hier als ' +
			'Reflexions-Werkzeug gedacht.',
		links: [
			{
				label: 'Wikipedia (en): Spiral Dynamics',
				url: 'https://en.wikipedia.org/wiki/Spiral_Dynamics',
				license: 'CC BY-SA'
			},
			{
				label: 'Wikipedia (de): Spiral Dynamics',
				url: 'https://de.wikipedia.org/wiki/Spiral_Dynamics',
				license: 'CC BY-SA'
			},
			{
				label: 'Wikipedia (en): Clare W. Graves',
				url: 'https://en.wikipedia.org/wiki/Clare_W._Graves',
				license: 'CC BY-SA'
			},
			{
				label: 'P2P Foundation Wiki: Spiral Dynamics',
				url: 'https://wiki.p2pfoundation.net/Spiral_Dynamics',
				license: 'frei lizenziert'
			},
			{
				label: 'Wikimedia Commons: Kategorie „Spiral Dynamics“ (Grafiken & Material)',
				url: 'https://commons.wikimedia.org/wiki/Category:Spiral_Dynamics',
				license: 'freie Lizenzen, je Datei'
			},
			{
				label: 'Karl Hosang: Spiral Dynamics meistern (Anleitung, Test & Materialien)',
				url: 'https://karlhosang.de/spiral-dynamics/',
				license: 'Artikel'
			}
		]
	}
};
