# Guide de Configuration - DigiKaz

## 🚨 Problème de Configuration Supabase

Vous rencontrez une erreur car les variables d'environnement Supabase ne sont pas configurées.

## 🔧 Solution Rapide

### 1. Créer le fichier `.env.local`

Créez un fichier `.env.local` à la racine de votre projet :

```bash
# Dans le dossier racine de votre projet
touch .env.local
```

### 2. Ajouter les variables Supabase

Ajoutez ces lignes dans votre fichier `.env.local` :

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Obtenir vos clés Supabase

1. Allez sur [Supabase Dashboard](https://supabase.com/dashboard)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Allez dans **Settings** → **API**
4. Copiez :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Redémarrer le serveur

```bash
# Arrêter le serveur (Ctrl+C)
# Puis redémarrer
npm run dev
```

## 🔍 Vérification

### Test de santé

Visitez : `http://localhost:3000/api/health`

Vous devriez voir :
```json
{
  "status": "ok",
  "supabase": {
    "configured": true,
    "connected": true
  }
}
```

### Test de l'API

Visitez : `http://localhost:3000/api/bailleurs`

Vous devriez voir une liste (vide au début) au lieu d'une erreur.

## 📋 Configuration Complète

### Variables d'environnement recommandées

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Database Configuration
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres

# Email Configuration (optionnel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password

# Application Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./public/uploads

# API Configuration
API_RATE_LIMIT=100
API_RATE_LIMIT_WINDOW=900000
```

## 🗄️ Configuration de la Base de Données

### 1. Créer les tables

Dans votre projet Supabase, allez dans **SQL Editor** et exécutez le schéma :

```sql
-- Créer les tables de votre base de données
-- (Utilisez le schéma SQL que vous avez fourni)
```

### 2. Activer Row Level Security (RLS)

```sql
-- Activer RLS sur toutes les tables
ALTER TABLE bailleurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE locataires ENABLE ROW LEVEL SECURITY;
ALTER TABLE logements ENABLE ROW LEVEL SECURITY;
-- ... etc pour toutes les tables
```

### 3. Créer les politiques RLS

```sql
-- Exemple de politique pour les bailleurs
CREATE POLICY "Bailleurs are viewable by everyone" ON bailleurs
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own bailleur" ON bailleurs
    FOR INSERT WITH CHECK (auth.uid() = user_id);
```

## 🧪 Tests de Fonctionnement

### 1. Test de l'API d'authentification

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "nom": "Test User",
    "telephone": "+33123456789",
    "type_utilisateur": "bailleur"
  }'
```

### 2. Test de l'API des bailleurs

```bash
curl http://localhost:3000/api/bailleurs
```

### 3. Test de l'API des logements

```bash
curl http://localhost:3000/api/logements
```

## 🚨 Dépannage

### Erreur : "NEXT_PUBLIC_SUPABASE_URL is not defined"

**Solution :**
1. Vérifiez que le fichier `.env.local` existe
2. Vérifiez que les variables sont correctement nommées
3. Redémarrez le serveur de développement

### Erreur : "Invalid API key"

**Solution :**
1. Vérifiez que vous utilisez la clé `anon public` et non `service_role`
2. Vérifiez que l'URL du projet est correcte
3. Vérifiez que le projet Supabase est actif

### Erreur : "Table does not exist"

**Solution :**
1. Créez les tables dans Supabase SQL Editor
2. Vérifiez que les noms des tables correspondent au code
3. Vérifiez que RLS est configuré correctement

### Erreur : "Permission denied"

**Solution :**
1. Vérifiez les politiques RLS
2. Vérifiez que l'utilisateur est authentifié
3. Vérifiez les permissions de la clé API

## 📞 Support

Si vous rencontrez encore des problèmes :

1. Vérifiez les logs du serveur
2. Testez l'endpoint de santé : `/api/health`
3. Vérifiez la configuration Supabase dans le dashboard
4. Consultez la documentation Supabase

## 🔗 Liens Utiles

- [Supabase Dashboard](https://supabase.com/dashboard)
- [Documentation Supabase](https://supabase.com/docs)
- [Guide Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

