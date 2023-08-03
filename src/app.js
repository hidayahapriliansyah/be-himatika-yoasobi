const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors({
  origin: '*',
}));

const dataStatic = [
  {
    _id: 1,
    title: 'YOASOBI「アイドル」- Idol - Official Music Video',
    link: 'https://www.youtube.com/embed/ZRtdQ81jPUQ',
    lyric: `
      <div>Muteki no egao de arasu media</div>
      <div>Shiritai sono himitsu mysterious</div>
      <div>Nuketeru toko sae kanojo no area</div>
      <div>Kanpeki de usotsuki na kimi wa</div>
      <div>Tensaiteki na Idol-sama</div>
      <div><br/></div>
      <div>Kyou nani tabeta?</div>
      <div>Suki na hon wa?</div>
      <div>Asobi ni iku nara doko ni iku no?</div>
      <div>Nani mo tabetenai</div>
      <div>Sore wa naisho</div>
      <div>Nani wo kikarete mo</div>
      <div>Norari kurari</div>
      <div><br/></div>
      <div>Sou tantan to dakedo sansan to</div>
      <div>Mie sou de mienai himitsu wa mitsu no aji</div>
      <div>Are mo nai nai nai</div>
      <div>Kore mo nai nai nai</div>
      <div>Suki na taipu wa?</div>
      <div>Aite wa?</div>
      <div>Saa kotaete</div>
      <div><br/></div>
      <div>"Dareka wo suki ni naru koto nante watashi wakaranakute sa"</div>
      <div>Uso ka hontou ka shirienai</div>
      <div>Sonna kotoba ni mata hitori ochiru</div>
      <div>Mata suki ni saseru</div>
      <div><br/></div>
      <div>Dare mo ga me wo ubawareteiku</div>
      <div>Kimi wa kanpeki de kyuukyoku no Idol</div>
      <div>Konrinzai arawarenai</div>
      <div>Ichiban boshi no umarekawari</div>
      <div>Sono egao de aishiteru de</div>
      <div>Dare mo kare mo toriko ni shiteiku</div>
      <div>Sono hitomi ga sono kotoba ga</div>
      <div>Uso demo sore wa kanzen na Ai</div>
      <div><br/></div>
      <div>Hai hai ano ko wa tokubetsu desu</div>
      <div>Wareware wa hana kara omakedesu</div>
      <div>Ohoshi-sama no hikitateyaku B desu</div>
      <div>Subete ga ano ko no okage na wake nai</div>
      <div>Sharakusai</div>
      <div>Netami shitto nante nai wake ga nai</div>
      <div>Kore wa neta janai</div>
      <div>Kara koso yurusenai</div>
      <div>Kanpeki janai kimi ja yurusenai</div>
      <div>Jibun wo yurusenai</div>
      <div>Dare yori mo tsuyoi kimi igai wa mitomenai</div>
      <div><br/></div>
      <div>Dare mo ga shinji agameteru</div>
      <div>Masani saikyou de muteki no Idol</div>
      <div>Jakuten nante miataranai</div>
      <div>Ichiban boshi wo yado shiteiru</div>
      <div>Yowai toko nante misecha dame dame</div>
      <div>Shiritakunai toko wa misezu ni</div>
      <div>Yuiitsu muni janakucha iya iya</div>
      <div>Sore koso honmono no ai</div>
      <div><br/></div>
      <div>Tokui no egao de wakasu media</div>
      <div>Kakushi kiru kono himitsu dake wa</div>
      <div>Aishiteru tte uso de tsumu kyaria</div>
      <div>Kore koso watashi nari no ai da</div>
      <div>Nagareru ase mo kirei na Aqua</div>
      <div>Ruby wo kakushita kono mabuta</div>
      <div>Utai odori mau watashi wa Maria</div>
      <div>Sou uso wa tobikiri no ai da</div>
      <div><br/></div>
      <div>Dareka ni aisareta koto mo</div>
      <div>Dareka no koto aishita koto mo nai</div>
      <div>Sonna watashi no uso ga itsuka hontou ni naru koto</div>
      <div>Shinjiteru</div>
      <div><br/></div>
      <div>Itsuka kitto zenbu te ni ireru</div>
      <div>Watashi wa sou yokubari na Idol</div>
      <div>Toushindai de minna no koto</div>
      <div>Chanto aishitai kara</div>
      <div>Kyou mo uso wo tsuku no</div>
      <div>Kono kotoba ga itsuka hontou ni naru hi wo negatte</div>
      <div>Soredemo mada</div>
      <div>Kimi to kimi ni dake wa iezu ni ita kedo</div>
      <div>Yatto ieta</div>
      <div>Kore wa zettai uso janai</div>
      <div>Aishiteru</div>
    `,
  },
  {
    _id: 11,
    title: 'YOASOBI「セブンティーン」- Monster - Official Music Video',
    link: 'https://www.youtube.com/embed/0yoM7ETNPIY',
    lyric: `
      <div>Subarashiki sekai ni kyou mo kanpai</div>
      <div>Machi ni tobikau waraigoe mo</div>
      <div>Mite minu furi shiteru dake no tsukuri mon sa</div>
      <div>Ki ga fure sou da</div>
      <div><br/></div>
      <div>Kurakura suru hodo no ii nioi ga</div>
      <div>Tsun to sashita hana no oku</div>
      <div>Me wo samasu honnou no mama</div>
      <div>Kyou wa dare no ban da?</div>
      <div><br/></div>
      <div>Kono sekai de nani ga dekiru no ka</div>
      <div>Boku ni wa nani ga dekiru no ka</div>
      <div>Tada sono makkuro na me kara</div>
      <div>Namida kobore ochinai you ni</div>
      <div><br/></div>
      <div>Negau mirai ni nando demo zutto</div>
      <div>Kuraitsuku</div>
      <div>Kono machigai darake no sekai no naka</div>
      <div>Kimi ni wa waratte hoshii kara</div>
      <div>Mou dare mo kizutsukenai</div>
      <div>Tsuyoku tsuyoku naritainda yo</div>
      <div>Boku ga boku de irareru you ni</div>
      <div><br/></div>
      <div>Subarashiki sekai wa kyou mo antai</div>
      <div>Machi ni uzumaku warui hanashi mo</div>
      <div>Shiranai shiranai furi shite me wo sorashita</div>
      <div>Shouki no sata janai na</div>
      <div><br/></div>
      <div>Majime ni kikazatta koushin</div>
      <div>Narasu ashioto ga hazumu ikisaki wa</div>
      <div>Kienai kienai aji ga shimitsuiteiru</div>
      <div>Uragawa no sekai</div>
      <div><br/></div>
      <div>Kiyoku tadashiku ikiru koto</div>
      <div>Dare mo kanashimasezu ni ikiru koto</div>
      <div>Hamidasazu massugu ni ikiru koto</div>
      <div>Sore ga machiga wa nai de ikiru koto?</div>
      <div><br/></div>
      <div>Ari no mama ikiru koto ga seigi ka</div>
      <div>Damashi damashi ikiru no wa seigi ka</div>
      <div>Boku no arubeki sugata to wa nanda</div>
      <div>Hontou no boku wa nanimono nanda</div>
      <div>Oshiete kure yo</div>
      <div>Oshiete kure yo</div>
      <div><br/></div>
      <div>Kyou mo kotae no nai sekai no naka de</div>
      <div>Negatterunda yo bukiyou da keredo</div>
      <div>Itsumade mo kimi to tada waratteitai kara</div>
      <div>Haneru shinzou ga karada yurashi sakebunda yo</div>
      <div>Ima koso ugokidase</div>
      <div><br/></div>
      <div>Yowai jibun wo nando demo zutto</div>
      <div>Kurai tsukusu</div>
      <div>Kono machigai darake no sekai no naka</div>
      <div>Kimi ni wa waratte hoshii kara</div>
      <div>Mou dare mo nakanai you</div>
      <div>Tsuyoku tsuyoku naritainda yo</div>
      <div>Boku ga boku de irareru you ni</div>
      <div><br/></div>
      <div>Tada kimi wo mamoru sono tame ni</div>
      <div>Hashiru hashiru hashirunda yo</div>
      <div>Boku no naka no boku wo koeru</div>
    `,
  },
  {
    _id: 2,
    title: 'YOASOBI「優しい彗星」Official Music Video　(YOASOBI - Comet)',
    link: 'https://www.youtube.com/embed/VyvhvlYvRnc',
    lyric: `
      <div>Ima, shizuka na yoru no naka de</div>
      <div>Mukeikaku ni kuruma wo hashiraseta</div>
      <div>Hidari donari, anata no yokogao wo tsuki ga terashita</div>
      <div><br/></div>
      <div>Tada, omoide wo saguru you ni</div>
      <div>Tadoru you ni kotoba wo tsunagi awasereba</div>
      <div>Dou shiyou mo naku afurete kuru hibi no kioku</div>
      <div><br/></div>
      <div>Anata no soba de ikiru to kimeta sono hi kara</div>
      <div>Sukoshi zutsu kawari hajimeta sekai</div>
      <div>Tsuyoku aru you ni yowasa wo kakusu you ni</div>
      <div>Enjite kita hibi ni</div>
      <div><br/></div>
      <div>Aru hi totsuzen arawareta sono manazashi ga</div>
      <div>Shiranakatta koto oshiete kureta</div>
      <div>Mamorubeki mono ga areba sore dake de</div>
      <div>Konna ni mo tsuyoku narerunda</div>
      <div><br/></div>
      <div>Fukai fukai kurayami no naka de</div>
      <div>Deai, tomo ni sugoshite kita</div>
      <div>Rui no nai hibi</div>
      <div>Kokochi yokatta</div>
      <div>Iya, shiawase datta</div>
      <div>Tashika ni hora</div>
      <div>Sukuwaretanda yo</div>
      <div>Anata ni</div>
      <div><br/></div>
      <div>Wazuka na hikari wo toraete kagayaita no wa</div>
      <div>Marude nagareboshi no you na namida</div>
      <div>Bukiyou na inochi kara nagarete kobore ochita</div>
      <div>Utsukushii namida</div>
      <div><br/></div>
      <div>Tsuyoku ooki na karada ni himeta yasashisa mo</div>
      <div>Dokoka kurushige na sono kao mo</div>
      <div>Itoshiku omounda</div>
      <div>Sugata katachi janainda</div>
      <div>Yatto kidzuitanda</div>
      <div><br/></div>
      <div>Mujou ni hibiku juusei ga yoru wo hikisaku</div>
      <div>Wakare no ibuki ga osoi kakaru</div>
      <div>Setsuna ni kagayaita mujihi na nagareboshi</div>
      <div>Inori wa tada todokazu ni kieta</div>
      <div><br/></div>
      <div>Kono, te no naka de moetsukita</div>
      <div>Kin'iro no yasashii suisei wo</div>
      <div>Utsukushii tategami wo kurayami no naka nigirishimeta</div>
    `,
  },
  {
    _id: 3,
    title: 'YOASOBI「三原色」Official Music Video - Sangenshoku',
    link: 'https://www.youtube.com/embed/nhOhFOoURnE',
    lyric: `
    <div>Dokoka de togireta monogatari</div>
    <div>Bokura mou ichido sono saki e</div>
    <div>Tatoe nando hanarete shimatte mo</div>
    <div>Hora tsunagatteiru</div>
    <div><br/></div>
    <div>Sore ja mata ne kawashita kotoba</div>
    <div>Are kara ikutsu asahi wo mitanda</div>
    <div>Sorezore no kurashi no saki de</div>
    <div>Ano hi no tsudzuki saikai no hi</div>
    <div><br/></div>
    <div>Machiawase made no jikan ga tada</div>
    <div>Sugite yuku tabi ni mune ga takanaru</div>
    <div>Ame agari no sora miagereba</div>
    <div>Ano hi to onaji you ni kakaru nanairo no hashi</div>
    <div><br/></div>
    <div>Koko de mou ichido deaetanda yo</div>
    <div>Bokura tsunagatte itanda zutto</div>
    <div>Hanashitai koto tsutaetai koto tte</div>
    <div>Afurete tomaranai kara</div>
    <div>Hora hodokete iya shinai yo, kitto</div>
    <div>Meguru kisetsu ni sekasarete</div>
    <div>Tsudzuku michi no sono saki mata</div>
    <div>Hanaretatte sa nando datte sa</div>
    <div>Tsuyoku musubi naoshita nara</div>
    <div>Mata aeru</div>
    <div><br/></div>
    <div>Nandakke?</div>
    <div>Omoide banashi wa tomannai ne</div>
    <div>Tadotta kioku to kaisou</div>
    <div>Nazotte waratte wa</div>
    <div>Aita jikan wo mitasu</div>
    <div>Kotoba to kotoba de kidzukeba shootokatto</div>
    <div>Ashita no koto wa ki ni sezu douzo</div>
    <div>Marude mukashi ni modotta you na</div>
    <div>Soredemo kawatte shimatta koto datte</div>
    <div>Hontou wa kitto ikutsu mo aru</div>
    <div>Dakedo kyou datte</div>
    <div>Akkenai hodo</div>
    <div>Ano koro no mama de</div>
    <div><br/></div>
    <div>Kidzukeba sora wa shirami hajime</div>
    <div>Tsukarehateta bokura no katahoho ni</div>
    <div>Fureru honoka na atatakasa</div>
    <div>Ano hi to onaji you ni sorezore no hibi ni kaeru</div>
    <div><br/></div>
    <div>Nee koko made aruite kita</div>
    <div>Michi wa sorezore chigau keredo</div>
    <div>Onaji asahi ni ima terasareteru</div>
    <div>Mata kasanari aetanda</div>
    <div><br/></div>
    <div>Dokoka de togireta monogatari</div>
    <div>Bokura mou ichido sono saki e</div>
    <div>Hanashitai koto tsutaetai koto tte</div>
    <div>Peeji wo umete yuku you ni</div>
    <div>Hora kakitasou yo, nando demo</div>
    <div><br/></div>
    <div>Itsuka miageta
      <span style="color: #cc0000;">akai</span>
      yuuhi mo</div>
    <div>Tomo ni sugoshita
      <span style="color: #2b00fe;">aoi</span>
      hibi mo</div>
    <div>Wasurenai kara kie ya shinai kara</div>
    <div>
      <span style="color: #6aa84f;">Midori</span>
      ga mebuku you ni mata aeru kara</div>
    <div>Monogatari wa shiroi asahi kara hajimaru</div>
    <div>"Mata ashita"</div>
    `,
  },
  {
    _id: 4,
    title: 'YOASOBI - Tabun (Mungkin saja) Official Music Video',
    link: 'https://www.youtube.com/embed/8iuLXODzL04',
    lyric: `
      <div>Namida nagasu koto sura nai mama</div>
      <div>Sugoshita hibi no ato hitotsu mo nokosazu ni</div>
      <div>Sayonara da</div>
      <div><br/></div>
      <div>Hitori de mukaeta asa ni</div>
      <div>Narihibiku dareka no oto</div>
      <div>Futari de sugoshita heya de</div>
      <div>Me wo tojita mama kangaeteta</div>
      <div><br/></div>
      <div>Warui no wa dare da</div>
      <div>Wakannai yo</div>
      <div>Dare no sei demo nai</div>
      <div>Tabun</div>
      <div><br/></div>
      <div>Bokura wa nankai datte kitto</div>
      <div>Sou nannen datte kitto</div>
      <div>Sayonara to tomo ni owaru dake nanda</div>
      <div>Shikata ga nai yo kitto</div>
      <div>"Okaeri"</div>
      <div>Omowazu koboreta kotoba wa</div>
      <div>Chigau na</div>
      <div><br/></div>
      <div>Hitori de mukaeta asa ni</div>
      <div>Futo omou dareka no koto</div>
      <div>Futari de sugoshita hibi no</div>
      <div>Atarimae ga mada nokotteiru</div>
      <div><br/></div>
      <div>Warui no wa kimi da</div>
      <div>Sou dakke</div>
      <div>Warui no wa boku da</div>
      <div>Tabun</div>
      <div><br/></div>
      <div>Kore mo taishuuteki renai desho</div>
      <div>Sore wa saishuuteki na kotae da yo</div>
      <div>Bokura dandan to zurete itta no</div>
      <div>Sore mo tada yoku arukiki nareta sutoorii da</div>
      <div>Anna ni kagayaiteita hibi ni sura</div>
      <div>Hokori wa tsumotte ikunda</div>
      <div><br/></div>
      <div>Bokura wa nankai datte kitto</div>
      <div>Sou nannen datte kitto</div>
      <div>Sayonara ni tsuzuku michi wo arukunda</div>
      <div>Shikata ga nai yo kitto</div>
      <div>&#8220;Okaeri&#8221;</div>
      <div>Itsumo no you ni</div>
      <div>Koboreochita</div>
      <div><br/></div>
      <div>Wakariaenai koto nante sa</div>
      <div>Ikura demo arun da kitto</div>
      <div>Subete wo yurushiaeru wake janai kara</div>
      <div>Tada, yasashisa no hibi wo</div>
      <div>Tsurai hibi to kanjite shimatta no nara</div>
      <div>Modorenai kara</div>
      <div><br/></div>
      <div>Bokura wa nankai datte kitto</div>
      <div><br/></div>
      <div>Bokura wa nankai datte kitto</div>
      <div>Sou nannen datte kitto</div>
      <div>Sayonara to tomo ni owaru dake nanda</div>
      <div>Shikata ga nai yo kitto</div>
      <div>"Okaeri"</div>
      <div>Omowazu koboreta kotoba wa</div>
      <div>Chigau na</div>
      <div><br/></div>
      <div>Sore demo nankai datte kitto</div>
      <div>Sou nannen datte kitto</div>
      <div>Hajimari ni modoru koto ga dekita nara</div>
      <div>Nante, omotte shimau yo</div>
      <div>&#8220;Okaeri&#8221;</div>
      <div>Todokazu koboreta kotoba ni</div>
      <div>Waratta</div>
    `,
  },
  {
    _id: 5,
    title: 'YOASOBI「アドベンチャー」Official Music Video - Adventure',
    link: 'https://www.youtube.com/embed/Av3xaZkVpJs',
    lyric: `
      <div>Itsumo no ichinichi kara nukedashite</div>
      <div>Me ga sameru you na bouken no butai e</div>
      <div>Mawaru chikyuugi wo mejirushi ni</div>
      <div>Saa ima ai ni ikou</div>
      <div>Tokubetsu na ichinichi ni</div>
      <div><br/></div>
      <div>Midori moyuru atarashii kisetsu ni</div>
      <div>Hitori mitsumeta buruu raito</div>
      <div>Kao mo shiranai tomodachi ni mo mitanai kurasumeito</div>
      <div>Souteigai no kurashi</div>
      <div><br/></div>
      <div>Konnan janai</div>
      <div>Mousou shita risou to mahantai ni</div>
      <div>Tantan to sugiru mainichi</div>
      <div>Demo yatto aeru ne</div>
      <div>Souzou to genjitsu ga majiwatte</div>
      <div>Takanaru mune osaerarenai</div>
      <div><br/></div>
      <div>Yakusoku no basho wa</div>
      <div>Yume miteita basho</div>
      <div>Wasurerarenai ichinichi ga</div>
      <div>Ima hajimaru</div>
      <div><br/></div>
      <div>Machi ni matta kyou wa tokubetsu na hi</div>
      <div>Nichijou kara sukoshi hamidashite</div>
      <div>Hora shattaa wo kitte utsushidaseba</div>
      <div>Dou shitatte</div>
      <div>Koboreru you na egao bakari</div>
      <div><br/></div>
      <div>Dareka ga iidashite tobinotta koosutaa mo</div>
      <div>Osoroi no kachuusha mo</div>
      <div>Kakegae no nai shunkan de afureteru</div>
      <div>Machi jikan sae mo itoshiku omoeru</div>
      <div><br/></div>
      <div>Tsugi wa doko ni ikou ka</div>
      <div>Karoyaka ni aruku</div>
      <div>Fushigi na hodo ni</div>
      <div>Ki ga tsukeba sugiteiru jikan</div>
      <div><br/></div>
      <div>Taiyou ga shizunda machi wo kazaru</div>
      <div>Hikari ga orinasu pareido ni</div>
      <div>Kokoro ubaware kamishimeru</div>
      <div>Hontou ni koko ni korete yokatta na</div>
      <div><br/></div>
      <div>Machi ni matta kyou wa tokubetsu na hi</div>
      <div>Itsumo doori kara tobidashite</div>
      <div>Hora shattaa wo kitte mo utsusenai</div>
      <div>Omoide ga itsudemo matteiru</div>
      <div>Haru mo natsu mo aki mo fuyu mo</div>
      <div>Kono basho de mitsuketa egao ga</div>
      <div>Hirahira to ikutsu mo tsumotte yuku</div>
      <div>Saa tsugi wa itsu ai ni ikeru ka na</div>
      <div><br/></div>
      <div>Atarimae kara nukedashite</div>
      <div>Genkai no nai bouken no butai e</div>
      <div>Mawaru chikyuugi wo mejirushi ni</div>
      <div>Saa ima ai ni ikou</div>
      <div>Tokubetsu na ichinichi ni</div>
    `,
  },
  {
    _id: 6,
    title: 'YOASOBI "Halzion"',
    link: 'https://www.youtube.com/embed/kzdJkT4kp-A',
    lyric: `
      <div>yuku toki no naka anata wo omoidasu</div>
      <div>Monouge ni nagameru gamen ni utsutta futari waratteita</div>
      <div><br/></div>
      <div>Shiritakunai hodo shiri sugiteku koto</div>
      <div>Tada sugiru hibi ni nomikomareta no</div>
      <div>Soredemo tada mou ichido dake aitakute</div>
      <div><br/></div>
      <div>Anata no kotoba ni unazuki shinjita watashi wo hitori okizari ni toki wa sugiru</div>
      <div>Mieteita hazu no mirai mo yubi no sukima wo surinuketa</div>
      <div>Modorenai hibi no kakera to anata no kehai wo ima demo sagashite shimau yo</div>
      <div>Mada ano hi no futari ni te wo nobashiteru</div>
      <div><br/></div>
      <div>Kyoukai-sen wa jibun de hiita</div>
      <div>'Genjitsu wa' tte minai furi wo shite ita</div>
      <div>Sonna watashi ja mienai mienai</div>
      <div>Kyoukai-sen no mukou ni saita</div>
      <div>Senretsu na hana-tachi mo hontou wa mieteta no ni</div>
      <div><br/></div>
      <div>Shirazu shirazu no uchi ni</div>
      <div>Suri herashita kokoro no tobira ni kagi wo kaketa no</div>
      <div>Soko ni wa tada utsukushi-sa no nai</div>
      <div>Watashi dake ga nokosarete ita</div>
      <div>Ao sugiru sora ni me no oku ga shimita</div>
      <div>Ano hi no keshiki ni tori ni kaeru no</div>
      <div>Anata ga suki da to itte kureta watashi wo</div>
      <div><br/></div>
      <div>Dare ni mo misezu ni</div>
      <div>Kono te de kakushita omoi ga</div>
      <div>Ima mo watashi no naka de ikiteiru</div>
      <div>Me wo tojite mireba</div>
      <div>Ima mo azayaka ni yomigaeru keshiki to</div>
      <div>Modorenai hibi no kakera ga utsushidashita no wa</div>
      <div>Tsubomi no mama tojikometa mirai</div>
      <div>Mou ichido egakidasu</div>
      <div><br/></div>
      <div>Ano hi no anata no kotoba to utsukushii toki to futari de sugoshita ano keshiki ga</div>
      <div>Wasureteta omoi to nakushita hazu no mirai wo tsunaideiku</div>
      <div>Modorenai hibi no tsudzuki wo aruiteikunda</div>
      <div>Korekara mo, anata ga inakute mo</div>
      <div>Ano hi no futari ni te wo fureba</div>
      <div>Tashika ni ugokidashita mirai e</div>
    `,
  },
  {
    _id: 7,
    title: 'YOASOBI「ラブレター」Official Music Video - Love Letter',
    link: 'https://www.youtube.com/embed/mnta9Pp2LqA',
    lyric: `
      <div>Hajimemashite daisuki na ongaku e</div>
      <div>Zutto kangaeteta koto</div>
      <div>Douka kiite hoshikute</div>
      <div>(Tsutaetai koto ga arun desu)</div>
      <div>Chotto terekusai keredo</div>
      <div>Zutto omoteita koto</div>
      <div>Konna otegami ni komete</div>
      <div>(Todoite kuremasu you ni)</div>
      <div><br/></div>
      <div>Donna toki mo anata no</div>
      <div>Kotoba, koe wo kiiteiru dake de</div>
      <div>Chikara ga waitekurunda</div>
      <div><br/></div>
      <div>Nee warattetai yo donna toki mo</div>
      <div>Demo, tsurai kurai itai hi mo aru kedo ne</div>
      <div>Anata ni fureru dake de kizukeba</div>
      <div>Kono sekai wa iro azayaka ni naru</div>
      <div>Hana ga saku you ni</div>
      <div>Waratte naite donna toki datte</div>
      <div>Erande iinda itsudemo jiyuu ni</div>
      <div>Kyou wa donna anata ni deaeru ka na</div>
      <div>Kono sekai ga owaru sono hi made</div>
      <div>Nari tsuzuketeite</div>
      <div><br/></div>
      <div>Itsumo anata no koto wo motomechaunda</div>
      <div>(Odoridashitaku naru toki mo)</div>
      <div>(Bakuhatsu shichai sou na toki mo)</div>
      <div>Sukuwaretanda sasaerarete kitanda</div>
      <div>(Kokoro ga ugokasarerun desu)</div>
      <div>(Kokoro ga mitasaretekun desu)</div>
      <div>Nee motto fureteitai yo</div>
      <div>Zutto soba ni ite hoshii yo</div>
      <div>Itsumade mo daisuki na anata ga</div>
      <div>Hibiite imasu you ni</div>
      <div><br/></div>
      <div>Konna takusan no kimochi</div>
      <div>Kyutto tsumekonda omoi</div>
      <div>Chanto tsutaerareta ka na</div>
      <div>Chotto dake fuan dakedo</div>
      <div>Kitto todoite kureta yo ne</div>
      <div>Zenbu watashi no sunao na kotoba dakara</div>
      <div>Moshimo anata ni deaete nakatara nante</div>
      <div>Omou dake de kowai hodo daisuki nanda</div>
      <div><br/></div>
      <div>Uketote douka watashi no omoi wo</div>
      <div>Saa</div>
      <div>Waratte naite sonna mainichi wo</div>
      <div>Aruiteikunda itsumo itsumade mo</div>
      <div>Tsurai kurai itai koto mo takusan aru kedo</div>
      <div>Kono sekai wa itsudemo doko demo ongaku de afureteru</div>
      <div>Me no mae no koto mo shourai no koto mo</div>
      <div>Fuan ni natte dou shitara ii no</div>
      <div>Wakannakute mayou koto mo aru kedo</div>
      <div>Sonna toki mo kitto anata ga ite kurereba</div>
      <div>Mae wo mukerunda</div>
      <div><br/></div>
      <div>Konna kimochi ni naru no wa</div>
      <div>Konna omoi ga dekiru no wa</div>
      <div>Kitto ongaku dake nanda</div>
      <div>(Kawari nante hitotsu mo nain desu)</div>
      <div>Douka sennen saki mo</div>
      <div>Douka nariyamanai de</div>
      <div>Itsumo hontou ni arigatou</div>
    `,
  },
  {
    _id: 8,
    title: 'YOASOBI「群青」Official Music Video - Gunjou',
    link: 'https://www.youtube.com/embed/Y4nEEZwckuU',
    lyric: `
      <div>Aa, itsumo no you ni</div>
      <div>Sugiru hibi ni akubi ga deru</div>
      <div>Sanzameku yoru, koe, kyou mo</div>
      <div>Shibuya no machi ni asa ga furu</div>
      <div>Doko ka munashii you na</div>
      <div>Sonna kimochi</div>
      <div>Tsumaranai na</div>
      <div>Demo sore de ii</div>
      <div>Sonna mon sa</div>
      <div>Kore de ii</div>
      <div><br/></div>
      <div>Shirazu shirazu kakushiteta</div>
      <div>Hontou no koe wo hibikasete yo, hora</div>
      <div>Minai furi shite ite mo</div>
      <div>Tashika ni soko ni aru</div>
      <div><br/></div>
      <div>Kanjita mama ni egaku</div>
      <div>Jibun de eranda sono iro de</div>
      <div>Nemui kuuki matou asa ni</div>
      <div>Otozureta aoi sekai</div>
      <div>Suki na mono wo suki da to iu</div>
      <div>Kowakute shikatanai kedo</div>
      <div>Hontou no jibun</div>
      <div>Deaeta ki ga shita nda</div>
      <div><br/></div>
      <div>Aa, te wo nobaseba nobasu hodo ni</div>
      <div>Tooku e yuku</div>
      <div>Omou you ni ikanai, kyou mo</div>
      <div>Mata awatadashiku mogaiteru</div>
      <div>Kuyashii kimochi mo</div>
      <div>Tada nasakenakute</div>
      <div>Namida ga deru</div>
      <div>Fumikomu hodo</div>
      <div>Kurushiku naru</div>
      <div>Itaku mo naru</div>
      <div><br/></div>
      <div>Kanjita mama ni susumu</div>
      <div>Jibun de eranda kono michi wo</div>
      <div>Omoi mabuta kosuru yoru ni</div>
      <div>Shigamitsuita aoi chikai</div>
      <div>Suki na koto wo tsuzukeru koto</div>
      <div>Sore wa 'tanoshii' dake ja nai</div>
      <div>Hontou ni dekiru?</div>
      <div>Fuan ni naru kedo</div>
      <div><br/></div>
      <div>Nanmai de mo</div>
      <div>Hora nanmai de mo</div>
      <div>Jishin ga nai kara egaite kita nda yo</div>
      <div>Nankai de mo</div>
      <div>Hora nankai de mo</div>
      <div>Tsumiagete kita koto ga buki ni naru</div>
      <div>Mawari wo mi tatte</div>
      <div>Dare to kurabe tatte</div>
      <div>Boku ni shika dekinai koto wa na nda</div>
      <div>Ima demo jishin nanka nai</div>
      <div>Sore demo</div>
      <div><br/></div>
      <div>Kanjita koto nai kimochi</div>
      <div>Shirazu ni ita omoi</div>
      <div>Ano hi fumidashite</div>
      <div>Hajimete kanjita kono itami mo zenbu</div>
      <div>Suki na mono to mukiau koto de</div>
      <div>Fureta mada chiisana hikari</div>
      <div>Daijoubu, ikou, ato wa tanoshimu dake da</div>
      <div><br/></div>
      <div>Subete wo kakete egaku</div>
      <div>Jibun ni shika dasenai iro de</div>
      <div>Asa mo yoru mo hashiri tsuzuke</div>
      <div>Mitsukedashita aoi hikari</div>
      <div>Suki na mono to mukiau koto</div>
      <div>Ima datte kowai koto da kedo</div>
      <div>Mou ima wa ano hi no toumei na boku ja nai</div>
      <div>Arinomama no</div>
      <div>Kakegae no nai boku da</div>
      <div><br/></div>
      <div>Shirazu shirazu kakushiteta</div>
      <div>Hontou no koe wo hibikasete yo, hora</div>
      <div>Minai furi shite ite mo</div>
      <div>Tashika ni soko ni ima mo soko ni aru yo</div>
      <div>Shirazu shirazu kakushiteta</div>
      <div>Hontou no koe wo hibikasete yo, saa</div>
      <div>Minai furi shite ite mo</div>
      <div>Tashika ni soko ni kimi no naka ni</div>
    `,
  },
  {
    _id: 9,
    title: 'YOASOBI「アンコール」Official Music Video - Encore - Ankoru',
    link: 'https://www.youtube.com/embed/vcGbefQBvJ4',
    lyric: `
      <div>Ashita sekai wa owarunda tte</div>
      <div>Kimi ni wa mou aenainda tte</div>
      <div>Mata itsuka tte te wo futta tte</div>
      <div>Kanawanainda yo</div>
      <div>Shikatanai ne</div>
      <div><br/></div>
      <div>Ashita sekai wa owarunda tte</div>
      <div>Sore nara mou</div>
      <div>Sono toki made nando demo zutto</div>
      <div>Suki na oto wo narasou</div>
      <div><br/></div>
      <div>Usu kurayami ni tsutsumareta</div>
      <div>Mioboe no nai basho, me wo samasu</div>
      <div>Koko wa yoru no nai</div>
      <div>Sekai kyou de owaru sekai</div>
      <div>Sonna hi ni anata ni deatta</div>
      <div><br/></div>
      <div>Suki ni shite ii to</div>
      <div>Sore dake nokoshite</div>
      <div>Dokoka e yuku</div>
      <div>Anata no oto ga toozakatteku</div>
      <div>Soshite mata hitori</div>
      <div>Yodonda kuuki no naka de</div>
      <div><br/></div>
      <div>Arifureta ano hibi wo tada omoikaesu</div>
      <div>Owari ga kuru koto wo matsu sekai de</div>
      <div>Tsurai kako mo iya na kioku mo</div>
      <div>Wasurerarenai merody mo</div>
      <div>Kyou de sayonara</div>
      <div><br/></div>
      <div>Hitori kuruma wo hashiraseru</div>
      <div>Itonami no kieta machi no naka wo</div>
      <div>Ashita ni wa mou owaru kyou ni</div>
      <div>Nani wo negau</div>
      <div>Nani wo inoru</div>
      <div><br/></div>
      <div>Dokoka kara fui ni</div>
      <div>Kasuka ni kikoete kita no wa</div>
      <div>Piano no oto</div>
      <div>Tooi hi no oto</div>
      <div><br/></div>
      <div>Sasowareru mama ni</div>
      <div>Kokyuu wo awaseru you ni</div>
      <div>Kasaneta oto</div>
      <div>Gokochi yokute</div>
      <div>Natsukashikute</div>
      <div>Ikutsu mo afurete kuru</div>
      <div><br/></div>
      <div>Itsushika futa wo shite tojikometeita kioku</div>
      <div>Kanaderu oto ga tsurete kita omoide</div>
      <div>Ki ga tsukeba tomatta piano</div>
      <div>Itsunomanika nagareta namida</div>
      <div>Tsudzuki wo narasou</div>
      <div><br/></div>
      <div>Arifureta ano hibi wo tada omoikaesu</div>
      <div>Owari ga kuru koto wo matsu sekai de</div>
      <div>Tsurai kako mo iya na kioku mo</div>
      <div>Wasurerarenai melody mo</div>
      <div>Sayonara nanda</div>
      <div><br/></div>
      <div>Ima koko de suki na you ni tada oto wo narasu</div>
      <div>Saigo no hi ni futarikiri no machi de</div>
      <div>Arifureta ano hibi wo tada omoi kanaderu oto ga</div>
      <div>Kasanari hibiku</div>
      <div><br/></div>
      <div>Ashita sekai wa owarunda tte</div>
      <div>Ashita sekai wa owarunda tte</div>
      <div>Moshimo sekai ga owaranakutte</div>
      <div>Ashita ga yatte kita nara</div>
      <div>Nee, sono toki wa futari issho ni</div>
      <div>Nante</div>
    `,
  },
  {
    _id: 10,
    title: 'YOASOBI「ハルカ」Official Music Video - Haruka',
    link: 'https://www.youtube.com/embed/vd3IlOjSUGQ',
    lyric: `
      <div>Omoidasu no wa deatta hi no koto</div>
      <div>Dare no moto ni mo kaerenai boku wo</div>
      <div>Mitsuke dashite kureta sukui dashite kureta</div>
      <div>Wasureru koto nai kimi no egao</div>
      <div><br/></div>
      <div>Kurashi no sukima yofuke no inori</div>
      <div>Itsudemo kimi to tomo ni aruite kita kiseki</div>
      <div>Tsurai koto mo ureshii koto mo</div>
      <div>Wakachiaeru sonna hibi yo</div>
      <div><br/></div>
      <div>Furikaereba kazoe kirenai</div>
      <div>Omoide ga afuredashite kuru</div>
      <div>Dare ni mo mienai tokoro de ganbatteru</div>
      <div>Kimi no soba ni irareru koto sore dake de</div>
      <div>Konna ni hora shiawase nanda yo</div>
      <div>Komiagete kuru omoi wa tada arigatou</div>
      <div><br/></div>
      <div>Otozureta yorokobi no haru wa tabidachi no kisetsu</div>
      <div>Hanareta machi ni mo tsuredashite kureta ne</div>
      <div>Hitori fuan na hibi ni sabishi sou na kimi ni</div>
      <div>Okuru eeru boku ga tsuiteru yo</div>
      <div><br/></div>
      <div>Tanoshii koto bakari janai nichijou ni</div>
      <div>Afuredashita kimi no namida</div>
      <div>Soredemo mae wo muite aruite</div>
      <div>Sou yatte otona ni natteiku</div>
      <div>Kimi no soba ni irareru koto</div>
      <div><br/></div>
      <div>Kimi no yorokobi wa boku no yorokobi de</div>
      <div>Kimi no taisetsu na shiawase ga itsumade mo kimi to arimasu you ni</div>
      <div><br/></div>
      <div>Nee kimi no soba ni wa</div>
      <div>Mou takusan no ai ga afureteru</div>
      <div>Dakara ima wa douka nakanai de</div>
      <div>Ano hi no you ni egao de</div>
      <div><br/></div>
      <div>Furikaereba ikutsu mo no</div>
      <div>Omoide ga yomigaette kuru</div>
      <div>Dare ni mo mienai tokoro de nagashita namida mo</div>
      <div>Hora ima no kimi ni tsunagatteru</div>
      <div>Takusan no ai ni tsunagatteru</div>
      <div>Komiagete kuru omoi wa tada arigatou</div>
      <div><br/></div>
      <div>Itsumade mo shiawase de</div>
      <div>Itsumade mo aishiteru yo</div>
    `,
  },
];

app.get('/musics', (req, res) => { 
  res.status(200).json(dataStatic);
});

app.get('/himatika', (req, res) => {
  res.status(200).json({ message: 'Hello Himatika! :)' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
