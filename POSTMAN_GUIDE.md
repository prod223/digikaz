# Guide d'Utilisation de la Collection Postman - DigiKaz API

## 📋 Vue d'ensemble

Cette collection Postman contient tous les endpoints de l'API DigiKaz pour tester la plateforme de location de logements étudiants. Elle est organisée en sections logiques et inclut des exemples de données pour chaque requête.

## 🚀 Installation et Configuration

### 1. Importer la Collection

1. Ouvrez Postman
2. Cliquez sur "Import" dans la barre d'outils
3. Importez les fichiers suivants :
   - `DigiKaz_API_Collection.postman_collection.json`
   - `DigiKaz_Environment.postman_environment.json`

### 2. Configurer l'Environnement

1. Sélectionnez l'environnement "DigiKaz - Environnement Local" dans le sélecteur d'environnement
2. Vérifiez que l'URL de base est configurée : `http://localhost:3000`
3. Assurez-vous que votre serveur Next.js est en cours d'exécution

### 3. Variables d'Environnement

Les variables principales sont :
- `base_url` : URL de base de l'API (http://localhost:3000)
- `auth_token` : Token d'authentification (généré automatiquement)
- `bailleur_id`, `locataire_id`, `logement_id`, etc. : IDs des ressources créées

## 🔐 Workflow d'Authentification

### Étape 1 : Inscription d'un Bailleur

1. **Endpoint** : `POST /api/auth/signup`
2. **Corps de la requête** :
```json
{
  "email": "{{test_email_bailleur}}",
  "password": "{{test_password}}",
  "nom": "{{test_nom_bailleur}}",
  "telephone": "{{test_telephone}}",
  "type_utilisateur": "bailleur"
}
```
3. **Actions post-requête** :
   - Copier l'ID du bailleur créé dans la variable `bailleur_id`
   - Vérifier que l'email de confirmation a été envoyé

### Étape 2 : Connexion

1. **Endpoint** : `POST /api/auth/signin`
2. **Corps de la requête** :
```json
{
  "email": "{{test_email_bailleur}}",
  "password": "{{test_password}}"
}
```
3. **Actions post-requête** :
   - Le token d'authentification est automatiquement stocké dans `auth_token`
   - Vérifier que la connexion est réussie

### Étape 3 : Vérification du Profil

1. **Endpoint** : `GET /api/auth/me`
2. **Vérifications** :
   - Le profil utilisateur est récupéré
   - Le type d'utilisateur est correct
   - Les informations de base sont présentes

## 🏠 Workflow de Gestion des Logements

### Étape 1 : Créer un Logement

1. **Endpoint** : `POST /api/logements`
2. **Corps de la requête** :
```json
{
  "bailleur_id": "{{bailleur_id}}",
  "titre": "Studio moderne près de la Sorbonne",
  "description": "Studio rénové de 25m² avec mezzanine, idéal pour étudiant",
  "adresse": "15 Rue des Écoles",
  "code_postal": "75005",
  "ville": "{{test_ville}}",
  "pays": "France",
  "latitude": {{test_latitude}},
  "longitude": {{test_longitude}},
  "type_logement": "studio",
  "surface": {{test_surface}},
  "nombre_pieces": 1,
  "nombre_chambres": 1,
  "nombre_salles_bain": 1,
  "prix_mensuel": {{test_prix_mensuel}},
  "charges_mensuelles": 50,
  "caution": 1500,
  "disponible": true,
  "statut_logement": "disponible",
  "equipements": ["wifi", "chauffage", "ascenseur"],
  "photos": ["photo1.jpg", "photo2.jpg"]
}
```
3. **Actions post-requête** :
   - Copier l'ID du logement créé dans `logement_id`
   - Vérifier que le logement est bien créé

### Étape 2 : Lister les Logements

1. **Endpoint** : `GET /api/logements`
2. **Paramètres de requête** :
   - `page=1`
   - `limit=10`
   - `ville={{test_ville}}`
   - `prix_min={{test_budget_min}}`
   - `prix_max={{test_budget_max}}`
