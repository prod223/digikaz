# 📁 Structure Frontend - DigiKaz

## 🎯 Organisation des fichiers

J'ai déplacé tous les fichiers frontend dans le dossier `(frontend)` pour une meilleure organisation du projet.

## 📂 Nouvelle structure

```
src/app/
├── (frontend)/                 # 🎨 Pages Frontend (Route Group)
│   ├── page.js                # 🏠 Page d'accueil
│   └── logements/             
│       └── page.js            # 🏘️ Page liste des logements
├── api/                       # 🔧 API Routes (Backend)
│   ├── auth/
│   ├── bailleurs/
│   ├── locataires/
│   ├── logements/
│   └── ...
├── globals.css               # 🎨 Styles globaux
└── layout.js                # 📐 Layout principal
```

## ✨ Avantages de cette structure

### 1. **Route Groups avec `(frontend)`**
- Les parenthèses créent un "route group" dans Next.js 13+
- N'affecte pas l'URL : `/` et `/logements` fonctionnent normalement
- Sépare clairement frontend et backend

### 2. **URLs inchangées**
- ✅ `http://localhost:3000/` → Page d'accueil
- ✅ `http://localhost:3000/logements` → Page logements
- ✅ `http://localhost:3000/api/logements` → API logements

### 3. **Organisation claire**
- **Frontend** : `src/app/(frontend)/`
- **Backend** : `src/app/api/`
- **Composants** : `src/components/`
- **Utilitaires** : `src/lib/`, `src/contexts/`

## 🚀 Pages Frontend disponibles

### 🏠 Page d'accueil - `/`
**Fichier :** `src/app/(frontend)/page.js`

**Fonctionnalités :**
- Carrousel horizontal en haut (images des logements)
- Hero section avec collage d'images (masqué sur mobile)
- Section features avec thème or élégant
- Section CTA finale
- Thème or premium avec animations

### 🏘️ Page Logements - `/logements`
**Fichier :** `src/app/(frontend)/logements/page.js`

**Fonctionnalités :**
- Récupération API `/api/logements`
- Filtres avancés (type, prix, localisation)
- Cartes logements interactives avec :
  - Navigation multi-images
  - Bouton like/cœur
  - Badges type et statut
  - Étoiles de notation
  - Prix en euros
- États loading/error/empty
- Design responsive

## 🔧 Composants Frontend

**Fichier :** `src/components/`

- `Header.js` - Navigation principale
- `Footer.js` - Pied de page
- `HorizontalCarousel.js` - Carrousel type Reels Facebook
- `LogementCard.js` - Carte de logement élégante
- `PropertiesSection.js` - Section propriétés
- `ThemeToggle.js` - Basculeur dark/light mode

## 🎨 Thème et Design

**Couleurs principales :**
- **Or élégant** : `#d4af37` (gold-500)
- **Or clair** : `#e6c966` (gold-400)  
- **Or foncé** : `#b8941f` (gold-600)

**Caractéristiques :**
- Design premium et luxueux
- Animations fluides
- Glassmorphism et backdrop-blur
- Mode sombre/clair
- Responsive mobile-first

## 📱 Test et Navigation

1. **Démarrer le serveur :**
   ```bash
   npm run dev
   ```

2. **Tester les pages :**
   - `http://localhost:3000/` - Page d'accueil
   - `http://localhost:3000/logements` - Liste logements

3. **API disponible :**
   - `http://localhost:3000/api/logements` - Données logements

## 🎯 Prochaines étapes

1. **Page détail logement** : `/logements/[id]`
2. **Pages d'authentification** : `/auth/signin`, `/auth/signup`
3. **Dashboard utilisateur** : `/dashboard`
4. **Page de réservation** : `/booking/[id]`

---

**✅ La structure est maintenant organisée et prête pour le développement !**
