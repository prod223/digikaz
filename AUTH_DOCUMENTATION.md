# Documentation de l'Authentification

## Vue d'ensemble

Ce système d'authentification utilise Supabase Auth pour gérer les utilisateurs et les sessions. Il supporte deux types d'utilisateurs : **Bailleurs** et **Locataires**.

## Routes d'API

### Base URL
```
/api/auth
```

### 1. Inscription (Sign Up)

**Endpoint:** `POST /api/auth/signup`

**Description:** Crée un nouveau compte utilisateur avec un profil correspondant.

**Corps de la requête:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "nom": "Jean Dupont",
  "telephone": "+33123456789",
  "type_utilisateur": "bailleur"
}
```

**Réponse de succès (201):**
```json
{
  "success": true,
  "message": "Compte créé avec succès. Vérifiez votre email pour confirmer votre compte.",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "type_utilisateur": "bailleur"
    },
    "profile": {
      "id": 1,
      "user_id": "uuid",
      "nom": "Jean Dupont",
      "email": "user@example.com",
      "telephone": "+33123456789",
      "date_inscription": "2024-01-01T00:00:00Z",
      "is_active": true
    }
  }
}
```

**Erreurs possibles:**
- `400`: Données manquantes ou invalides
- `500`: Erreur serveur

### 2. Connexion (Sign In)

**Endpoint:** `POST /api/auth/signin`

**Description:** Authentifie un utilisateur existant.

**Corps de la requête:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Réponse de succès (200):**
```json
{
  "success": true,
  "message": "Connexion réussie",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "type_utilisateur": "bailleur"
    },
    "profile": {
      "id": 1,
      "user_id": "uuid",
      "nom": "Jean Dupont",
      "email": "user@example.com",
      "telephone": "+33123456789",
      "date_inscription": "2024-01-01T00:00:00Z",
      "is_active": true
    },
    "session": {
      "access_token": "token",
      "refresh_token": "refresh_token",
      "expires_at": 1234567890
    }
  }
}
```

**Erreurs possibles:**
- `400`: Données manquantes ou invalides
- `401`: Identifiants incorrects ou email non confirmé
- `404`: Utilisateur non trouvé
- `500`: Erreur serveur

### 3. Déconnexion (Sign Out)

**Endpoint:** `POST /api/auth/signout`

**Description:** Déconnecte l'utilisateur actuel.

**Réponse de succès (200):**
```json
{
  "success": true,
  "message": "Déconnexion réussie"
}
```

### 4. Profil Utilisateur

**Endpoint:** `GET /api/auth/me`

**Description:** Récupère les informations de l'utilisateur connecté.

**Réponse de succès (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "type_utilisateur": "bailleur",
      "email_confirmed_at": "2024-01-01T00:00:00Z",
      "created_at": "2024-01-01T00:00:00Z"
    },
    "profile": {
      "id": 1,
      "user_id": "uuid",
      "nom": "Jean Dupont",
      "email": "user@example.com",
      "telephone": "+33123456789",
      "date_inscription": "2024-01-01T00:00:00Z",
      "is_active": true
    }
  }
}
```

**Erreurs possibles:**
- `401`: Utilisateur non authentifié
- `404`: Profil non trouvé ou inactif
- `500`: Erreur serveur

### 5. Réinitialisation de Mot de Passe

**Endpoint:** `POST /api/auth/reset-password`

**Description:** Envoie un email de réinitialisation de mot de passe.

**Corps de la requête:**
```json
{
  "email": "user@example.com"
}
```

**Réponse de succès (200):**
```json
{
  "success": true,
  "message": "Email de réinitialisation envoyé avec succès"
}
```

### 6. Mise à Jour de Mot de Passe

**Endpoint:** `PUT /api/auth/update-password`

**Description:** Met à jour le mot de passe de l'utilisateur connecté.

**Corps de la requête:**
```json
{
  "password": "nouveau_password123"
}
```

**Réponse de succès (200):**
```json
{
  "success": true,
  "message": "Mot de passe mis à jour avec succès"
}
```

## Utilisation côté Client

### Hook useAuth

```javascript
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { 
    user, 
    profile, 
    loading, 
    error, 
    register, 
    login, 
    logout, 
    isAuthenticated 
  } = useAuth();

  const handleSignUp = async () => {
    try {
      await register({
        email: 'user@example.com',
        password: 'password123',
        nom: 'Jean Dupont',
        telephone: '+33123456789',
        type_utilisateur: 'bailleur'
      });
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
    }
  };

  const handleSignIn = async () => {
    try {
      await login({
        email: 'user@example.com',
        password: 'password123'
      });
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bienvenue, {profile?.nom}!</p>
          <button onClick={logout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignUp}>Inscription</button>
          <button onClick={handleSignIn}>Connexion</button>
        </div>
      )}
    </div>
  );
}
```

### Fonctions d'Authentification Directes

```javascript
import { signUp, signIn, signOut, getCurrentUser } from '@/lib/auth';

// Inscription
const result = await signUp({
  email: 'user@example.com',
  password: 'password123',
  nom: 'Jean Dupont',
  telephone: '+33123456789',
  type_utilisateur: 'bailleur'
});

// Connexion
const result = await signIn({
  email: 'user@example.com',
  password: 'password123'
});

// Déconnexion
await signOut();

// Récupérer l'utilisateur actuel
const userData = await getCurrentUser();
```

## Configuration

### Variables d'Environnement

Ajoutez ces variables dans votre fichier `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Configuration Supabase

1. Activez l'authentification par email dans votre projet Supabase
2. Configurez les templates d'email pour la confirmation et la réinitialisation
3. Activez Row Level Security (RLS) sur les tables `Bailleurs` et `Locataires`

### Intégration dans l'App

```javascript
// app/layout.js
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

## Sécurité

- Toutes les routes d'authentification utilisent HTTPS
- Les mots de passe sont hashés par Supabase
- Validation des données côté serveur
- Gestion des erreurs sécurisée
- Sessions avec tokens d'accès et de rafraîchissement

## Fonctionnalités Avancées

- **Confirmation d'email**: Les utilisateurs doivent confirmer leur email
- **Réinitialisation de mot de passe**: Via email sécurisé
- **Sessions persistantes**: Maintien de la connexion entre les sessions
- **Gestion des erreurs**: Messages d'erreur détaillés et sécurisés
- **Types d'utilisateurs**: Distinction entre bailleurs et locataires
- **Profils synchronisés**: Mise à jour automatique des profils



