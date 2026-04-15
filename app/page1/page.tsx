export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Leidt AI-slop tot de dood van sociale media?</h1>
      <p className="text-gray-700 text-2xl">
        Sociale media slibben de jongste paar maanden angstwekkend snel
dicht met AI-slop: video’s met mensen die niet bestaan en
gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in
2026 naar kijken?
      </p>
      <p className="text-gray-700">De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen,
zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een
realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is:
willen we daarnaar blijven kijken?
Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de
enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes
die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op
Youtube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je worden
aangeboden van AI afkomstig.</p>
<p className="text-gray-700">Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent
een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen
leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan
de levens van celebrity’s en influencers – tijdperk twee. En nu komt er een stortvloed van
AI-video’s aan.
<p className="text-gray-700">Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel
wezen: hoe meer AI in onze feed, hoe minder video’s we bekijken van professionele
makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een
bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen.
Zijn we in 2026 dan zo veranderd?</p>
.</p>
<p className="text-gray-700">Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die
ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder
enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo’s,
onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, of wat ook je ding mag
zijn (elders op het internet krijgen pornoliefhebbers nu video’s te zien die almaar meer
tonen van wat ze willen, ook als dat anatomisch totaal onmogelijk is).</p>

<p className="text-gray-700">Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar
Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo’s, u krijgt
kattenvideo’s die nog veel schattiger zijn dan in het echt.
Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor
AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik
’m weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de
voornaamste auteur was.</p>
<p className="text-gray-700">De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het soms
lachen geblazen met sommige van die Sora-filmpjes (ook al mijd ik ze). Er is heus wel een
plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn
creatieve mensen die toffe, vaak heel grappige video’s maken die zonder AI onbetaalbaar
duur zouden zijn.</p>
<p className="text-gray-700">Maar horen ze thuis op Instagram en Facebook? Dat waren toch ‘sociale’ media, nietwaar?
Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een
computer gegenereerde video’s, aanbevolen door een algoritme? In die zin zien we nu de
dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.</p>
<p className="text-gray-700">Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast ‘Bits & atomen’
.</p>
<div className="max-w-3xl mb-8 border-l-2 border-black pl-4">
  <span className="block text-xs font-bold uppercase tracking-wider mb-2">
    Lees ook
  </span>
  <h1 className="text-xl md:text-2xl font-serif leading-snug">
    Kandidaat-product van het jaar: de AI-videogenerator. 
    "De acteursfilm zal duurder worden dan de superheldenproductie"
  </h1>
</div>

{/* De Tags sectie */}
<div className="flex flex-wrap gap-2 mb-10">
  {["Cultuur en media", "De Technocraat", "Artificiële intelligentie", "Mark Zuckerberg"].map((tag) => (
    <span 
      key={tag} 
      className="border border-black px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer transition-colors"
    >
      {tag}
    </span>
  ))}
</div>
        

    </div>
  )
}