3. **Vérifications** :
   - La pagination fonctionne
   - Les filtres s'appliquent correctement
   - Le logement créé apparaît dans la liste

### Étape 3 : Récupérer un Logement

1. **Endpoint** : `GET /api/logements/{{logement_id}}`
2. **Vérifications** :
   - Toutes les informations du logement sont présentes
   - Les informations du bailleur sont incluses
   - La note moyenne est calculée

## 👥 Workflow de Gestion des Locataires

### Étape 1 : Inscription d'un Locataire

1. **Endpoint** : `POST /api/auth/signup`
2. **Corps de la requête** :
```json
{
  "email": "{{test_email_locataire}}",
  "password": "{{test_password}}",
  "nom": "{{test_nom_locataire}}",
  "telephone": "{{test_telephone}}",
  "type_utilisateur": "locataire"
}
```

### Étape 2 : Créer le Profil Locataire

1. **Endpoint** : `POST /api/locataires`
2. **Corps de la requête** :
```json
{
  "nom": "{{test_nom_locataire}}",
  "email": "{{test_email_locataire}}",
  "telephone": "{{test_telephone}}",
  "date_naissance": "2000-03-20",
  "universite": "{{test_universite}}",
  "niveau_etudes": "master",
  "domaine_etudes": "Informatique",
  "annee_etudes": 2,
  "budget_max": {{test_budget_max}},
  "ville_preferee": "{{test_ville}}",
  "is_active": true
}
```

### Étape 3 : Définir les Préférences

1. **Endpoint** : `POST /api/preferences`
2. **Corps de la requête** :
```json
{
  "locataire_id": "{{locataire_id}}",
  "type_logement_prefere": "appartement",
  "budget_min": {{test_budget_min}},
  "budget_max": {{test_budget_max}},
  "ville_preferee": "{{test_ville}}",
  "surface_min": 20,
  "surface_max": 50,
  "nombre_chambres_min": 1,
  "nombre_chambres_max": 2,
  "equipements_souhaites": ["wifi", "chauffage", "ascenseur"],
  "distance_max_universite": 5,
  "animaux_autorises": true,
  "fumeur": false
}
```

## 📅 Workflow de Réservation

### Étape 1 : Créer une Réservation

1. **Endpoint** : `POST /api/reservations`
2. **Corps de la requête** :
```json
{
  "logement_id": "{{logement_id}}",
  "locataire_id": "{{locataire_id}}",
  "date_debut": "{{test_date_debut}}",
  "date_fin": "{{test_date_fin}}",
  "montant_total": 7500,
  "caution_payee": 1500,
  "statut": "en_attente",
  "commentaires": "Étudiant sérieux, recherche logement pour l'année universitaire"
}
```

### Étape 2 : Confirmer la Réservation

1. **Endpoint** : `PUT /api/reservations/{{reservation_id}}`
2. **Corps de la requête** :
```json
{
  "statut": "confirmee",
  "commentaires": "Réservation confirmée par le bailleur"
}
```

## 🔍 Workflow de Recherche

### Recherche Avancée

1. **Endpoint** : `GET /api/search`
2. **Paramètres de requête** :
   - `ville={{test_ville}}`
   - `prix_min={{test_budget_min}}`
   - `prix_max={{test_budget_max}}`
   - `type_logement=appartement`
   - `surface_min=20`
   - `surface_max=50`
   - `latitude={{test_latitude}}`
   - `longitude={{test_longitude}}`
   - `rayon={{test_rayon}}`
   - `locataire_id={{locataire_id}}`
3. **Vérifications** :
   - Les résultats sont filtrés correctement
   - Le score de compatibilité est calculé
   - La recherche géographique fonctionne

## ⭐ Workflow d'Évaluation

### Créer un Avis

