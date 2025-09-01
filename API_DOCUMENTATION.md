# Documentation API - Plateforme de Location de Logements pour Étudiants

## Vue d'ensemble

Cette API RESTful permet de gérer une plateforme de location de logements pour étudiants. Elle utilise Next.js 14 avec les App Router et Supabase comme base de données.

## Base URL

```
http://localhost:3000/api
```

## Authentification

L'API utilise Supabase Auth pour l'authentification. Toutes les routes nécessitent un token d'authentification valide dans les headers.

## Endpoints

### 1. Bailleurs (Landlords)

#### GET /api/bailleurs
Récupère la liste des bailleurs avec pagination.

**Paramètres de requête :**
- `page` (optionnel) : Numéro de page (défaut: 1)
- `limit` (optionnel) : Nombre d'éléments par page (défaut: 10)

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "nom": "Jean Dupont",
      "email": "jean@example.com",
      "telephone": "0123456789",
      "date_inscription": "2024-01-01T00:00:00Z",
      "is_active": true,
      "user_id": "uuid"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  }
}
```

#### POST /api/bailleurs
Crée un nouveau bailleur.

**Corps de la requête :**
```json
{
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "telephone": "0123456789",
  "user_id": "uuid"
}
```

#### GET /api/bailleurs/[id]
Récupère un bailleur par son ID.

#### PUT /api/bailleurs/[id]
Met à jour un bailleur.

#### DELETE /api/bailleurs/[id]
Désactive un bailleur (soft delete).

### 2. Locataires (Tenants)

#### GET /api/locataires
Récupère la liste des locataires avec filtres.

**Paramètres de requête :**
- `page` (optionnel) : Numéro de page
- `limit` (optionnel) : Nombre d'éléments par page
- `universite` (optionnel) : Filtrer par université

#### POST /api/locataires
Crée un nouveau locataire.

**Corps de la requête :**
```json
{
  "nom": "Marie Martin",
  "email": "marie@example.com",
  "universite": "Université de Paris",
  "user_id": "uuid"
}
```

#### GET /api/locataires/[id]
Récupère un locataire avec ses détails complets (profil, préférences, réservations).

#### PUT /api/locataires/[id]
Met à jour un locataire.

#### DELETE /api/locataires/[id]
Désactive un locataire.

### 3. Logements (Listings)

#### GET /api/logements
Recherche avancée de logements avec filtres multiples.

**Paramètres de requête :**
- `type_logement` : Appartement, Maison, Studio
- `prix_min` / `prix_max` : Fourchette de prix
- `disponible` : true/false
- `statut_logement` : disponible, reserve, indisponible
- `sort_by` : date_ajout, score, prix, prix_desc, compatibility
- `lat` / `lng` : Coordonnées géographiques
- `radius` : Rayon de recherche en km
- `locataire_id` : Pour calculer la compatibilité

#### POST /api/logements
Crée un nouveau logement.

**Corps de la requête :**
```json
{
  "bailleur_id": "uuid",
  "titre": "Studio moderne près de l'université",
  "accroche": "Studio lumineux et bien équipé",
  "adresse": "123 Rue de la Paix, Paris",
  "latitude": 48.8566,
  "longitude": 2.3522,
  "prix": 800,
  "type_logement": "Studio",
  "photos": ["url1", "url2"]
}
```

#### GET /api/logements/[id]
Récupère un logement avec détails complets (bailleur, avis, note moyenne).

#### PUT /api/logements/[id]
Met à jour un logement.

#### DELETE /api/logements/[id]
Supprime un logement (soft delete).

### 4. Réservations

#### GET /api/reservations
Récupère les réservations avec filtres.

**Paramètres de requête :**
- `locataire_id` : Filtrer par locataire
- `logement_id` : Filtrer par logement
- `statut_reservation` : en_attente, confirmee, annulee, terminee
- `date_debut` / `date_fin` : Période de réservation

#### POST /api/reservations
Crée une nouvelle réservation.

**Corps de la requête :**
```json
{
  "locataire_id": "uuid",
  "logement_id": 1,
  "montant_total": 2400,
  "date_debut_location": "2024-09-01T00:00:00Z",
  "date_fin_location": "2024-12-31T23:59:59Z",
  "contrat_url": "https://example.com/contrat.pdf"
}
```

#### GET /api/reservations/[id]
Récupère une réservation avec détails complets.

#### PUT /api/reservations/[id]
Met à jour une réservation.

#### DELETE /api/reservations/[id]
Annule une réservation.

### 5. Avis

#### GET /api/avis
Récupère les avis avec filtres.

**Paramètres de requête :**
- `logement_id` : Filtrer par logement
- `locataire_id` : Filtrer par locataire
- `bailleur_id` : Filtrer par bailleur
- `note_min` / `note_max` : Fourchette de notes

#### POST /api/avis
Crée un nouvel avis.

**Corps de la requête :**
```json
{
  "locataire_id": "uuid",
  "bailleur_id": "uuid",
  "logement_id": 1,
  "note": 5,
  "commentaire": "Excellent logement, très bien situé !"
}
```

### 6. Interactions

#### GET /api/interactions
Récupère les interactions (likes, dislikes, matches).

**Paramètres de requête :**
- `locataire_id` : Filtrer par locataire
- `logement_id` : Filtrer par logement
- `resultat` : like, dislike, match

#### POST /api/interactions
Crée ou met à jour une interaction.

**Corps de la requête :**
```json
{
  "locataire_id": "uuid",
  "logement_id": 1,
  "resultat": "like"
}
```

### 7. Préférences

#### GET /api/preferences
Récupère les préférences d'un locataire.

**Paramètres de requête :**
- `locataire_id` : ID du locataire

#### POST /api/preferences
Crée ou met à jour les préférences d'un locataire.

**Corps de la requête :**
```json
{
  "locataire_id": "uuid",
  "type_logement": "Studio",
  "budget_min": 500,
  "budget_max": 1000,
  "rayon_km": 5,
  "autres_spec": "Près d'une station de métro"
}
```

### 8. Recherche Avancée

#### GET /api/search
Recherche avancée avec tous les filtres combinés.

**Paramètres de requête :**
- Tous les paramètres de `/api/logements`
- `universite` : Filtrer par université
- `score_min` : Score minimum du logement

## Codes de Statut HTTP

- `200` : Succès
- `201` : Créé avec succès
- `400` : Requête invalide
- `404` : Ressource non trouvée
- `409` : Conflit (ex: doublon)
- `500` : Erreur serveur

## Format des Réponses

Toutes les réponses suivent ce format :

```json
{
  "success": true,
  "data": {...},
  "message": "Message optionnel",
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

En cas d'erreur :

```json
{
  "success": false,
  "error": "Description de l'erreur"
}
```

## Validation des Données

L'API valide automatiquement :
- Formats d'email
- Numéros de téléphone français
- Coordonnées géographiques
- Types de logement
- Statuts de réservation
- Notes (1-5)
- Budgets (positifs)
- Dates (cohérence)

## Fonctionnalités Avancées

### Calcul de Compatibilité
L'API calcule automatiquement un score de compatibilité entre un locataire et un logement basé sur :
- Type de logement préféré
- Budget
- Distance géographique

### Recherche Géographique
Recherche de logements dans un rayon donné autour de coordonnées GPS.

### Système de Scores
Les logements reçoivent un score basé sur les avis des utilisateurs.

### Gestion des Conflits
L'API vérifie automatiquement les conflits de réservation pour éviter les doubles réservations.

## Exemples d'Utilisation

### Recherche de logements
```bash
curl "http://localhost:3000/api/search?type_logement=Studio&prix_min=500&prix_max=1000&lat=48.8566&lng=2.3522&radius=5&sort_by=compatibility&locataire_id=uuid"
```

### Créer une réservation
```bash
curl -X POST "http://localhost:3000/api/reservations" \
  -H "Content-Type: application/json" \
  -d '{
    "locataire_id": "uuid",
    "logement_id": 1,
    "montant_total": 2400,
    "date_debut_location": "2024-09-01T00:00:00Z",
    "date_fin_location": "2024-12-31T23:59:59Z"
  }'
```

### Laisser un avis
```bash
curl -X POST "http://localhost:3000/api/avis" \
  -H "Content-Type: application/json" \
  -d '{
    "locataire_id": "uuid",
    "logement_id": 1,
    "note": 5,
    "commentaire": "Excellent logement !"
  }'
```

## Sécurité

- Validation stricte des données d'entrée
- Vérification des permissions utilisateur
- Protection contre les injections SQL (via Supabase)
- Gestion sécurisée des fichiers (Supabase Storage)

## Performance

- Pagination automatique
- Indexation des requêtes fréquentes
- Calcul asynchrone des scores de compatibilité
- Mise en cache des résultats de recherche

## Maintenance

- Logs détaillés des erreurs
- Monitoring des performances
- Sauvegarde automatique (Supabase)
- Versioning des API



