import React from 'react';

export default function ArtikelPagina() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-900 leading-relaxed">

      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-widest mb-4">
          <span className="border-b-2 border-blue-900 font-serif text-sm">DE TECHNOCRAAT</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight mb-6">
          Was het verzet van Dario Amodei tegen minister Hegseth het {"\"Ik ben Spartacus!\""}-moment van Silicon Valley?
        </h1>

        <p className="text-2xl text-gray-700 font-light mb-8 leading-snug">
          Het verzet van Dario Amodei tegen minister van {"\"Oorlog\""} Pete Hegseth,
          en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een
          keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
        </p>

        <div className="border-t border-gray-200 pt-6">
          <div className="mb-6">
            <address className="not-italic font-bold text-lg">Dominique Deckmyn</address>
            <time className="text-gray-500">13 maart 2026 om 23:59</time>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
              <span className="text-lg">▷</span> Luisteren
            </button>
            <button className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
              <span className="text-lg">Share</span> Delen
            </button>
          </div>
        </div>
      </header>


      <article className="space-y-6 text-lg text-justify">
        <p>
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
          tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great
          Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote
          publieke verklaringen.
        </p>

        <p>
          En ze hoeden er zich voor om Trump frontaal aan te vallen. De
          kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde amicus briefs,
          documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische
          strijjd tegen het Pentagon.
        </p>

        <p>
          Toch staat er rake taal in. De strafmaatregel die minister van {"\"Oorlog\""} Pete Hegseth
          Anthropic oplegt, namelijk het uitroepen tot {"\"risico voor de toeleveringsketen\""}, creëert
          {" \"een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het aandurft het oneens te zijn\""}.
        </p>

        <p>
          En dat staat in een document dat - indirect - ondertekend is door Amazon, Google en Apple (via de belangengroep Chamber of Progress).
        </p>

        <p>
          Is dit nu het {"\"Ik ben Spartacus!\""} moment van Silicon Valley? Nee, daarvoor is het allemaal
          veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije
          meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te
          formuleren, zeggen ze.
        </p>

        <p>
          Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs
          voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.
        </p>

        <p>
          Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te
          ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen
          invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu
          verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog
          wel steun voor het idee dat iedereen zijn zegje mag hebben.
        </p>

        <p>
          Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege
          het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan
          van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals vroeger.
        </p>

        <p>
          We zullen van deze ceo{"'"}s de komende jaren waarschijnlijk weinig politieke
          gevoelige uitspraken horen. Wanneer deze ceo{"'"}s zich in het verleden van hun progressiefste kant lieten zien, was dat
          (zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging.
        </p>

        <p>
          Het was eerder omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de
          werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met
          Defensie liet vallen. Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,
          en dat merk je.
        </p>

        <p>
          Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest
          geavanceerde LLM{"'"}s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe
          hebven om volgens hun overtuiging te handelen.
        </p>

        <p>
          Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze
          zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een
          ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
        </p>
      </article>

      <section className="mt-16 pt-8 border-t-2 border-black">
        <div className="border-l-4 border-black pl-4 mb-8 font-serif">
          <span className="block text-xs font-bold uppercase tracking-widest mb-2 font-sans text-gray-500">LEES OOK</span>
          <h3 className="text-xl font-bold leading-tight">ChatGPT boycotten, of meteen de hele big tech?</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Cultuur en media", "De Technocraat", "Artificiële intelligentie"].map((tag) => (
            <span key={tag} className="border border-black px-4 py-1 text-sm font-medium hover:bg-gray-100 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 p-4 text-sm text-gray-600">
          <button className="underline hover:text-black">Fout gezien? Meld het ons hier</button>
        </div>
      </section>
    </main>
  );
}