1. **Endpoint** : `POST /api/avis`
2. **Corps de la requête** :
```json
{
  "logement_id": "{{logement_id}}",
  "locataire_id": "{{locataire_id}}",
  "note": {{test_note}},
  "commentaire": "Excellent logement, bien situé et bien équipé. Le bailleur est très réactif.",
  "date_avis": "2024-01-15"
}
```

## 💬 Workflow de Communication

### Créer une Interaction

1. **Endpoint** : `POST /api/interactions`
2. **Corps de la requête** :
```json
{
  "locataire_id": "{{locataire_id}}",
  "bailleur_id": "{{bailleur_id}}",
  "logement_id": "{{logement_id}}",
  "type_interaction": "message",
  "contenu": "Bonjour, je suis intéressé par votre logement. Est-il toujours disponible ?",
  "date_interaction": "2024-01-15T10:30:00Z"
}
```

## 🧪 Tests Automatisés

### Scripts de Test Post-Requête

Ajoutez ces scripts dans l'onglet "Tests" de vos requêtes :

#### Test de Réponse de Succès
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has success property", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.property('success');
    pm.expect(responseJson.success).to.be.true;
});
```

#### Test de Validation des Données
```javascript
pm.test("Response contains required fields", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson.data).to.have.property('id');
    pm.expect(responseJson.data).to.have.property('nom');
    pm.expect(responseJson.data).to.have.property('email');
});
```

#### Test de Stockage d'ID
```javascript
pm.test("Store ID in environment variable", function () {
    const responseJson = pm.response.json();
    if (responseJson.data && responseJson.data.id) {
        pm.environment.set("bailleur_id", responseJson.data.id);
    }
});
```

## 🔧 Configuration Avancée

### Variables Dynamiques

Utilisez ces variables dans vos requêtes :
- `{{$timestamp}}` : Timestamp actuel
- `{{$randomInt}}` : Nombre aléatoire
- `{{$guid}}` : GUID unique

### Headers d'Authentification

Pour les requêtes authentifiées, ajoutez ce header :
```
Authorization: Bearer {{auth_token}}
```

### Tests de Performance

Ajoutez ce test pour vérifier les performances :
```javascript
pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
```

## 📊 Monitoring et Debugging

### Logs de Requêtes

Activez les logs dans Postman :
1. View → Show Postman Console
2. Vérifiez les requêtes envoyées
3. Analysez les réponses et erreurs

### Tests de Charge

Utilisez Newman (CLI Postman) pour les tests automatisés :
```bash
newman run DigiKaz_API_Collection.postman_collection.json -e DigiKaz_Environment.postman_environment.json
```

## 🚨 Gestion des Erreurs

### Codes d'Erreur Courants

- `400` : Données invalides
- `401` : Non authentifié
- `403` : Non autorisé
- `404` : Ressource non trouvée
- `409` : Conflit (ex: réservation existante)
- `500` : Erreur serveur

### Tests d'Erreur

```javascript
pm.test("Error response structure", function () {
    if (pm.response.code !== 200) {
        const responseJson = pm.response.json();
        pm.expect(responseJson).to.have.property('success');
        pm.expect(responseJson.success).to.be.false;
        pm.expect(responseJson).to.have.property('error');
    }
});
```

## 📝 Bonnes Pratiques

1. **Organisation** : Utilisez les dossiers pour organiser vos requêtes
2. **Variables** : Utilisez les variables d'environnement pour les données dynamiques
3. **Tests** : Ajoutez des tests pour chaque endpoint
4. **Documentation** : Documentez vos requêtes avec des descriptions
5. **Versioning** : Exportez régulièrement votre collection

## 🔄 Workflow Complet de Test

1. **Setup** : Importer la collection et l'environnement
2. **Authentification** : Créer des comptes et se connecter
3. **Données** : Créer des bailleurs, locataires et logements
4. **Fonctionnalités** : Tester les réservations, avis et interactions
5. **Recherche** : Tester la recherche avancée
6. **Nettoyage** : Supprimer les données de test

Cette collection vous permet de tester complètement l'API DigiKaz et de valider toutes les fonctionnalités de la plateforme de location de logements étudiants.

