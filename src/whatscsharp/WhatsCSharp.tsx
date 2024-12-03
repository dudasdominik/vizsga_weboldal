import React, { useState } from "react";
import "./csstyle.css";
import modifier from "../assets/modifier.png";
import classpic from "../assets/class.png";
import mainprogram from "../assets/mainprogram.png";

const WhatsCSharp: React.FC = () => {
  const [showModifierPicture, setShowModifierPicture] =
    useState<boolean>(false);
  const [showClassPicture, setShowClassPicture] = useState<boolean>(false);
  return (
    <div className="content-container">
      <div>
        <h1 className="headline" id="c#">
          Mi a <strong>C#</strong>?
        </h1>
        <p className="cs-paragraph">
          A <strong>C#</strong> az egy <u>objektum orientált programnyelv</u>,
          amelyet a <strong>Microsoft</strong> hozott létre és a{" "}
          <strong>.NET Framework-on fut</strong>. A{" "}
          <strong>C programnyelvek családjából</strong> származik, de nagyon
          hasonló például a <strong>Java programnyelvhez</strong>. A C#-nak
          nagyon sok fajta <strong>felhasználási módja</strong> van,{" "}
          <strong>Mobil</strong>,{" "}
          <strong>Számítógép és Webes alkalmazások</strong>,{" "}
          <strong>Weblapok</strong>, <strong>Játékok</strong> és még sok más
          mindenre lehet használni.
        </p>
      </div>
      <div>
        <h1 className="headline" id="lang">
          Nyelvi jellemzők
        </h1>
        <p>
          A nyelv szintaktikája legfőképpen a{" "}
          <strong>C alapú programnyelvekhez</strong>, illetve a{" "}
          <strong>Java-hoz</strong> hasonlít. Ezt tudatosan készítették így,
          hiszen céljuk az volt a <strong>C#-al</strong>, hogy{" "}
          <u>modern és hatékony legyen</u>, mialatt{" "}
          <u>magas szintű biztonságot és teljesítményt</u> nyújt. Ez a
          programnyelv <strong>erősen típus alapú</strong>, ami annyit jelent,
          hogy <u>minden változónak deklarálni kell a típusát</u> létrehozásnál.
          Ilyen típusok tartoznak ide, mint például:
        </p>
        <ul>
          <li>
            <strong>int</strong> -- Az angol <em>integer</em>, azaz{" "}
            <strong>szám</strong> szó rövidítése, ez az{" "}
            <u>egész számok tárolására</u> szolgál.
          </li>
          <li>
            <strong>double</strong> -- Hasonlóan az <strong>int-hez</strong>,
            számok tárolására használjuk, ebben <u>tizedes törteket tárolnak</u>
            .
          </li>
          <li>
            <strong>string</strong> --{" "}
            <u>Karakterláncokat, vagyis szavakat, szövegeket</u> tárol.
          </li>
          <li>
            <strong>bool</strong> -- Ez egy <u>logikai értéket tárol</u>, az{" "}
            <strong>true/false</strong> értékeket tárolja, azaz igaz/hamis.
          </li>
        </ul>
        <p>
          A <u>változókat úgy adhatjuk meg</u>, hogy elsősorban a{" "}
          <strong>típusát</strong>, majd a <strong>nevét</strong>, ezt követően
          pedig egy egyenlőségjel (<strong>=</strong>) következik, miután meg
          lehet adni a <strong>változó értékét</strong>, a sor végére mindig{" "}
          <u>pontosvessző kerül</u> (<strong>;</strong>).
        </p>
        <h2>Miért is jó?</h2>
        <p>
          Ez a <strong>típusbiztonság</strong> nem teszi lehetővé azt, hogy
          például egy <strong>int-hez egy string értéket</strong>{" "}
          hozzárendeljünk anélkül, hogy ezt <u>megfelelően konvertálnánk</u>. Az
          ilyen hibák nagy részét már{" "}
          <strong>build-elés közben felfedezhetővé</strong> teszi, így a{" "}
          <u>futásidő alatti hibák száma is csökken</u>. Ennek köszönhetően a{" "}
          <strong>memóriakorrupciós hibákat</strong> is segít elkerülni a
          rendszer, mivel a nem szabályosan hozzárendelt típus-érték páros miatt
          a program nem engedélyez <u>illegális memória műveleteket</u>. Ez a
          kód <u>olvashatóságát is segíti</u>, hiszen egy változóra ránézve{" "}
          <u>egyből látható a típusa</u>.
        </p>
        <h2>Típuskonverzió</h2>
        <p>
          A <strong>típus konverzió</strong> azt jelenti, hogy egy adott adatot
          átalakítunk egy másik típusú adattá. A{" "}
          <strong>C#-ban pontosan kettő fajta konverzió létezik</strong>.
          <strong>Explicit konverzió</strong>: Ezt általában akkor szokták
          használni, ha egy típust <u>nem biztonságosan lehet átalakítani</u>{" "}
          egy másik fajta típussá. Ez akkor fordulhat elő, ha{" "}
          <u>fennáll az adatvesztés kockázata</u>. Ezt a konverziót{" "}
          <strong>Casting</strong>-nak is szoktuk nevezni. Pl.:{" "}
          <code>double pi = 3.14; int wholeNumber = (int) pi;</code> //Explicit
          konverzió, a <u>tizedesrész elveszik</u>.
          <strong>Implicit konverzió</strong>: Ez{" "}
          <u>automatikusan megtörténik</u>, ha{" "}
          <u>adatvesztés nélkül átalakítható</u> az egyik típus a másikba.
          Például egy kisebb méretű adattípust, mint az <strong>int</strong>,
          átalakíthatunk egy <strong>nagyobb típusra</strong> adatvesztés
          nélkül, ilyen a <strong>double</strong>, hiszen ez az adattípus képes{" "}
          <u>tárolni egész számokat is</u> anélkül, hogy veszteség lépne fel.
          Pl.: <code>int number = 5; double doubleNumber = number;</code>{" "}
          //Adatveszteség és Castolás nélkül végrehajtható. Vannak konverziót
          segítő metódusok is, ilyen például a{" "}
          <strong>Convert.ToInt32()</strong> és a{" "}
          <strong>Convert.ToDouble()</strong>.
        </p>
      </div>
      <div>
        <h1 className="headline" id="oop">
          Osztályok és OOP a <strong>C#-ban</strong>
        </h1>
        <p>
          A <strong>C#</strong> az egy <u>Objektum Orientált Programnyelv</u>,
          aminek fő elemei az
          <strong>osztályok</strong> és az <strong>objektumok</strong>. Az
          osztályok olyan sablonok, amelyek segítségével objektumokat hozhatunk
          létre. Ezek az objektumok a valós világ dolgait modellezik, és{" "}
          <strong>tulajdonságokkal</strong> (adattagokkal) és
          <strong>műveletekkel</strong> (metódusokkal) rendelkeznek. Az
          adattagokhoz többféle hozzáférési módosítót lehet hozzárendelni,
          ezeknek a célja az, hogy meghatározzák, milyen szinten lehet
          hozzáférni. Ilyenek pl.
        </p>
        <button
          onClick={() => setShowModifierPicture(!showModifierPicture)}
          className="show-picture-button"
        >
          <strong>Mutasd a képet</strong>
        </button>
        {showModifierPicture && (
          <>
            <br /> <img src={modifier} alt="this is a picture" />
          </>
        )}
        <p>
          A fenti képen látható az összes <strong>hozzáférési módosító</strong>,
          és milyen formában érhetőek el. Ez az{" "}
          <u>objektum-orientált programozásban (OOP)</u>
          fontos. Ezeket az adatokat meg lehet adni egy osztály
          <strong>inicializálásánál</strong> (létrehozásánál), amit a
          <strong>konstruktőrnél</strong> kell megadni, és{" "}
          <u>paraméterként kell bekérni</u>. Ez szintén az{" "}
          <strong>objektum-orientált programozásban (OOP)</strong> szükséges az
          ott levő szabályok fenntartása végett. Az osztályban több{" "}
          <strong>metódust</strong> is létre lehet hozni, amelyek az adott
          osztály adottságait használva bizonyos értékeket adnak vissza, segítve
          a futó programot. Egy osztály
          <strong>inicializálását</strong> hasonlóképpen kell végezni, mint
          minden mást. Az adatok, amelyeknek <u>nem publikus a hozzáférése</u>,
          kaphatnak úgynevezett
          <strong>Gettereket</strong> és <strong>Settereket</strong>. A Getter
          arra szolgál, hogy csak elérjük az adatot, de ne tudjuk
          megváltoztatni, míg a Setter ennek ellentéte, azzal csak{" "}
          <u>megváltoztatni lehet</u>, de viszont az aktuálisat nem lehet
          lekérdezni. Az alábbi képen látható, hogyan néz ki egy osztály és
          annak <strong>inicializálása</strong>.
        </p>
        <button
          onClick={() => setShowClassPicture(!showClassPicture)}
          className="show-picture-button"
        >
          <strong>Mutasd a képet</strong>
        </button>
        {showClassPicture && (
          <>
            <br />
            <img src={classpic} alt="this is a picture" />
            <br />
            <img src={mainprogram} alt="this is a picture" />
          </>
        )}
        <p>
          Mindezek a funkcionalitások az <u>objektum-orientált programozás</u>{" "}
          miatt lettek kiépítve. De miért jó is ez? Ennek az előnye, hogy segít
          az alkalmazások
          <u>kódjának szervezésében és átláthatóságában</u> azáltal, hogy a
          valós világ elemeit
          <strong>objektumokként modellezi</strong>. Az objektum-orientált
          programozás (OOP) lehetővé teszi az{" "}
          <u>adatok és a hozzájuk kapcsolódó funkciók összekapcsolását</u>
          (enkapszuláció), ami javítja a{" "}
          <strong>kód újrahasználhatóságát</strong>. Az
          <strong>öröklődés</strong> révén lehetőség van a meglévő osztályok
          kibővítésére, a<strong>polimorfizmus</strong> pedig biztosítja, hogy
          különböző objektumok egységesen kezelhetőek legyenek, ami{" "}
          <u>rugalmasabbá teszi az alkalmazást</u>.
        </p>
        <h2>Az OOP-nak több alapelve is van, ezek:</h2>
        <ul>
          <li>
            <strong>Absztrakció</strong> -- Az absztrakció az{" "}
            <u>adatok és metódusok elrejtését</u> jelenti a felhasználó elől,
            csak a <strong>lényeges funkciókat mutatva meg</strong>. Ezzel
            egyszerűsítjük a komplex rendszereket, és az osztályokban csak
            azokat az elemeket tesszük láthatóvá, amelyek szükségesek.
          </li>
          <li>
            <strong>Enkapszuláció</strong> -- Az enkapszuláció segítségével az
            osztályokban lévő adatok és metódusok <u>egy egységbe kerülnek</u>,
            és <u>hozzáférésük korlátozható</u>. Ezáltal a belső adatok{" "}
            <strong>védettek</strong> és csak a
            <u>meghatározott módon érhetőek el vagy módosíthatóak</u>.
          </li>
          <li>
            <strong>Öröklődés</strong> -- Ez lehetővé teszi, hogy egy{" "}
            <u>osztály (class) tulajdonságait és metódusait</u> átörökítsük,
            elkerülve ezzel a kódismétlést. A gyermekosztály kibővítheti vagy
            módosíthatja az <strong>anyaosztály funkcióit</strong>.
          </li>
          <li>
            <strong>Polimorfizmus</strong> -- Lehetővé teszi, hogy{" "}
            <u>
              ugyanaz a metódushívás különböző objektumokon más-más módon
              viselkedjen
            </u>
            . Így a kód
            <u>rugalmasabb és általánosabb</u> lesz, mivel a többféle típus
            kezelhető ugyanazon a metódushíváson keresztül.
          </li>
        </ul>
        <p>
          Az ilyen típusú programozásnak több alapelve is van, mint az OOP
          alapelvek, ilyen például a <strong>S-O-L-I-D</strong> akronimmal való
          alapelvek, amelyek:
        </p>
        <ul>
          <li>
            <strong>Egységelve (Single Responsibility Principle)</strong> -- Egy
            osztálynak csak <u>egyetlen felelőssége</u> legyen, és egyetlen
            okból kelljen változnia. Ez az elv segít abban, hogy az osztályok
            jól elkülönített funkciókat lássanak el, ami{" "}
            <u>könnyebben karbantarthatóvá</u> teszi az adott kód-bázist.
          </li>
          <li>
            <strong>Nyílt/zárt elv (Open/Closed Principle)</strong> -- Az
            osztályok legyenek
            <u>nyitottak a bővítésre</u>, de viszont <u>zártak a módosításra</u>
            . Ez azt jelenti, hogy az új funkciók hozzáadása ne igényelje a
            meglévő kód módosítását, hanem{" "}
            <u>új osztályok vagy metódusok hozzáadásával</u> történjen.
          </li>
          <li>
            <strong>
              Liskov-helyettesítési elv (Liskov Substitution Principle)
            </strong>{" "}
            -- Minden alosztály képes legyen helyettesíteni a szülőosztályát
            anélkül, hogy a program helytelenül működne. Az elv biztosítja, hogy{" "}
            <u>
              örökléssel létrehozott alosztályok kompatibilisek legyenek az
              alaposztállyal
            </u>
            .
          </li>
          <li>
            <strong>
              Interface szegregációs elv (Interface Segregation Principle)
            </strong>{" "}
            -- A kód legyen <u>több, specifikus interfészre lebontva</u>,
            ahelyett, hogy egyetlen általános interfészt használna. Így az
            osztályok csak azokkal a metódusokkal dolgoznak, amelyekre{" "}
            <u>valóban szükségük van</u>, ezzel elkerülve a felesleges
            <strong>függőségeket</strong> (dependenciákat).
          </li>
          <li>
            <strong>
              Függőség-inverziós elv (Dependency Inversion Principle)
            </strong>{" "}
            -- A magas szintű modulok ne függjenek az alacsony szintű
            moduloktól, mindkettőnek
            <u>absztrakcióktól kell függenie</u>. Ezáltal a kód{" "}
            <u>rugalmasabbá válik</u>, és a
            <strong>függőségek kezelhetőek</strong> maradnak az absztrakt
            rétegek használatával.
          </li>
        </ul>
        <p>
          Ezek az elvek segítenek abban, hogy a kód{" "}
          <strong>jól strukturált, könnyen bővíthető és karbantartható</strong>{" "}
          legyen. Az elvek csökkentik a kód ismétlést, elősegítik az{" "}
          <u>egységes felelősség elvét</u>, és biztosítják, hogy a kód
          módosításakor minimalizálódjon a hibák lehetősége. Ezekkel az
          irányelvekkel könnyebb{" "}
          <u>változtatásokat és új funkciókat hozzáadni a kódhoz</u> anélkül,
          hogy megsértenénk a meglévő rendszert, ami különösen hasznos
          <strong>nagyobb, összetettebb alkalmazásoknál</strong>.
        </p>
      </div>

      <div>
        <h1 className="headline" id="asp">
          Mi az <strong>ASP.Net</strong>
        </h1>
        <p>
          Az <strong>ASP.Net</strong> egy{" "}
          <u>
            Microsoft által kifejlesztett nyílt forráskódú szerveroldali
            webfejlesztési platform
          </u>
          . Ennek a fő célja, hogy a <strong>C# programozási nyelv</strong>{" "}
          segítségével és a <strong>.Net keretrendszerrel</strong> egy olyan
          lehetőséget biztosítson a fejlesztők számára, amivel{" "}
          <u>interaktív, dinamikus webes alkalmazásokat</u> hozhatnak létre. Ez
          a meglévő <strong>ASP (Active Server Pages)</strong>-nek a
          továbbfejlesztett változata, ami 2002-ben jelent meg, és azóta a{" "}
          <u>webfejlesztés egyik népszerű eszközévé</u> vált.
        </p>
        <p>
          Ennek a platformnak a célja, hogy{" "}
          <strong>modern, gyors és biztonságos környezetet</strong> biztosítson
          a webalkalmazások fejlesztéséhez. Az <strong>ASP.Net</strong> szorosan
          összefonódik a <strong>C# nyelvvel</strong>, mivel ez a nyelv
          biztosítja az alapot a szerveroldali logika megírásához. Ez a
          kapcsolat nagyon előnyös, hiszen a fejlesztők{" "}
          <u>
            ugyanaz a nyelv segítségével dolgozhatnak mind a háttérlogikán és a
            webes felület kezelésén
          </u>
          , ami jelentősen megkönnyíti a fejlesztés menetét.
        </p>
        <p>
          Ennek a platformnak kettő fő architektúrája az{" "}
          <strong>ASP.Net Web Forms</strong> és az{" "}
          <strong>ASP.Net MVC (Model-View-Controller)</strong>. Az{" "}
          <strong>MVC modell</strong> az egyik legnépszerűbb megközelítés, amely
          segít az alkalmazások <u>jobb szervezésében</u>, külön választva a{" "}
          <u>felhasználói felületet, az üzleti logikát és az adatkezelést</u>.
        </p>
        <p>
          Az <strong>ASP.Net Core</strong> az{" "}
          <strong>ASP.Net továbbfejlesztett változata</strong>, ami 2016-ban
          jelent meg, és egy még rugalmasabb keresztplatform megoldást nyújt. Az{" "}
          <strong>ASP.Net Core</strong> lehetővé teszi, hogy a fejlesztők{" "}
          <u>
            ne csak Windows operációs rendszereken, hanem Linuxon és MacOS-en is
            futtassák az alkalmazásokat
          </u>
          , ami nagyobb rugalmasságot biztosít.
        </p>
        <p>
          Az <strong>ASP.Net</strong> fontos eleme, hogy{" "}
          <u>integrálódik a teljes .NET ökoszisztémába</u>, így a fejlesztők
          hozzáférhetnek a <strong>.NET keretrendszer</strong> által kínált
          összes szolgáltatásaihoz, például a{" "}
          <strong>
            biztonságos adatkezeléshez, a különféle adatbázisokhoz való könnyű
            csatlakozáshoz
          </strong>
          , valamint a különféle{" "}
          <strong>felhőalapú megoldások integrációjához</strong>. Könnyedén
          létrehozhatóak{" "}
          <strong>
            RESTful API-k, weboldalak és komplex üzleti alkalmazások
          </strong>
          .
        </p>
        <h2>
          Backend fejlesztése <strong>ASP.Net Core</strong> segítségével
        </h2>
        <p>
          Ezek a technológiák segítségével a{" "}
          <u>backend fejlesztés modern és hatékony</u> lett. A{" "}
          <strong>C#</strong> segítségével a fejlesztők megírhatják a{" "}
          <u>szerveroldali logikát</u>, amely az alkalmazások szíve. Az{" "}
          <strong>ASP.Net Core</strong> támogatja a <strong>Middleware</strong>{" "}
          elemek használatát, amelyek lehetővé teszik a{" "}
          <u>kérések és válaszok kezelését</u>, valamint könnyedén bővíthetőek
          és testreszabhatóak.
        </p>
        <p>
          Az <strong>API (Application Programming Interface)</strong> egy olyan
          felület, amely lehetővé teszi a{" "}
          <u>különböző szoftverek közötti kommunikációt</u>. A{" "}
          <strong>RESTful API-k</strong> az <strong>ASP.Net Core</strong>-ban
          különösen népszerűek, mivel egyszerűen implementálhatóak, és{" "}
          <u>HTTP protokollt</u> használnak az adatok küldésére és fogadására.
        </p>
        <ul>
          <li>
            <strong>GET</strong> -- <u>Adatok lekérése</u>
          </li>
          <li>
            <strong>POST</strong> -- <u>Adatok küldése</u>
          </li>
          <li>
            <strong>PUT</strong> -- <u>Adatok frissítése</u>
          </li>
          <li>
            <strong>DELETE</strong> -- <u>Adatok törlése</u>
          </li>
        </ul>
        <p>
          Az{" "}
          <u>
            API hívások során a szerver különböző HTTP státuszkódokat ad vissza
          </u>
          , amelyek tájékoztatják a klienst a kérelem eredményéről. Ilyenek
          például:
        </p>
        <ul>
          <li>
            <strong>200-299 (Sikeres kérések)</strong> -- Ezek a kódok azt
            jelentik, hogy <u>sikeresen végrehajtódott a kérés</u>. Például a{" "}
            <strong>200 OK</strong> azt jelenti, hogy{" "}
            <u>sikeresen feldolgozta a szerver</u>.
          </li>
          <li>
            <strong>300-399 (Átirányítások)</strong> -- Ezek a kódok azt
            jelentik, hogy a <u>kért erőforrás áthelyezésre került</u>, és a
            kliensnek egy másik URL-t kell követnie. Pl.:{" "}
            <strong>301 Moved Permanently</strong> az erőforrás véglegesen
            áthelyezésre került.
          </li>
          <li>
            <strong>400-499 (Kliens hibák)</strong> -- Ezek a kódok arra
            utalnak, hogy a <u>kérés hibás volt</u>. Pl.:{" "}
            <strong>400 Bad Request</strong> hibás kérési formát jelent, a{" "}
            <strong>404 Not Found</strong> pedig azt jelenti, hogy a{" "}
            <u>kért erőforrás nem található</u>.
          </li>
        </ul>
        <p>
          Ezek a metódusok biztosítják a{" "}
          <u>
            kliens és a szerver közötti adatcsere rugalmasságát és egyszerűségét
          </u>
          . Az API biztosítja, hogy a <strong>frontend</strong> képes legyen{" "}
          <u>
            lekérdezni az adatokat, elküldeni a felhasználói bevitelt és valós
            időben kommunikálni a szerverrel
          </u>
          .
        </p>
        <h2>Entity Framework és adatkezelés</h2>
        <p>
          Az <strong>Entity Framework (EF)</strong> a{" "}
          <strong>.NET keretrendszer</strong>{" "}
          <u>objektum-relációs leképzője (ORM)</u>, ami lehetővé teszi, hogy{" "}
          <u>
            SQL kód írása nélkül közvetlenül végre lehessen hajtani adatbázisi
            műveleteket
          </u>
          . Az <strong>EF Core</strong> lehetővé teszi, hogy az{" "}
          <u>adatbázisokhoz való hozzáférést absztrakcióval oldjuk meg</u>, ami
          leegyszerűsíti az adatműveleteket és növeli a kód olvashatóságát.
        </p>
        <ul>
          <li>
            <strong>Database First</strong> -- Ez a megközelítés már meglévő
            adatbázis segítségével generálja le a modelleket az EF Core
            használatával. Hasznos, ha már egy meglévő adatbázishoz kell
            fejleszteni az alkalmazást.
          </li>
          <li>
            <strong>Code First</strong> -- A <strong>C#</strong>-ban osztályok
            definiálása alapján generálja le az adatbázist. Rugalmasságot
            biztosít, mivel a kód és adatbázis struktúráját teljes mértékben a
            fejlesztő alakítja ki.
          </li>
        </ul>
        <p>
          Az <strong>EF Core</strong> még sok más funkciót kínál, például:
        </p>
        <ul>
          <li>
            <strong>Kapcsolatok kezelése</strong> -- Segíti az{" "}
            <u>adatbázis relációk kezelését</u>, ilyenek például az
            egy-a-többhöz és több-a-többhöz kapcsolatok.
          </li>
          <li>
            <strong>LINQ</strong> -- A <u>Language Integrated Query</u> lehetővé
            teszi az <u>adatbázisos lekérdezéseket a C# nyelvén</u>, növelve
            ezzel a kód olvashatóságát és karbantarthatóságát.
          </li>
          <li>
            <strong>Lazy Loading</strong> -- Segíti, hogy az{" "}
            <u>adatok csak akkor töltődjenek be, amikor szükség van rájuk</u>,
            ezzel javítva az alkalmazás teljesítményét.
          </li>
          <li>
            <strong>Eager Loading</strong> -- Minden adatot előre betölt, így
            segítve a későbbi gyors hozzáférést.
          </li>
        </ul>
        <h2>
          Dependency Injection az <strong>ASP.Net Core</strong>-ban
        </h2>
        <p>
          Ez egy alap koncepció az <strong>ASP.Net Core</strong>-ban, amely
          segíti a <u>kód struktúrájának kialakítását</u>. Ennek segítségével
          különböző szolgáltatásokat, adatbáziskapcsolatokat és konfigurációs
          beállításokat könnyedén injektálhatunk az alkalmazás különböző
          részeibe. Ez lehetővé teszi a{" "}
          <u>komponensek független fejlesztését és tesztelését</u>, ami növeli a
          kód karbantartásának könnyűségét.
        </p>
        <ul>
          <li>
            <strong>Transient</strong> -- Minden használatkor{" "}
            <u>új példányban kerül létrehozásra</u>. Hasznos, ha a szolgáltatás
            nem igényel állandó erőforrásokat.
          </li>
          <li>
            <strong>Singleton</strong> -- Csak egyetlen példány jön létre az
            alkalmazás teljes élettartama alatt.
          </li>
          <li>
            <strong>Scoped</strong> -- Minden egyes kérelemhez{" "}
            <u>új példányban kerül létrehozásra</u>, ez ideális
            adatbázis-kapcsolatok kezeléséhez.
          </li>
        </ul>
      </div>
      <div>
        <h1 className="headline" id="end">
          Végszó
        </h1>
        <p>
          Összegzésként az <strong>ASP.Net Core, C#, Entity Framework</strong>{" "}
          és a <strong>Dependency Injection</strong> együttese{" "}
          <u>hatékony eszközöket kínál a fejlesztők számára</u>. Összetett, de
          viszont kifizetődő ezeket a technológiákat használni egy{" "}
          <u>nagyobb volumenű alkalmazás kiépítéséhez</u>, hiszen minden egyes
          technológia{" "}
          <u>egymásra épülve egy komplex, de hatékony és gyors fejlesztéshez</u>{" "}
          elengedhetetlen.
        </p>
      </div>
    </div>
  );
};

export default WhatsCSharp;
