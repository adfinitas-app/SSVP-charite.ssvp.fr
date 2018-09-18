---
permalink: /grandeconsultation/
evenement_woopra: formulaire
panneau_introduction:
  fond_image_path: /uploads/intro-background.png
  fond_color:
  texte_html: "<p class='intro-title'>« La solitude est l’une des maladies  les plus répandues\_»</p><img class='pape' src='/uploads/pape.png' alt='Pape François'/><p class='pape-name'>Pape François</p><p class='description'>Aidez la Société de Saint-Vincent-de-Paul à adapter ses actions aux nouvelles formes de solitude et à leurs conséquences. Prenez quelques instants pour répondre à cette consultation personnelle. Merci</p><a class='button' href='#slide-0'>Je donne mon avis</a>"
panneau_question:
  fond_image_path:
  fond_color:
  texte_html:
  champs:
    - type: choix_unique
      nom_machine: question1
      reponses:
        - valeur: 'Oui, j’y pense souvent, ou je la vis moi-même'
        - valeur: 'C’est une préoccupation, mais je n’y pense que de temps en temps'
        - valeur: Non
      options:
        propriete_visiteur: false
        label: "La solitude est une préoccupation majeure pour 80% des français. L’est-elle aussi pour vous\_?"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path: /uploads/question-1-bg.jpg
        fond_color:
    - type: choix_unique
      nom_machine: question2
      reponses:
        - valeur: 'Oui, il y a dans mon entourage, mon voisinage… des personnes qui sont très seules.'
        - valeur: 'Oui, elles ne sont pas dans mon entourage proche, mais je croise souvent des personnes qui me semblent souffrir de solitude.'
        - valeur: 'Non, autour de moi, personne n’est confronté à la solitude.'
      options:
        propriete_visiteur: false
        label: "Un sondage effectué en 2013 montre que la solitude a augmenté en France, touchant 5 millions de Français en 2013 contre 4 millions en 2010. Avez-vous constaté cette tendance\_?"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path: /uploads/question-2-bg.png
        fond_color:
    - type: choix_multiple
      nom_machine: question3
      reponses:
        - valeur: 'Visiter les personnes âgées, familles monoparentales, personnes hospitalisées et personnes sans logis…'
        - valeur: Organiser des repas et des rencontres où sont conviées les personnes seules
        - valeur: Proposer des séjours de vacances aux personnes âgées et aux familles pauvres et isolées
        - valeur: Chercher sans cesse des solutions innovantes pour faire face aux nouvelles situations de pauvreté
      options:
        propriete_visiteur: false
        label: "La Société de Saint-Vincent-de-Paul lutte contre toutes les formes de solitude au quotidien. Parmi les actions qu’elle mène dans ce domaine, lesquelles vous semblent particulièrement importantes\_? (Plusieurs réponses possibles)"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path: /uploads/question-3-bg.jpg
        fond_color:
panneau_informations_personnelles:
  fond_image_path:
  fond_color:
  texte_html: ''
  champs:
    - type: champ_libre_court
      nom_machine: lastname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: 'Nom*'
        requis: true
        message_erreur: vous devez remplir ce champ
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: firstname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: 'Prénom*'
        requis: true
        message_erreur: Vous devez remplir ce champ
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: telephone
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: Téléphone
        requis: false
        message_erreur: Vous devez remplir ce champ
        controle: telephone
        fond_image_path:
        fond_color:
    - type: choix_multiple
      nom_machine: optinnps
      reponses:
        - valeur: Je souhaite recevoir les lettres d’information de la Société de Saint-Vincent-de-Paul
      options:
        propriete_visiteur: true
        label:
        placeholder:
        requis: false
        message_erreur:
        controle:
        fond_image_path:
        fond_color:
options:
  bouton_de_soumission: Je valide
  page_de_remerciement_path: /merci.html
  largeur_champ: '100%'
  champs_caches_liste:
    - nom:
      valeur:
      propriete_visiteur: false
  meta:
    title: Questionnaire
    description:
_comments:
  nom: Obligatoire et unique. Description courte du champ
  texte: Ce champ peut etre vide
  placeholder: 'Seulement pour les champs de type "champ libre"'
  controle: 'Seulement pour les champs de type "champ libre"'
  reponses: 'Seulement pour les champs de type "choix"'
  page_de_remerciement_path: "URL de la page lorsque l'utilisateur valide le formulaire"
  propriete_visiteur: Cochez cette case si vous souhaitez que ce champ remonte dans les propriétés du visiteur sur Woopra
  evenement_woopra: "Nom de l'evenement sur Woopra qui stockera les répondants"
  fond_image_path: Image de fond du champ
  largeur_champ: Définit la taille des champs
---
{% include form.html %}

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WD522K');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WD522K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
