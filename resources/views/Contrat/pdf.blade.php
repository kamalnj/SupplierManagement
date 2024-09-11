<!DOCTYPE html>
<html>
<head>
    <title>Contrat de Fourniture</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1, h2, h3 {
            text-align: center;
        }
        .content {
            margin: 20px;
        }
    </style>
</head>
<body>
    <h1>CONDITIONS GENERALES D’ACHAT (PAR ABREVIATION « CGA »)</h1>
    <div class="content">
        <p><strong>ENTRE :</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>LA SOCIETE MAGHREBINE DE MONETIQUE par abr&eacute;viation S2M,</strong>&nbsp;Soci&eacute;t&eacute; Anonyme &agrave; Directoire et &agrave; Conseil de Surveillance au capital de 40.603.500,00 de Dirhams ayant son si&egrave;ge social &agrave; Casablanca, Casa Nearshore Park 2C 306 &ndash; 1100 Bd al Qods Quartier Sidi Maarouf, immatricul&eacute;e au registre de commerce de Casablanca sous le num&eacute;ro 43 625 valablement repr&eacute;sent&eacute;e par M. Omar MASNAOUI en qualit&eacute; de Group CFO &ndash; membre du Directoire.</p>
        <p>&nbsp;</p>
        <p>R&eacute;guli&egrave;rement habilit&eacute; &agrave; cet effet.</p>
        <p>&nbsp;</p>
        <p>Ci-apr&egrave;s d&eacute;nomm&eacute;e le &laquo;&nbsp;Client&nbsp;&raquo;,</p>
        <p>&nbsp;</p>
        <p><strong>D&rsquo;une part</strong>,</p>
        <p><strong>ET</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong> {{ $nom_fournisseur }}</strong><strong>,</strong>&nbsp;au capital de&nbsp;{{ $infoGenerales->capital_social }}&nbsp;DH dont le si&egrave;ge social est sis &agrave;&nbsp;{{ $infoGenerales->adresse_siege_social }}, inscrite au Registre du Commerce de&nbsp; {{ $infoGenerales->lieu_immatriculation }}&nbsp;sous le num&eacute;ro&nbsp;{{ $infoGenerales->numero_rc }}</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>repr&eacute;sent&eacute;e par&nbsp;&nbsp;{{ $infoGenerales->nom_representant }}</p>
        <p>&nbsp;</p>
        <p>en qualit&eacute; de&nbsp;{{ $infoGenerales->fonction_representant }}</p>
        <p>agissant en vertu des pouvoirs qui lui sont conf&eacute;r&eacute;s.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Ci-apr&egrave;s d&eacute;nomm&eacute;e &laquo;&nbsp;le Prestataire &raquo;,</p>
        <p><strong>D&rsquo;autre part</strong>,</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505319"></a>Le Client et le Prestataire &eacute;tant ci-apr&egrave;s d&eacute;nomm&eacute;s, individuellement ou collectivement, la ou les &laquo;&nbsp;Parties&nbsp;&raquo;.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505320"></a>Chacun des signataires des CGA garantit que le pouvoir en vertu duquel il agit n'a pas &eacute;t&eacute; r&eacute;voqu&eacute; ou limit&eacute; et qu'il est suffisant pour obliger les repr&eacute;sent&eacute;s dans l&rsquo;ex&eacute;cution des pr&eacute;sentes CGA.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>ETANT RAPPEL&Eacute; QUE</strong>&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les Parties ont sign&eacute; ou vont signer un ou plusieurs contrat(s) ou bon(s) de commande pour l&rsquo;ex&eacute;cution d&rsquo;une prestation et/ou la livraison d&rsquo;un produit (tous ci-apr&egrave;s d&eacute;sign&eacute;s par le terme &laquo;&nbsp;Contrat&nbsp;&raquo;),</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les termes et conditions des pr&eacute;sentes CGA ci-apr&egrave;s s&rsquo;appliqueront&nbsp;<em>mutatis mutandis</em>&nbsp;&agrave; tout Contrat d&eacute;j&agrave; existant &agrave; la date de signature des CGA, et</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;la signature des pr&eacute;sentes CGA constitue une condition essentielle au consentement du Client dans la signature du Contrat qu&rsquo;il n&rsquo;aurait ni conclu ni n&rsquo;aurait accept&eacute; la poursuite de son ex&eacute;cution, sans l&rsquo;acceptation int&eacute;grale et non conditionn&eacute;e des CGA contenues ci-apr&egrave;s.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><a href="#_Toc90505321">ARTICLE 1 - CHAMP D&rsquo;APPLICATION</a></p>
        <p><a href="#_Toc90505322">ARTICLE 2 - OPPOSABILIT&Eacute;</a></p>
        <p><a href="#_Toc90505323">ARTICLE 3 - TRANSFERT DE LA PROPRI&Eacute;T&Eacute;</a></p>
        <p><a href="#_Toc90505324">ARTICLE 4 - GARANTIES</a></p>
        <p><a href="#_Toc90505325">ARTICLE 5 - PROPRI&Eacute;T&Eacute; INTELLECTUELLE</a></p>
        <p><a href="#_Toc90505326">ARTICLE 6 - CONFIDENTIALITE</a></p>
        <p><a href="#_Toc90505327">Article 6.01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obligation de confidentialit&eacute;</a></p>
        <p><a href="#_Toc90505328">Article 6.02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Protection des informations privil&eacute;gi&eacute;es</a></p>
        <p><a href="#_Toc90505329">Article 6.03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dur&eacute;e de l&rsquo;obligation de confidentialit&eacute;</a></p>
        <p><a href="#_Toc90505331">Article 6.04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personnel et sous-traitants</a></p>
        <p><a href="#_Toc90505332">Article 6.05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restitution/destruction</a></p>
        <p><a href="#_Toc90505333">ARTICLE 7 - DONNEES A CARACTERE PERSONNEL</a></p>
        <p><a href="#_Toc90505356">Article 7.01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respect de la l&eacute;gislation applicable en mati&egrave;re de protection des donn&eacute;es &agrave; caract&egrave;re personnel</a></p>
        <p><a href="#_Toc90505357">Article 7.02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Traitements r&eacute;alis&eacute;s par le Prestataire</a></p>
        <p><a href="#_Toc90505358">Article 7.03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&eacute;curit&eacute; et confidentialit&eacute; du traitement</a></p>
        <p><a href="#_Toc90505359">Article 7.04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communication de Donn&eacute;es &agrave; caract&egrave;re personnel du Client &agrave; des tiers</a></p>
        <p><a href="#_Toc90505360">Article 7.05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Application de la r&egrave;glementation marocaine en mati&egrave;re de transferts de donn&eacute;es vers un pays &eacute;tranger</a></p>
        <p><a href="#_Toc90505361">Article 7.06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conservation des Donn&eacute;es &agrave; caract&egrave;re personnel du Client par le Prestataire</a></p>
        <p><a href="#_Toc90505362">ARTICLE 8 - R&Eacute;SILIATION</a></p>
        <p><a href="#_Toc90505367">ARTICLE 9 - FORCE MAJEURE</a></p>
        <p><a href="#_Toc90505368">ARTICLE 10 - OBLIGATIONS GENERALES DE SECURITE</a></p>
        <p><a href="#_Toc90505393">ARTICLE 11 - RESPONSABILIT&Eacute;</a></p>
        <p><a href="#_Toc90505395">ARTICLE 12 - ASSURANCES</a></p>
        <p><a href="#_Toc90505399">ARTICLE 13 - CHANGEMENT DE CONTR&Ocirc;LE DU PRESTATAIRE</a></p>
        <p><a href="#_Toc90505400">ARTICLE 14 - CESSION</a></p>
        <p><a href="#_Toc90505401">ARTICLE 15 - SOUS-TRAITANCE</a></p>
        <p><a href="#_Toc90505402">ARTICLE 16 - PERSONNEL DU PRESTATAIRE</a></p>
        <p><a href="#_Toc90505403">Article 16.01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encadrement</a></p>
        <p><a href="#_Toc90505405">Article 16.02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comp&eacute;tence</a></p>
        <p><a href="#_Toc90505409">Article 16.03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hygi&egrave;ne et s&eacute;curit&eacute;</a></p>
        <p><a href="#_Toc90505411">ARTICLE 17 - RESPONSABILIT&Eacute; SOCI&Eacute;TALE ET ENVIRONNEMENTALE</a></p>
        <p><a href="#_Toc90505412">ARTICLE 18 - STIPULATIONS RELATIVES &Agrave; LA LUTTE CONTRE LA CORRUPTION</a></p>
        <p><a href="#_Toc90505413">ARTICLE 19 - SANCTIONS</a></p>
        <p><a href="#_Toc90505414">ARTICLE 20 - COMMUNICATION</a></p>
        <p><a href="#_Toc90505416">ARTICLE 21 - MODIFICATION DES CONDITIONS GENERALES D&rsquo;ACHAT</a></p>
        <p><a href="#_Toc90505418">ARTICLE 22 - CLAUSES GENERALES</a></p>
        <p><a href="#_Toc90505419">Article 22.01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Titres</a></p>
        <p><a href="#_Toc90505421">Article 22.02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Eacute;lection de domicile</a></p>
        <p><a href="#_Toc90505423">Article 22.03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nullit&eacute; partielle</a></p>
        <p><a href="#_Toc90505425">Article 22.04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manquement</a></p>
        <p><a href="#_Toc90505427">Article 22.05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archivage</a></p>
        <p><a href="#_Toc90505429">ARTICLE 23 - LOI APPLICABLE, LITIGES ET ATTRIBUTION DE COMPETENCE</a></p>
        <p>&nbsp;</p>
        <p><strong><a name="_Toc54605405"></a><u>&nbsp;</u></strong></p>
        <p style="font-weight: 400;">&nbsp;</p>
        <p><a name="_Toc90505321"></a><strong><u>&nbsp;</u></strong></p>
        <h1>ARTICLE 1 -&nbsp;Champ d&rsquo;Application</h1>
        <p>Les pr&eacute;sentes CGA s&rsquo;appliquent &agrave; toute commande, en cours d&rsquo;ex&eacute;cution ou future, de mati&egrave;res, mat&eacute;riels, &eacute;quipements ou services de toute nature&nbsp;(la &laquo;&nbsp;Prestation&nbsp;&raquo;) effectu&eacute;e par le Client, sauf conventions contraires et/ou sp&eacute;ciales conclues par &eacute;crit entre les Parties.</p>
        <p>Les pr&eacute;sentes CGA ainsi que les Contrats, les annexes et &eacute;ventuels avenants ult&eacute;rieurs constituent l&rsquo;int&eacute;gralit&eacute; des engagements des Parties.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505322"></a>ARTICLE 2 -&nbsp;opposabilit&eacute;</h1>
        <p>En acceptant la commande pass&eacute;e par le Client ou en signant un Contrat, le Prestataire s&rsquo;engage &agrave; respecter les pr&eacute;sentes CGA.</p>
        <p>En cons&eacute;quence, toutes conditions g&eacute;n&eacute;rales de vente figurant, le cas &eacute;ch&eacute;ant, sur l&rsquo;un quelconque des documents du Prestataire ne pourront en aucun cas pr&eacute;valoir sur les pr&eacute;sentes CGA qui seules demeurent valables entre les Parties lors de toutes commandes pass&eacute;es par le Client, ce que le Prestataire reconna&icirc;t et accepte express&eacute;ment.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505323"></a>ARTICLE 3 -&nbsp;Transfert de la propri&eacute;t&eacute;</h1>
        <p>Le Client devient propri&eacute;taire des produits objets de la Prestation d&egrave;s leur r&eacute;ception, sans pr&eacute;judice des stipulations relatives aux garanties pr&eacute;vues &agrave; l&rsquo;ARTICLE 4 -&nbsp;ci-apr&egrave;s.</p>
        <p>Toute clause de r&eacute;serve de propri&eacute;t&eacute; du Prestataire est r&eacute;put&eacute;e non-&eacute;crite.</p>
        <p><a name="_Toc452573094"></a><a name="_Toc452472301"></a>En cas de redressement ou de liquidation judiciaire ou de toute autre proc&eacute;dure pr&eacute;vue par le Livre V du Code de commerce relatif aux difficult&eacute;s de l&rsquo;entreprise, sauf r&eacute;siliation de la commande par le Client conform&eacute;ment &agrave; l&rsquo;ARTICLE 8 -&nbsp;ci-dessous, le transfert de propri&eacute;t&eacute; des produits command&eacute;s, fabriqu&eacute;s, en cours de fabrication ou en cours de transport, s'effectuera de plein droit au b&eacute;n&eacute;fice du Client &agrave; la date de d&eacute;cision de justice ordonnant l&rsquo;ouverture de ladite proc&eacute;dure&nbsp;; le syndic ne pouvant se pr&eacute;valoir d'aucun droit sur tout ou partie de ces produits en dehors du paiement des sommes restant dues au Prestataire.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505324"></a>ARTICLE 4 -&nbsp;Garanties</h1>
        <p><a name="_Toc452573096"></a><a name="_Toc452472303"></a>Sauf stipulations particuli&egrave;res contraires des Parties dans le Contrat, le Prestataire garantit contractuellement, pour une dur&eacute;e de douze (12) mois &agrave; compter de leur r&eacute;ception par le Client, que les produits livr&eacute;s sont&nbsp;:</p>
        <ol>
        <li>a)conformes &agrave; (i) toutes les sp&eacute;cifications, sch&eacute;mas, pr&eacute;cisions, plans de conception et autres donn&eacute;es du Client (quelque soit le format) ou transmis par le Client et approuv&eacute;s par le Prestataire ou encore conjointement accept&eacute;s par les Parties par &eacute;crit, et (ii) &agrave; toutes les indications mentionn&eacute;es sur le Contrat&nbsp;;</li>
        <li>b)exempts de tout d&eacute;faut de conception, de fabrication ou de fonctionnement&nbsp;; et</li>
        <li>c)de qualit&eacute; conforme aux meilleurs standards de la profession concern&eacute;e.</li>
        </ol>
        <p>Pendant la dur&eacute;e de la garantie, le Client devra notifier par &eacute;crit au Prestataire tout d&eacute;faut ou dysfonctionnement des produits et le Prestataire devra, sans d&eacute;lai et &agrave; ses frais, soit remplacer, soit r&eacute;parer les produits, soit corriger ledit d&eacute;faut ou dysfonctionnement.</p>
        <p><a name="_Toc452573099"></a><a name="_Toc452472305"></a>Si le Prestataire ne satisfait pas &agrave; son obligation de remplacement, de r&eacute;paration des produits et/ou de correction du d&eacute;faut ou du dysfonctionnement, le Client aura le droit, &agrave; sa seule discr&eacute;tion&nbsp;:</p>
        <ol>
        <li>d&rsquo;effectuer le remplacement, la r&eacute;paration ou la correction lui-m&ecirc;me et aux frais exclusifs du Prestataire&nbsp;;&nbsp;<u>ou</u></li>
        <li>de faire effectuer le remplacement, la r&eacute;paration ou la correction par un tiers et aux frais exclusifs du Prestataire.</li>
        </ol>
        <p>Le Prestataire reconna&icirc;t qu&rsquo;aux garanties sp&eacute;cifi&eacute;es ci-dessus s&rsquo;ajoutent (x) les garanties l&eacute;gales, (y) les garanties express&eacute;ment accord&eacute;es par le Prestataire, autres que celles stipul&eacute;es aux pr&eacute;sentes ainsi que (z) toute autre garantie, expresse ou tacite, applicable &agrave; la commande correspondante. Ces garanties pourront &ecirc;tre valablement mises en jeu par le Client nonobstant toute inspection, test, contr&ocirc;le ou acceptation ou paiement, effectu&eacute;s par le Client au Prestataire ou encore toute annulation, refus, r&eacute;siliation ou accord du Client relatif aux commandes ou Contrats.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505325"></a>ARTICLE 5 -&nbsp;propri&eacute;t&eacute; intellectuelle</h1>
        <p>Le Prestataire d&eacute;clare et garantit (i) qu&rsquo;il est titulaire de tous les droits d&rsquo;utilisation, de conception, de fabrication et de vente des produits objets de la Prestation (ii) que les produits et Prestations livr&eacute;s ne contrefont aucun brevet, droit de licence, dessins et mod&egrave;les, droit d&rsquo;auteur, droit sur les marques ou tout autre droit de propri&eacute;t&eacute; intellectuelle ou industrielle d&rsquo;un tiers et (iii) que le Client a pleinement le droit de jouir librement des droits c&eacute;d&eacute;s ou conc&eacute;d&eacute;s aux termes du Contrat et d&rsquo;utiliser et/ou de revendre les produits objets de la Prestation d&egrave;s la date du transfert de propri&eacute;t&eacute; tel que d&eacute;fini &agrave; l&rsquo;ARTICLE 3 -&nbsp;ci-dessus.</p>
        <p>Le Prestataire garantit le Client contre toute r&eacute;clamation ou action d&rsquo;un tiers relative &agrave; la protection de ses droits de propri&eacute;t&eacute; intellectuelle incluant la propri&eacute;t&eacute; industrielle et s&rsquo;engage &agrave; (i) supporter toutes les cons&eacute;quences juridiques et financi&egrave;res qui pourraient en r&eacute;sulter pour le Client et (ii) indemniser le Client de tout dommage, perte ou pr&eacute;judice subi par celui-ci et d&eacute;coulant directement ou indirectement de ladite r&eacute;clamation ou action.</p>
        <p>Si en raison d&rsquo;une telle action, le&nbsp;Client&nbsp;se trouve emp&ecirc;ch&eacute; d&rsquo;utiliser tout ou partie des&nbsp;Livrables et des Prestations, il pourra demander, par ordre de priorit&eacute; d&eacute;croissant, au Prestataire, aux frais et aux risques du Prestataire :</p>
        <p>&nbsp;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d'obtenir le droit, pour le&nbsp;Client&nbsp;de continuer &agrave; les exploiter conform&eacute;ment aux dispositions de l&rsquo;article ci-dessus,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&agrave; d&eacute;faut, de les modifier ou les remplacer tout en conservant le m&ecirc;me niveau de fonctionnalit&eacute;s, de performance et de pertinence,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&agrave; d&eacute;faut, de reverser au&nbsp;Client&nbsp;toutes les sommes pay&eacute;es par ce dernier au titre du Contrat.</p>
        <p>&nbsp;</p>
        <p>Le pr&eacute;sent article survivra &agrave; la r&eacute;siliation ou &agrave; l&rsquo;expiration du Contrat pour quelque cause que ce soit.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505326"></a>ARTICLE 6 -&nbsp;CONFIDENTIALITE</h1>
        <h2><a name="_Toc90505327"></a><a name="_Toc54605406"></a><a name="_Toc518470988"></a><a name="_Toc373339866"></a><a name="_Toc373338856"></a>Article 6.01&nbsp;&nbsp;&nbsp;<u>Obligation de confidentialit&eacute;</u></h2>
        <p>Le Prestataire s'oblige, en ce qui concerne la teneur des dispositions du Contrat, ainsi que les informations du Client dont il peut avoir connaissance dans le cadre de la n&eacute;gociation et de l'ex&eacute;cution du Contrat, d&egrave;s lors que ces informations ont un caract&egrave;re sensible notamment sur un plan financier, d&eacute;ontologique, &eacute;conomique, technique, commercial, ou qu&rsquo;elles sont d&eacute;clar&eacute;es comme tel par le Client ou &agrave; raison de leur caract&egrave;re personnel, &agrave;&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les garder strictement confidentielles et s'abstenir de les communiquer &agrave; quiconque, sauf aux fins strictement n&eacute;cessaires &agrave; la bonne ex&eacute;cution du Contrat ou apr&egrave;s l&rsquo;accord pr&eacute;alable &eacute;crit du Client,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s'abstenir de les exploiter, directement ou indirectement, ou permettre leur exploitation par un tiers sous leur contr&ocirc;le, &agrave; toute fin autre que la bonne ex&eacute;cution du Contrat.</p>
        <p>Le Prestataire s&rsquo;engage en particulier &agrave; garder strictement confidentielles toutes les informations recueillies du fait de sa pr&eacute;sence dans les locaux du Client et &agrave; observer la plus grande discr&eacute;tion quant aux techniques, moyens et proc&eacute;d&eacute;s du Client, dont il aurait &eacute;t&eacute; amen&eacute; &agrave; partager la connaissance du fait de l&rsquo;ex&eacute;cution du Contrat.</p>
        <p>Seront consid&eacute;r&eacute;es comme des informations confidentielles appartenant exclusivement au Client, tout sch&eacute;ma, plan, donn&eacute;e, &eacute;quipement, ou tout autre mat&eacute;riel, livrable, donn&eacute;e &agrave; caract&egrave;re personnel et/ou information de quelque nature qu&rsquo;elle soit, incluant celles se rapportant au Client fournis par ce dernier ou fournis par le Prestataire mais refactur&eacute;s au Client comme &eacute;l&eacute;ment du prix de la Prestation.</p>
        <p>Ne constituent pas une information confidentielle aux termes du Contrat et des CGA&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les informations qui sont de notori&eacute;t&eacute; publique &agrave; la date de leur divulgation ou qui le deviendront post&eacute;rieurement sans que le Prestataire soit &agrave; l&rsquo;origine de leur divulgation,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les informations qui ont &eacute;t&eacute; acquises de bonne foi par le Prestataire aupr&egrave;s d&rsquo;un tiers n&rsquo;&eacute;tant pas li&eacute; par un tel engagement de confidentialit&eacute;,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les informations connues des Parties ant&eacute;rieurement &agrave; la conclusion du Contrat,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;les informations requises par la loi ou par une juridiction administrative ou judiciaire &eacute;tant entendu que dans ce cas le Prestataire devra dans les meilleurs d&eacute;lais et dans la mesure du possible notifier pr&eacute;alablement cette demande l&eacute;gale de divulgation au Client.</p>
        <p>La charge de prouver les &eacute;l&eacute;ments susmentionn&eacute;s incombe au Prestataire.</p>
        <h2><a name="_Toc90505328"></a><a name="_Toc54605408"></a><a name="_Toc518470990"></a><a name="_Toc373339868"></a><a name="_Toc373338858"></a>Article 6.02&nbsp;&nbsp;&nbsp;<u>Protection des informations privil&eacute;gi&eacute;es</u></h2>
        <p>Une information privil&eacute;gi&eacute;e est une information pr&eacute;cise qui n&rsquo;a pas &eacute;t&eacute; rendue publique, qui concerne, directement ou indirectement, un ou plusieurs &eacute;metteurs d&rsquo;instruments financiers, ou un ou plusieurs instruments financiers, et qui si elle &eacute;tait rendue publique, serait susceptible d&rsquo;avoir une influence sensible sur le cours des instruments financiers concern&eacute;s ou le cours d&rsquo;instruments financiers qui leur sont li&eacute;s.</p>
        <p>La d&eacute;tention, m&ecirc;me fortuite, d'une information privil&eacute;gi&eacute;e impose &agrave; la personne qui la d&eacute;tient de s'abstenir de :</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;l'exploiter pour son propre compte ou pour compte d'autrui,</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;la communiquer &agrave; des fins autres, ou pour une activit&eacute; autre, que celles &agrave; raison desquelles elle est d&eacute;tenue.</p>
        <h2><a name="_Toc90505329"></a><a name="_Toc54605409"></a><a name="_Toc518470991"></a><a name="_Toc373339869"></a><a name="_Toc373338859"></a>Article 6.03&nbsp;&nbsp;&nbsp;<u>Dur&eacute;e de l&rsquo;obligation de confidentialit&eacute;</u></h2>
        <p>Les obligations objet du pr&eacute;sent article s&rsquo;appliquent aux informations re&ccedil;ues &agrave; compter de l&rsquo;&eacute;mission par le Client ou le B&eacute;n&eacute;ficiaire de son expression de besoins.</p>
        <p>Le Prestataire sera li&eacute; par la pr&eacute;sente obligation aussi longtemps que les donn&eacute;es concern&eacute;es ne seront pas devenues publiques, sauf accord particulier, pr&eacute;alable et &eacute;crit du Client &agrave; une lev&eacute;e de la confidentialit&eacute;.</p>
        <p><a name="_Toc90505330"></a><a name="_Toc518470992"></a><a name="_Toc373339870"></a>Le pr&eacute;sent article survivra &agrave; l&rsquo;expiration ou &agrave; la r&eacute;siliation du Contrat pour quelque cause que ce soit, et cela tant que les informations ne sont pas entr&eacute;es dans le domaine public.</p>
        <h2><a name="_Toc90505331"></a><a name="_Toc54605410"></a><a name="_Toc518470993"></a><a name="_Toc373339871"></a><a name="_Toc373338860"></a>Article 6.04&nbsp;&nbsp;&nbsp;<u>Personnel et sous-traitants</u></h2>
        <p>Le Prestataire se porte fort de ce que les obligations relatives &agrave; la confidentialit&eacute; d&eacute;taill&eacute;es dans le pr&eacute;sent article s&rsquo;imposent &agrave; son personnel et &agrave; ses &eacute;ventuels sous-traitants et en assumera toute la responsabilit&eacute; en cas de manquement de son personnel et de ses &eacute;ventuels sous-traitants (quel que soit le niveau de sous-traitance &eacute;ventuel).</p>
        <h2><a name="_Toc90505332"></a><a name="_Toc54605411"></a><a name="_Toc518470994"></a><a name="_Toc373339872"></a><a name="_Toc373338861"></a>Article 6.05&nbsp;&nbsp;&nbsp;<u>Restitution/destruction</u></h2>
        <p>Sous r&eacute;serve des obligations pr&eacute;vues &agrave; l&rsquo;article &laquo;&nbsp;Donn&eacute;es &agrave; caract&egrave;re personnel&nbsp;&raquo;, le Prestataire s&rsquo;engagent &agrave; restituer ou &agrave; d&eacute;truire, selon les instructions du Client, toutes donn&eacute;es/information, dans un d&eacute;lai maximal de dix (10) jours calendaires &agrave; compter de la r&eacute;ception de la demande.</p>
        <p><strong>&nbsp;</strong></p>
        <h1><a name="_Toc90505333"></a><a name="_Toc54605430"></a><a name="_Toc263094811"></a>ARTICLE 7 -&nbsp;DONNEES A caractere PERSONNEL</h1>
        <p>Le Prestataire s&rsquo;engage &agrave; respecter, et se porte fort de ce que ses employ&eacute;s, mandataires et sous-traitants respectent les stipulations du pr&eacute;sent&nbsp;ARTICLE 7 -</p>
        <h2><a name="_Toc90505356"></a><a name="_Toc54605431"></a>Article 7.01&nbsp;&nbsp;&nbsp;<u>Respect de la l&eacute;gislation applicable en mati&egrave;re de protection des donn&eacute;es &agrave; caract&egrave;re personnel</u></h2>
        <p>Chacune des Parties s&rsquo;engage &agrave; respecter toutes les obligations r&eacute;sultant de l&rsquo;application de toute l&eacute;gislation applicable relative &agrave; la protection des donn&eacute;es &agrave; caract&egrave;re personnel et de la vie priv&eacute;e, y compris celles transposant le Dahir n&deg;1-09-15 du 22 safar 1430 (18 f&eacute;vrier 2009) portant promulgation de la loi n&deg;09-08 relative &agrave; la protection des personnes physiques &agrave; l&rsquo;&eacute;gard du traitement des donn&eacute;es &agrave; caract&egrave;re personnel, ainsi que des instructions, politiques ou codes de conduites notifi&eacute;s par&nbsp;le Client. Les Parties s&rsquo;engagent &agrave; collaborer activement afin de permettre l&rsquo;accomplissement des formalit&eacute;s d&eacute;claratives leur incombant et, le cas &eacute;ch&eacute;ant, obtenir les autorisations des autorit&eacute;s de protection des donn&eacute;es comp&eacute;tentes.</p>
        <h2><a name="_Toc90505357"></a><a name="_Toc54605432"></a><a name="_Toc435441918"></a><a name="_Toc431483933"></a>Article 7.02&nbsp;&nbsp;&nbsp;<u>Traitements r&eacute;alis&eacute;s par le Prestataire</u></h2>
        <p>Les donn&eacute;es &agrave; caract&egrave;re personnel communiqu&eacute;es par le Client (qu&rsquo;elles concernent le Client, ses mandataires ou ses employ&eacute;s), ainsi que toutes celles collect&eacute;es ou produites &agrave; l&rsquo;occasion de l&rsquo;ex&eacute;cution des Prestations (ci-apr&egrave;s les &laquo;&nbsp;Donn&eacute;es &agrave; caract&egrave;re personnel&nbsp;&raquo;), ne pourront faire l&rsquo;objet d&rsquo;aucune op&eacute;ration ou int&eacute;gration dans un fichier et ce, quelle que soit la nature de l&rsquo;op&eacute;ration ou le proc&eacute;d&eacute; utilis&eacute;, autres que celles pr&eacute;vues conform&eacute;ment au Contrat.</p>
        <p>Le Prestataire s&rsquo;engage &agrave; cet &eacute;gard &agrave; :</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ne mettre en &oelig;uvre un Traitement que sur instruction et autorisations re&ccedil;ues du Client et en cons&eacute;quence ne traiter les Donn&eacute;es &agrave; caract&egrave;re personnel du Client, que conform&eacute;ment aux instructions &eacute;crites du Client et s&rsquo;abstenir de tout usage personnel, y compris &agrave; des fins commerciales.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se conformer et s&rsquo;assurer que ses sous-traitants ou toute personne agissant sous son autorit&eacute; ou pour son compte se conforment aux principes de l&rsquo;article 3 de la loi 09-08 et permettre au Client d&rsquo;en v&eacute;rifier le respect.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se conformer sur instruction du Client &agrave; l&rsquo;obligation d&lsquo;information des personnes telle que pr&eacute;vue par l&rsquo;article 5 et l&rsquo;article 6 de la loi 09-08 pr&eacute;cit&eacute;e et faire figurer au pied de tout questionnaire ou formulaire, y compris &eacute;lectronique, les mentions l&eacute;gales pr&eacute;vues par ledit article dont les modalit&eacute;s d&rsquo;exercice des droits d&rsquo;acc&egrave;s, de rectification et d&rsquo;opposition pr&eacute;vus par l&rsquo;article 7, l&rsquo;article 8 et l&rsquo;article 9 de la loi 09-08.&nbsp;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Satisfaire avec diligence par &eacute;crit aux demandes d&rsquo;information du Client tel que pr&eacute;vus par la loi 09-08, afin de leur permettre de r&eacute;pondre (i) aux demandes d&rsquo;exercice de leurs droits pr&eacute;sent&eacute;s par les Personnes concern&eacute;es ou (ii) aux demandes pr&eacute;sent&eacute;es par les Autorit&eacute;s de protection des donn&eacute;es</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informer sans d&eacute;lai le Client de toute demande relative aux Donn&eacute;es &agrave; caract&egrave;re personnel.</p>
        <h2><a name="_Toc90505358"></a><a name="_Toc54605433"></a><a name="_Toc435441919"></a><a name="_Toc431483934"></a>Article 7.03&nbsp;&nbsp;&nbsp;<u>S&eacute;curit&eacute; et confidentialit&eacute; du traitement</u></h2>
        <p>Le Prestataire prendra, et s&rsquo;assure que son personnel prend, dans la mesure n&eacute;cessaire &agrave; l&rsquo;ex&eacute;cution de la Prestation ou au respect de ses autres obligations contractuelles, toute mesure n&eacute;cessaire pour pr&eacute;server et faire respecter l&rsquo;int&eacute;grit&eacute; et la confidentialit&eacute; des Donn&eacute;es &agrave; caract&egrave;re personnel du Client.</p>
        <p>Le Prestataire s&rsquo;engage &agrave;&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respecter l&rsquo;ensemble des obligations figurant dans l&rsquo;article &laquo;&nbsp;S&eacute;curit&eacute;&nbsp;&raquo; des pr&eacute;sentes CGA&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ne rendre accessibles et consultables les Donn&eacute;es &agrave; caract&egrave;re personnel du Client qu&rsquo;aux seuls personnels du Prestataire d&ucirc;ment habilit&eacute;s et autoris&eacute;s en raison de leurs fonctions et qualit&eacute;, dans la stricte limite de ce qui leur est n&eacute;cessaire &agrave; l&rsquo;accomplissement de leurs fonctions&nbsp;et &agrave; communiquer &agrave; premi&egrave;re demande&nbsp;au Client la liste des personnes ainsi habilit&eacute;es ;</p>
        <p>Le Prestataire reconna&icirc;t&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qu&rsquo;en cas de non-respect des obligations souscrites dans le cadre des pr&eacute;sentes CGA, sa responsabilit&eacute; pourra &ecirc;tre engag&eacute;e p&eacute;nalement&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qu&rsquo;il pourra &ecirc;tre tenu responsable envers le Client des dommages qui seraient caus&eacute;s par suite d&rsquo;un manquement aux obligations r&eacute;sultant des pr&eacute;sentes CGA, ainsi qu&rsquo;au versement de r&eacute;parations du pr&eacute;judice subi&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Que le Client pourra prononcer la r&eacute;siliation imm&eacute;diate du Contrat, sans indemnit&eacute; en faveur du Prestataire, en cas de non-respect du secret, de la confidentialit&eacute; et de la s&eacute;curit&eacute; des donn&eacute;es.&nbsp;</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505359"></a><a name="_Toc54605434"></a><a name="_Toc435441920"></a><a name="_Toc431483935"></a>Article 7.04&nbsp;&nbsp;&nbsp;<u>Communication de Donn&eacute;es &agrave; caract&egrave;re personnel du Client</u>&nbsp;<u>&agrave; des tiers</u></h2>
        <p>&nbsp;Les Donn&eacute;es &agrave; caract&egrave;re personnel trait&eacute;es en ex&eacute;cution du Contrat ne pourront faire l&rsquo;objet d&rsquo;aucune divulgation &agrave; des tiers, et ce y compris aux sous-traitants du Prestataire, en dehors des cas pr&eacute;vus dans le Contrat ou de ceux pr&eacute;vus par une disposition l&eacute;gale ou r&eacute;glementaire.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toute op&eacute;ration de sous-traitance impliquant un traitement de Donn&eacute;es &agrave; caract&egrave;re personnel devra avoir &eacute;t&eacute; pr&eacute;alablement et sp&eacute;cifiquement autoris&eacute;e par &eacute;crit par le Client.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le Prestataire s&rsquo;engage &agrave; informer le Client de la localisation des lieux de traitements de Donn&eacute;es &agrave; caract&egrave;re personnel de quelque nature qu&rsquo;ils soient (h&eacute;bergement, backup, maintenance, administration, helpdesk&hellip;).</p>
        <p>Cette liste devra &ecirc;tre mise &agrave; jour en cas de changement de sous-traitants ou en cas de transfert, d&ucirc;ment autoris&eacute; par le Client, de Donn&eacute;es &agrave; caract&egrave;re personnel en dehors du Maroc.</p>
        <p>Le Prestataire s&rsquo;engage &agrave; communiquer sans d&eacute;lai au Client (i) tout acc&egrave;s fortuit ou non autoris&eacute;, faille de s&eacute;curit&eacute; ou autre dont il aurait connaissance au cours de l&rsquo;ex&eacute;cution du Contrat, et (ii) toute demande contraignante de divulgation des Donn&eacute;es &agrave; caract&egrave;re personnel. Par ailleurs, le prestataire s&rsquo;interdit&nbsp;:</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de divulguer, sous quelque forme que ce soit, tout ou partie des informations contenues dans des fichiers informatis&eacute;s ou manuels, ou figurant sur tout support transmis par le client ou concernant les informations recueillies au cours de l&rsquo;ex&eacute;cution du Contrat&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d&rsquo;utiliser les supports ou documents qui lui ont &eacute;t&eacute; confi&eacute;s, par quelque moyen ou finalit&eacute; que ce soit, pour son compte ou pour le compte de tiers, &agrave; des fins professionnelles, personnelles ou priv&eacute;es&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de prendre copie ou stocker, quelles qu&rsquo;en soient la forme et la finalit&eacute;, tout ou partie des informations contenues sur les supports ou documents qui lui ont &eacute;t&eacute; confi&eacute;s ou recueillies par elle au cours de l&rsquo;ex&eacute;cution du Contrat.</p>
        <p>A cet effet, le Prestataire s&rsquo;engage &agrave; mettre &agrave; la charge de son (ou ses) prestataire(s) ou sous-traitant(s) toutes obligations pr&eacute;vues par le pr&eacute;sent article.</p>
        <h2><a name="_Toc90505360"></a><a name="_Toc54605435"></a><a name="_Toc435441921"></a><a name="_Toc431483936"></a>Article 7.05&nbsp;&nbsp;&nbsp;<u>Application de la r&egrave;glementation marocaine en mati&egrave;re de transferts de donn&eacute;es&nbsp;</u><u>vers un pays &eacute;tranger</u></h2>
        <p><a name="_Toc435441922"></a><a name="_Toc431483937"></a>Conform&eacute;ment &agrave; l&rsquo;article 43 et l&rsquo;article 44 de la loi 09-08, le transfert de donn&eacute;es personnelles &agrave; l&rsquo;&eacute;tranger ne peut &ecirc;tre effectu&eacute; que dans les cas suivants :</p>
        <ol>
        <li>Vers un pays figurant&nbsp;sur la&nbsp;<a href="http://www.cndp.ma/images/deliberations/deliberation-n-236-2015-18-12-2015.pdf">liste &eacute;tablie par la CNDP</a><a href="#_ftn1" name="_ftnref1"><sup><sup>[1]</sup></sup></a>;</li>
        <li>Vers un pays ne figurant pas sur la&nbsp;<a href="http://www.cndp.ma/images/deliberations/deliberation-n-236-2015-18-12-2015.pdf">liste &eacute;tablie par la CNDP</a>&nbsp;dans les conditions suivantes :</li>
        </ol>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quand la personne concern&eacute;e a donn&eacute; express&eacute;ment son consentement au transfert.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si le transfert est n&eacute;cessaire :</p>
        <ol>
        <li>a)&agrave; la sauvegarde de la vie de la personne concern&eacute;e ;</li>
        <li>b)&agrave; la pr&eacute;servation de l&rsquo;int&eacute;r&ecirc;t public ;</li>
        <li>c)au respect d&rsquo;obligations permettant d&rsquo;assurer la constatation, l&rsquo;exercice ou la d&eacute;fense d&rsquo;un droit en justice ;</li>
        <li>d)&agrave; l&rsquo;ex&eacute;cution d&rsquo;un contrat entre le responsable du traitement et la personne concern&eacute;e ;</li>
        <li>e)&agrave; l&rsquo;ex&eacute;cution d&rsquo;un contrat, dans l&rsquo;int&eacute;r&ecirc;t de la personne concern&eacute;e, entre le responsable du traitement et un tiers ;</li>
        <li>f)&agrave; l&rsquo;ex&eacute;cution d&rsquo;une mesure d&rsquo;entraide judiciaire internationale ;</li>
        <li>g)&agrave; la pr&eacute;vention, le diagnostic ou le traitement d&rsquo;affections m&eacute;dicales</li>
        </ol>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En application d&rsquo;un accord international auquel le Maroc est partie ;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sur autorisation expresse de la CNDP si le traitement garantit un niveau de protection suffisant de la vie priv&eacute;e et des libert&eacute;s et droits fondamentaux des personnes, notamment en raison des clauses contractuelles ou r&egrave;gles internes d&rsquo;entreprise dont il fait l&rsquo;objet.</p>
        <h2><a name="_Toc90505361"></a><a name="_Toc54605436"></a>Article 7.06&nbsp;&nbsp;&nbsp;<u>Conservation des Donn&eacute;es &agrave; caract&egrave;re personnel du Client par le Prestataire</u></h2>
        <p>Au terme du Contrat, le Prestataire s&rsquo;engage &agrave; restituer ou &agrave; d&eacute;truire, selon des proc&eacute;d&eacute;s et modalit&eacute;s convenus pr&eacute;alablement entre les parties, toutes les Donn&eacute;es &agrave; caract&egrave;re personnel du Client trait&eacute;es pour le compte du Client de mani&egrave;re automatis&eacute;e ou manuelle. Le Client se r&eacute;serve le droit de proc&eacute;der &agrave; toute v&eacute;rification permettant d&rsquo;&eacute;valuer le respect de cette obligation.</p>
        <p>Le pr&eacute;sent article &laquo;&nbsp;Donn&eacute;es &agrave; caract&egrave;re personnel &raquo; survivra &agrave; la r&eacute;siliation ou &agrave; l&rsquo;expiration du Contrat pour quelque cause que ce soit.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505362"></a><a name="_Toc54605445"></a>ARTICLE 8 -&nbsp;R&eacute;siliation</h1>
        <p>&nbsp;</p>
        <p>Le Client se r&eacute;serve le droit de r&eacute;silier tout Contrat de plein droit avec effet imm&eacute;diat, &agrave; tout moment apr&egrave;s envoi au Prestataire d&rsquo;une lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception, si le Client constate&nbsp;:</p>
        <p>&nbsp;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Une inex&eacute;cution totale ou partielle par le Prestataire de l&rsquo;une quelconque de ses obligations d&eacute;coulant de la loi, des pr&eacute;sentes CGA ou des conditions particuli&egrave;res convenues dans le Contrat et sans que le Prestataire n&rsquo;ait rem&eacute;di&eacute; &agrave; ladite inex&eacute;cution dans les d&eacute;lais pr&eacute;alablement accept&eacute;s par le Client&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L&rsquo;ouverture d&rsquo;une proc&eacute;dure de redressement ou de liquidation judiciaire ou toute autre proc&eacute;dure vis&eacute;e par le Livre V du Code de Commerce &laquo;&nbsp;Difficult&eacute;s des entreprises&nbsp;&raquo; &agrave; l&rsquo;encontre du Prestataire&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le refus du Prestataire de signer tout acte ou tout avenant suite &agrave; l&rsquo;adoption d&rsquo;une nouvelle loi ou r&eacute;glementation n&eacute;cessitant un tel acte ou avenant&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La survenance d&rsquo;un cas de force majeure dans les conditions d&eacute;finies &agrave; l&rsquo;ARTICLE 9 -&nbsp;ci-dessous&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La modification de la structure juridique du Prestataire, notamment en cas de fusion, scission, apport partiel d&rsquo;actif, changement de contr&ocirc;le, changement des associ&eacute;s majoritaires actuels hors op&eacute;rations intra Groupe&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La non-reconduction ou de l&rsquo;amoindrissement par le Prestataire de l&rsquo;&eacute;tendue des garanties des polices objet de l&rsquo;article &laquo;&nbsp;ASSURANCE&nbsp;&raquo;&nbsp;des pr&eacute;sentes CGA&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Une sous-traitance non autoris&eacute;e par le Client&nbsp;;</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La cession non autoris&eacute;e du Contrat.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc330548827"></a><a name="_Toc330553769"></a>La r&eacute;siliation sera prononc&eacute;e sans pr&eacute;judice des autres recours du Client et notamment sans pr&eacute;judice de son droit de suspendre l&rsquo;ex&eacute;cution de ses obligations, notamment tout paiement, pr&eacute;alablement &agrave; la notification de la r&eacute;siliation de plein droit pr&eacute;vue au pr&eacute;sent article.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc452573111"></a><a name="_Toc452472314"></a>En outre, sauf stipulations contraires des Parties dans le Contrat, le Client se r&eacute;serve le droit de r&eacute;silier &agrave; tout moment tout ou partie de la commande par lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception, sans avoir &agrave; justifier d&rsquo;un quelconque motif ni &agrave; observer un quelconque pr&eacute;avis &agrave; l&rsquo;&eacute;gard du Prestataire.</p>
        <p>Dans ce cas, le Prestataire pourra r&eacute;clamer une compensation dont le montant sera fix&eacute; d&rsquo;un commun accord entre les Parties, en tenant compte de la date de la r&eacute;siliation, des Prestations livr&eacute;es et/ou r&eacute;alis&eacute;es et des co&ucirc;ts et d&eacute;penses d&eacute;j&agrave; engag&eacute;s par le Prestataire au titre de la commande r&eacute;sili&eacute;e ainsi que des possibilit&eacute;s de vente des produits &agrave; d&rsquo;autres clients.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc54605413"></a><a name="_Toc90505367"></a>ARTICLE 9 -&nbsp;force majeure</h1>
        <p>En cas de survenance d&rsquo;un &eacute;v&eacute;nement r&eacute;sultant de la force majeure tel que d&eacute;fini par l&rsquo;article 269 du Dahir portant Obligations et Contrats, les obligations contractuelles r&eacute;ciproques des Parties seront suspendues pour la dur&eacute;e de l'incident et aucune d&rsquo;entre elles ne pourra pr&eacute;tendre &agrave; une quelconque indemnisation.</p>
        <p>La Partie affect&eacute;e par un cas de force majeure adressera sans d&eacute;lai &agrave; l&rsquo;autre Partie une notification par lettre recommand&eacute;e avec avis de r&eacute;ception informant cette autre Partie de la survenance d'un cas de force majeure, de la dur&eacute;e estim&eacute;e et des moyens n&eacute;cessaires pour y rem&eacute;dier ainsi que des implications probables sur la Prestation. D&egrave;s r&eacute;ception de cette notification, les Parties se rapprocheront et feront leurs meilleurs efforts pour d&eacute;terminer d&rsquo;un commun accord les actions &agrave; entreprendre pour rem&eacute;dier &agrave; l&rsquo;incident susvis&eacute;.</p>
        <p>Si les effets de l&rsquo;&eacute;v&eacute;nement r&eacute;sultant de la force majeure perdurent plus d&rsquo;un (1) mois &agrave; compter de la date de livraison initialement pr&eacute;vue, le Contrat pourra &ecirc;tre r&eacute;sili&eacute; de plein droit par l&rsquo;une ou l&rsquo;autre des parties et sans indemnit&eacute;.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505368"></a>ARTICLE 10 -&nbsp;OBLIGATIONS GENERALES DE SECURITE</h1>
        <p><a name="_Toc90505389"></a><a name="_Toc276024856"></a>D&rsquo;une mani&egrave;re g&eacute;n&eacute;rale, le Prestataire est tenu de mettre en place les mesures techniques et organisationnelles n&eacute;cessaires &agrave; la s&eacute;curit&eacute; des donn&eacute;es et du syst&egrave;me d&rsquo;information du Client, conform&eacute;ment aux r&egrave;gles de l&rsquo;art et ce, afin d&rsquo;assurer&nbsp;:</p>
        <ul>
        <li>le maintien &agrave; un niveau de comp&eacute;tences en mati&egrave;re de s&eacute;curit&eacute; des syst&egrave;mes d&rsquo;information suffisant &agrave; l&rsquo;ex&eacute;cution des prestations,</li>
        <li>le maintien des aptitudes requises pour couvrir les besoins s&eacute;curit&eacute; de la prestation (qualifications, habilitations, certifications) et de pouvoir en justifier &agrave; premi&egrave;re demande. Il doit par ailleurs attester d&rsquo;une ma&icirc;trise suffisante des technologies requises et du savoir-faire n&eacute;cessaire.</li>
        <li>la disponibilit&eacute;, l&rsquo;int&eacute;grit&eacute;, la confidentialit&eacute; des donn&eacute;es et du syst&egrave;me d&rsquo;information du Client,</li>
        <li>la protection des informations du Client contre toute divulgation, modification, destruction, perte, alt&eacute;ration, acc&egrave;s, traitement accidentel, illicite ou non- autoris&eacute;e.</li>
        <li>la tra&ccedil;abilit&eacute; des op&eacute;rations et des traitements effectu&eacute;s pour le Client,</li>
        <li>la portabilit&eacute; ais&eacute;e des donn&eacute;es dans un format structur&eacute; et couramment utilis&eacute;, sur demande du Client et &agrave; tout moment, ainsi que la destruction de mani&egrave;re irr&eacute;versible des donn&eacute;es du Client qui lui ont &eacute;t&eacute; transmises&nbsp;;</li>
        </ul>
        <p><a name="_Toc90505390"></a>Le Prestataire s&rsquo;engage &agrave; justifier de la mise en place de ces mesures pendant toute la dur&eacute;e du Contrat, sans d&eacute;lai, sur demande du Client.</p>
        <p><a name="_Toc90505391"></a>Les politiques, proc&eacute;dures et mesures de s&eacute;curit&eacute; mises en &oelig;uvre par le Prestataire, le cas &eacute;ch&eacute;ant sur instruction du Client, devront en tout &eacute;tat de cause &ecirc;tre document&eacute;es et approuv&eacute;es par le Client et rester conformes aux r&egrave;gles de l&rsquo;art applicables dans ce domaine.</p>
        <p><a name="_Toc90505392"></a>Le Prestataire se porte garant du respect de l&rsquo;ensemble des dispositions relatives &agrave; la maitrise des risques li&eacute;s aux syst&egrave;mes d&rsquo;information inclues dans des pr&eacute;sentes CGA&nbsp;par son personnel et par ses &eacute;ventuels sous-traitants et partenaires. &Agrave; cet effet, le Prestataire s&rsquo;engage &agrave; mettre &agrave; la charge de son (ou ses) prestataire(s), partenaires ou sous-traitant(s) toutes obligations n&eacute;cessaires, au moins &eacute;quivalentes &agrave; celles pr&eacute;vues par le pr&eacute;sent article.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505393"></a><a name="_Toc54605442"></a>ARTICLE 11 -&nbsp;responsabilit&eacute;</h1>
        <p>&nbsp;</p>
        <p>Chacune des Parties sera responsable envers l&rsquo;autre Partie selon les r&egrave;gles du droit commun et indemnisera cette autre partie pour tout dommage direct de quelque nature qu&rsquo;il soit. A ce titre, le Prestataire indemnisera le&nbsp;Client&nbsp;des frais de reconstitution de donn&eacute;es qui r&eacute;sulteraient d'une faute du Prestataire.</p>
        <p>&nbsp;</p>
        <p>Le Prestataire est responsable de son personnel et de ses sous-traitants et des dommages caus&eacute;s par son personnel et par ses sous-traitants.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505394"></a>Le pr&eacute;sent article survivra &agrave; la r&eacute;siliation ou &agrave; l&rsquo;expiration du Contrat pour quelque cause que ce soit.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505395"></a><a name="_Toc54605444"></a>ARTICLE 12 -&nbsp;ASSURANCES</h1>
        <p>&nbsp;</p>
        <p><a name="_Toc90505396"></a>Le Prestataire d&eacute;clare avoir contract&eacute; aupr&egrave;s d&rsquo;une compagnie d&rsquo;assurance notoirement solvable&nbsp;toutes les polices d&rsquo;assurance adapt&eacute;es afin de couvrir l&rsquo;ensemble des risques li&eacute;s &agrave; l&rsquo;exercice de son activit&eacute; et &agrave; l&rsquo;ex&eacute;cution des termes du Contrat vis-&agrave;-vis du Client, notamment&nbsp;les cons&eacute;quences de sa Responsabilit&eacute; Civile Professionnelle et Civile Exploitation.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505397"></a>Le Prestataire s&rsquo;engage &agrave; conserver ces&nbsp;&nbsp;assurances pendant toute la dur&eacute;e du Contrat et &agrave; informer le Client de toute modification.</p>
        <p><a name="_Toc90505398"></a>Le Prestataire devra justifier au Client de la souscription de ces assurances sur simple demande du Client.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505399"></a><a name="_Toc54605447"></a>ARTICLE 13 -&nbsp;Changement de contr&ocirc;le DU PRESTATAIRE</h1>
        <p>&nbsp;</p>
        <p>Le Prestataire devra informer le Client de tout changement de contr&ocirc;le dont il ferait l'objet par lettre recommand&eacute;e avec avis de r&eacute;ception exp&eacute;di&eacute;e dans le mois qui suivra ce changement de contr&ocirc;le.</p>
        <p>A compter de la r&eacute;ception de cette lettre par le Client, celui-ci disposera d'un d&eacute;lai de 2 mois pour exp&eacute;dier une lettre recommand&eacute;e avec avis de r&eacute;ception au Prestataire l'informant de son intention de r&eacute;silier le Contrat. La r&eacute;siliation du Contrat prendra effet un (1) mois apr&egrave;s la r&eacute;ception de ladite lettre par le Prestataire.</p>
        <p>&nbsp;</p>
        <p>Le Contrat &eacute;tant conclu intuitu personae, et dans l&rsquo;hypoth&egrave;se o&ugrave; le Prestataire manquerait &agrave; son obligation d&rsquo;information conform&eacute;ment au pr&eacute;sent article et en cas de changement de contr&ocirc;le av&eacute;r&eacute;, le Client pourra le r&eacute;silier Contrat de plein droit et sans pr&eacute;avis, en adressant une lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception au Prestataire.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505400"></a><a name="_Toc54605448"></a>ARTICLE 14 -&nbsp;Cession<a name="_Toc330548831"></a><a name="_Toc330553773"></a></h1>
        <p>&nbsp;</p>
        <p>Sauf en cas de cession forc&eacute;e du Contrat intervenant dans le cadre d'une proc&eacute;dure collective dont il ferait l'objet, le Prestataire ne pourra c&eacute;der, transf&eacute;rer ou transmettre &agrave; un tiers, &agrave; quelque titre et par quelque moyen que ce soit, y compris dans le cadre d'une op&eacute;ration entra&icirc;nant la transmission universelle de tout ou partie de son patrimoine, les obligations qui lui incombent en vertu du Contrat sans l'accord &eacute;crit pr&eacute;alable du Client.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505401"></a><a name="_Toc54605449"></a>ARTICLE 15 -&nbsp;Sous-traitance</h1>
        <p>&nbsp;</p>
        <p>Le Prestataire ne pourra pas sous-traiter tout ou partie des obligations qui lui incombent en vertu du Contrat sans l'accord pr&eacute;alable et &eacute;crit du Client. En cas de sous-traitance autoris&eacute;e, le Prestataire restera seul et unique responsable de la bonne ex&eacute;cution des Prestations. A cet effet, le Prestataire s&rsquo;engage &agrave; mettre &agrave; la charge de son (ou ses) sous-traitant(s) des obligations, au moins &eacute;quivalentes, &agrave; celles auxquelles il est tenu au titre du Contrat et des CGA.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505402"></a><a name="_Toc54605371"></a>ARTICLE 16 -&nbsp;Personnel dU Prestataire</h1>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505403"></a><a name="_Toc54605372"></a><a name="_Toc476731744"></a>Article 16.01&nbsp;Encadrement</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505404"></a>Le personnel du Prestataire affect&eacute; &agrave; l&rsquo;ex&eacute;cution du Contrat reste sous le contr&ocirc;le administratif et la seule autorit&eacute; hi&eacute;rarchique et disciplinaire du Prestataire pendant toute la dur&eacute;e du Contrat. Le Prestataire assure l&rsquo;encadrement et le contr&ocirc;le de ses salari&eacute;s, y compris lorsque les Prestations sont effectu&eacute;es dans les locaux du Client.</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505405"></a><a name="_Toc54605373"></a><a name="_Toc476731745"></a>Article 16.02&nbsp;Comp&eacute;tence</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505406"></a>Le Prestataire s&rsquo;engage &agrave; pr&eacute;voir des effectifs suffisants avec la comp&eacute;tence requise pour l&rsquo;ex&eacute;cution du Contrat.</p>
        <p><a name="_Toc90505407"></a>Le Prestataire garantit pendant toute la dur&eacute;e du Contrat la stabilit&eacute; de l'&eacute;quipe en charge de son ex&eacute;cution. Elle devra &ecirc;tre qualifi&eacute;e et exp&eacute;riment&eacute;e dans le domaine objet du Contrat.</p>
        <p><a name="_Toc90505408"></a>Le Client se r&eacute;serve, toutefois, le droit de demander le remplacement de tout intervenant dont la comp&eacute;tence serait jug&eacute;e insuffisante ou le comportement inacceptable. Les personnes propos&eacute;es en remplacement devront avoir des qualifications et une exp&eacute;rience jug&eacute;es acceptables par le Client. Si pour des raisons ind&eacute;pendantes de la volont&eacute; du Prestataire, d&ucirc;ment justifi&eacute;es, et accept&eacute;es par le Client, il s&rsquo;av&egrave;re n&eacute;cessaire de remplacer un intervenant, le Prestataire proposera son remplacement par une personne de qualification et d'exp&eacute;rience au moins &eacute;gales et qui doit &ecirc;tre accept&eacute;e par le Client.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505409"></a><a name="_Toc54605374"></a><a name="_Toc476731746"></a>Article 16.03&nbsp;Hygi&egrave;ne et s&eacute;curit&eacute;</h2>
        <p>&nbsp;</p>
        <p>Le Prestataire s&rsquo;engage &agrave; faire le n&eacute;cessaire pour que son personnel lorsqu&rsquo;il se trouvera dans les locaux du Client se conforme au r&egrave;glement int&eacute;rieur et aux dispositions applicables aux entreprises ext&eacute;rieures pr&eacute;sentes dans lesdits locaux et notamment celles relatives &agrave; l&rsquo;hygi&egrave;ne et la s&eacute;curit&eacute;.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505410"></a>Le Client de son c&ocirc;t&eacute; s&rsquo;engage &agrave; porter &agrave; la connaissance du Prestataire ces dispositions.</p>
        <p>&nbsp;</p>
        <p>Dans l'hypoth&egrave;se o&ugrave;, dans le cadre du Contrat et pour les seuls besoins sp&eacute;cifiques li&eacute;s &agrave; la Prestation, le personnel du Prestataire utiliserait le syst&egrave;me d'information du Client, le Prestataire s'engage &agrave; faire le n&eacute;cessaire pour que son personnel s&rsquo;engage &agrave; se conformer aux dispositions en place chez le Client visant &agrave; encadrer l&rsquo;utilisation des moyens de communication &eacute;lectronique (type charte internet) et aux r&egrave;gles de l&rsquo;art relatives &agrave; la protection de l&rsquo;information qui lui seront remises par le Client.</p>
        <h1><a name="_Toc90505411"></a><a name="_Toc54605437"></a><a name="_Toc1024709"></a>ARTICLE 17 -&nbsp;Responsabilit&eacute; soci&eacute;tale et environnementale</h1>
        <p>&nbsp;</p>
        <p><a name="_Toc1024710"></a><a name="_Toc534823049"></a>Le Client a mis en place des mesures destin&eacute;es &agrave; identifier les risques et &agrave; pr&eacute;venir les atteintes graves envers les droits humains et les libert&eacute;s fondamentales, la sant&eacute; et la s&eacute;curit&eacute; des personnes ainsi que l&rsquo;environnement, r&eacute;sultant de son activit&eacute; et de celles de ses prestataires.</p>
        <p>Dans ce cadre, le Prestataire s&rsquo;engage sur l&rsquo;honneur &agrave; respecter les obligations concernant le respect de ces grands principes vis-&agrave;-vis des droits de l&rsquo;Homme, des conditions de travail, de l&rsquo;environnement et de la lutte contre la corruption.</p>
        <p>Le Client se r&eacute;serve le droit de v&eacute;rifier le respect de ces obligations par le Prestataire par tout moyen, y compris par des audits sur site, le cas &eacute;ch&eacute;ant.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505412"></a><a name="_Toc54605384"></a>ARTICLE 18 -&nbsp;STIPULATIONS RELATIVES &Agrave; LA LUTTE CONTRE LA CORRUPTION&nbsp;</h1>
        <p>&nbsp;</p>
        <p>Le Prestataire d&eacute;clare que ni lui ni aucune personne agissant sous son contr&ocirc;le (y compris ses administrateurs, dirigeants ou salari&eacute;s, chacun constituant une &laquo;&nbsp;Personne sous son contr&ocirc;le&nbsp;&raquo;) n&rsquo;a, &agrave; sa connaissance, commis, directement ou indirectement, un acte de corruption vis-&agrave;-vis d&rsquo;un tiers ou d&rsquo;un agent public (c&rsquo;est-&agrave;-dire, tout fonctionnaire, salari&eacute;, repr&eacute;sentant ou toute autre personne agissant dans l&rsquo;exercice de ses fonctions officielles pour ou pour le compte d&rsquo;un gouvernement de quelque juridiction que ce soit, d&rsquo;une organisation internationale publique, d'un parti politique, d&rsquo;un organisme quasi-gouvernemental ou d'une entit&eacute; d&eacute;tenue ou contr&ocirc;l&eacute;e par un &Eacute;tat ou par un organisme public ou quasi-gouvernemental). Le terme &laquo;&nbsp;Acte de corruption&nbsp;&raquo; d&eacute;signe la pratique consistant &agrave; solliciter, autoriser, offrir, promettre ou donner un avantage financier ou autre (y compris, sans s&rsquo;y limiter, tout paiement, pr&ecirc;t, cadeau ou don d'un objet de valeur) pour (a) inciter une personne ou un agent public &agrave; agir de mani&egrave;re inopportune ou malhonn&ecirc;te dans l&rsquo;exercice de ses fonctions et/ou (b) obtenir ou conserver de mani&egrave;re indue ou malhonn&ecirc;te un march&eacute; pour le Client.</p>
        <p>Le Prestataire&nbsp;s&rsquo;engage, ainsi que les Personnes sous son contr&ocirc;le&nbsp;:</p>
        <ul>
        <li>A respecter les lois applicables en mati&egrave;re de lutte contre la corruption.</li>
        <li>A ne rien faire, f&ucirc;t-ce par manquement, qui puisse mettre le Client dans une situation o&ugrave; il enfreindrait une loi applicable en mati&egrave;re de lutte contre la corruption.</li>
        <li>A ne pas attribuer, offrir, promettre, recevoir ou demander quelque pot-de-vin que ce soit, y compris aupr&egrave;s d&rsquo;un agent public.</li>
        <li>A mettre en place et maintenir des contr&ocirc;les comptables ad&eacute;quats et &agrave; tenir des registres, des livres et des comptes raisonnablement d&eacute;taill&eacute;s en ce qui concerne la relation commerciale qu&rsquo;il entretient avec le Client.</li>
        <li>Si le Client le demande de bonne foi, d&egrave;s lors qu&rsquo;il existe un motif raisonnable de soup&ccedil;onner l&rsquo;existence ou la perp&eacute;tration d'un Acte de corruption &agrave; tout moment durant l&rsquo;ex&eacute;cution du Contrat, &agrave; autoriser le Client &agrave; r&eacute;aliser un Audit du Prestataire, d&egrave;s lors que l&rsquo;audit concerne l&rsquo;ex&eacute;cution du Contrat, directement ou par l&rsquo;entremise d&rsquo;un repr&eacute;sentant d&eacute;sign&eacute;. Le Prestataire s&rsquo;engage &agrave; fournir au Client l&rsquo;assistance n&eacute;cessaire pour lui permettre de mener &agrave; bien l&rsquo;audit. Le Client en assumera les co&ucirc;ts &agrave; condition qu&rsquo;ils soient raisonnables.</li>
        <li>A informer rapidement le Client de toute accusation de fraude, de corruption ou de pratiques ill&eacute;gales &agrave; son encontre &agrave; tout moment durant la dur&eacute;e du Contrat dans le cadre d&rsquo;une proc&eacute;dure judiciaire, d&rsquo;une proc&eacute;dure en arbitrage ou d'une proc&eacute;dure administrative, ou d&egrave;s lors qu&rsquo;une autorit&eacute; gouvernementale ou r&eacute;glementaire lance une enqu&ecirc;te sur la base desdites accusations.</li>
        <li>A s&rsquo;assurer que toute personne physique ou morale ext&eacute;rieure au Prestataire devant fournir des services en vertu du Contrat le fasse uniquement sur la base d'un contrat &eacute;crit qui impose &agrave; la personne concern&eacute;e des conditions &eacute;quivalentes &agrave; celles auxquelles est soumise le Prestataire aux termes de la pr&eacute;sente clause. Le Prestataire doit faire tout son possible pour s&rsquo;assurer que la personne concern&eacute;e respecte ces conditions et r&eacute;ponde de ses actes aupr&egrave;s du Client en cas de violation desdites conditions.</li>
        </ul>
        <p>Le Prestataire&nbsp;certifie que ni lui ni l&rsquo;un quelconque de ses mandataires, interm&eacute;diaires ou Personnes sous son contr&ocirc;le n&rsquo;a &eacute;t&eacute; priv&eacute;(e) par une autorit&eacute; gouvernementale ou internationale du droit de r&eacute;pondre &agrave; un appel d&rsquo;offres ou de se voir confier un march&eacute; en raison d&rsquo;un Acte de corruption av&eacute;r&eacute; ou pr&eacute;sum&eacute;.</p>
        <p>Le Prestataire&nbsp;s&rsquo;engage &agrave; signaler au Client toute modification importante de ses politiques et proc&eacute;dures applicables en mati&egrave;re de lutte contre la corruption.</p>
        <p><strong>&nbsp;</strong></p>
        <p>Si, sur la base d&rsquo;&eacute;l&eacute;ments tels que les informations publiques, entre autres,&nbsp;le Client&nbsp;a des raisons raisonnables de soup&ccedil;onner que le Prestataire a agi de mani&egrave;re incompatible avec les obligations d&eacute;finies &agrave; la pr&eacute;sente clause, ou s&rsquo;il est av&eacute;r&eacute; que le Prestataire a enfreint les obligations qui lui sont d&eacute;volues &agrave; la pr&eacute;sente clause,&nbsp;le Client&nbsp;sera fond&eacute; &agrave; suspendre ou &agrave; r&eacute;silier imm&eacute;diatement l&rsquo;ensemble des Contrats le liant au Prestataire sans aucune indemnit&eacute;.</p>
        <p><strong>&nbsp;</strong></p>
        <p>Le Prestataire devra indemniser&nbsp;le Client&nbsp;et ses administrateurs, dirigeants, salari&eacute;s, mandataires et entit&eacute;s affili&eacute;es pour toutes les pertes qu&rsquo;ils subiraient dans le cas o&ugrave; elle violerait la pr&eacute;sente clause.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505413"></a><a name="_Toc54605440"></a>ARTICLE 19 -&nbsp;SANCTIONS&nbsp;</h1>
        <h1>&nbsp;</h1>
        <p>Le Prestataire d&eacute;clare que ni lui, ni aucune de ses soci&eacute;t&eacute;s affili&eacute;es, filiales ou holding, ni, &agrave; sa connaissance, aucun de ses administrateurs, dirigeants et employ&eacute;s, ou l'un de ses agents et interm&eacute;diaires, n'est une personne inscrite sur une liste de sanctions financi&egrave;res internationales (une &laquo;&nbsp;Personne Sanctionn&eacute;e&nbsp;&raquo;).</p>
        <p>&nbsp;</p>
        <p>Le Prestataire d&eacute;clare et garantit (la d&eacute;claration et la garantie seront r&eacute;put&eacute;es &ecirc;tre r&eacute;p&eacute;t&eacute;es pendant toute la dur&eacute;e du Contrat) qu'il ne conclura aucun arrangement concernant les Prestations avec une Personne Sanctionn&eacute;e.</p>
        <p>&nbsp;</p>
        <p>Le Prestataire informe le Client, et s'assure que tout agent ou interm&eacute;diaire mandat&eacute; par lui aux fins de l'ex&eacute;cution du Contrat l&rsquo;informe, dans les plus brefs d&eacute;lais apr&egrave;s en avoir pris connaissance, de l&rsquo;existence de toute r&eacute;clamation, action, poursuite, proc&eacute;dure ou enqu&ecirc;te &agrave; son encontre relative &agrave; des sanctions financi&egrave;res internationales.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Le Client peut r&eacute;silier le Contrat avec effet imm&eacute;diat et sans indemnit&eacute; si le Prestataire, ou, le cas &eacute;ch&eacute;ant, tout agent, est en violation de sanctions financi&egrave;res internationales, d&eacute;clarations ou engagements pr&eacute;vus dans cette clause.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505414"></a><a name="_Toc54605451"></a>ARTICLE 20 -&nbsp;Communication</h1>
        <p>&nbsp;</p>
        <p><a name="_Toc90505415"></a>Le Client autorise le Prestataire exclusivement pendant la dur&eacute;e du Contrat &agrave; mentionner son nom &agrave; l&rsquo;exclusion de toute autre indication sur une liste de r&eacute;f&eacute;rences qu&rsquo;il pourra diffuser aupr&egrave;s de ses prospects. Toute autre communication sous quelque forme que ce soit et quel qu&rsquo;en soit le motif sera soumise &agrave; l&rsquo;accord pr&eacute;alable &eacute;crit du Client.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505416"></a><a name="_Toc54605450"></a><a name="_Toc374369156"></a><a name="_Toc161648687"></a><a name="_Toc160964685"></a>ARTICLE 21 -&nbsp;MODIFICATION DES CONDITIONS GENERALES D&rsquo;ACHAT</h1>
        <p>&nbsp;</p>
        <p><a name="_Toc90505417"></a>Les CGA sont susceptibles d&rsquo;&eacute;voluer en fonction de l&rsquo;organisation ou des imp&eacute;ratifs commerciaux du Client. Les &eacute;ventuelles modifications feront l&rsquo;objet d&rsquo;un avenant aux pr&eacute;sents CGA.</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505418"></a><a name="_Toc54605453"></a><a name="_Toc128301340"></a><a name="_Toc476731780"></a><a name="_Toc475953922"></a><a name="_Toc475191912"></a>ARTICLE 22 -&nbsp;CLAUSES GENERALES</h1>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505419"></a><a name="_Toc54605454"></a><a name="_Toc476731781"></a><a name="_Toc475953923"></a><a name="_Toc475191913"></a>Article 22.01&nbsp;Titres</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505420"></a>Les titres des paragraphes et articles du Contrat sont ins&eacute;r&eacute;s pour en faciliter la lecture mais ne peuvent en aucun cas servir pour guider leur interpr&eacute;tation.</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505421"></a><a name="_Toc54605455"></a>Article 22.02&nbsp;&Eacute;lection de domicile</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505422"></a>Pour l&rsquo;ex&eacute;cution du Contrat ainsi que de ses suites, les Parties font respectivement &eacute;lection de domicile en leurs si&egrave;ges sociaux indiqu&eacute;s en t&ecirc;te des pr&eacute;sentes.</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505423"></a><a name="_Toc54605456"></a><a name="_Toc476731782"></a><a name="_Toc475953924"></a><a name="_Toc475191914"></a>Article 22.03&nbsp;Nullit&eacute; partielle</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505424"></a>Si l'une (ou plusieurs) des stipulations du Contrat est tenue, rendue ou d&eacute;clar&eacute;e non valide en raison d'une loi, d'une r&eacute;glementation ou d'une d&eacute;cision d&rsquo;une juridiction comp&eacute;tente, les Parties se concerteront pour convenir d&rsquo;une ou des stipulation(s) rempla&ccedil;ant la ou les stipulation(s) invalide(s) et permettant d&rsquo;atteindre, dans la mesure du possible, le but vis&eacute; par la ou les clause(s) d&rsquo;origine. Toutes les autres stipulations du Contrat gardent toute leur force et leur port&eacute;e.</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505425"></a><a name="_Toc54605457"></a>Article 22.04&nbsp;Manquement</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505426"></a>Le fait pour le Client de ne pas se pr&eacute;valoir d&rsquo;un manquement, par le Prestataire, &agrave; l&rsquo;une quelconque de ses obligations, ne saurait &ecirc;tre interpr&eacute;t&eacute; comme une renonciation &agrave; l&rsquo;obligation en cause ou comme un avenant au Contrat, et ne pourra emp&ecirc;cher le Client de s'en pr&eacute;valoir &agrave; l'avenir.</p>
        <p>&nbsp;</p>
        <h2><a name="_Toc90505427"></a>Article 22.05&nbsp;Archivage</h2>
        <p>&nbsp;</p>
        <p><a name="_Toc90505428"></a>Le Prestataire s&rsquo;engage &agrave; conserver et archiver l&rsquo;ensemble des documents li&eacute;s aux Prestations command&eacute;s par le Client pendant une dur&eacute;e de dix (10) ans suivant la date de chaque commande, de mani&egrave;re &agrave; pouvoir communiquer de tels documents au Client dans les meilleurs d&eacute;lais sur premi&egrave;re demande de ce dernier.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h1><a name="_Toc90505429"></a><a name="_Toc54605459"></a><a name="_Toc128301341"></a><a name="_Toc476731784"></a><a name="_Toc468595518"></a>ARTICLE 23 -&nbsp;LOI APPLICABLE, LITIGES ET ATTRIBUTION DE COMPETENCE</h1>
        <p>&nbsp;</p>
        <p><a name="_Toc90505430"></a>Le Contrat est soumis au droit marocain.</p>
        <p>&nbsp;</p>
        <p><a name="_Toc90505431"></a>A d&eacute;faut d&rsquo;accord amiable, tout litige relatif &agrave; l&rsquo;interpr&eacute;tation et &agrave; l&rsquo;ex&eacute;cution du Contrat est soumis au Tribunal de Commerce de Casablanca auquel les Parties attribuent comp&eacute;tence territoriale quel que soit le lieu d&rsquo;ex&eacute;cution des Prestations et le si&egrave;ge social du d&eacute;fendeur.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Fait de bonne foi &agrave; Casablanca, en (03) trois exemplaires originaux, dont (02) deux pour le Client et (01) un pour le Prestataire.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>Pour le prestataire&nbsp;</strong></p>
        <p>Nom &amp; Pr&eacute;nom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
        <p>Titre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
        <p>Signature &amp; Cachet&nbsp;:</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Casablanca le&nbsp;:</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p style="font-weight: 400;">&nbsp;</p>
        <p><a href="#_ftnref1" name="_ftn1"><em><strong>[1]</strong></em></a><em>&nbsp;La liste &eacute;tablie par la CNDP est reprise dans la D&eacute;lib&eacute;ration n&deg;236-2015 du 18 D&eacute;cembre 2015 portant modification de la d&eacute;lib&eacute;ration n&deg;465-2013 du 06 Septembre 2013 &eacute;tablissant la liste des Etats assurant une protection suffisante de la vie priv&eacute;e et des libert&eacute;s et droits fondamentaux des personnes &agrave; l&rsquo;&eacute;gard du traitement des donn&eacute;es &agrave; caract&egrave;re personnel.</em></p>
    </div>
</body>
</html>
