# Documentation des Packages - DigiKaz

## 📦 Vue d'ensemble

Ce document détaille tous les packages nécessaires pour le projet DigiKaz, plateforme de location de logements pour étudiants.

## 🚀 Installation

```bash
# Installer tous les packages
npm install

# Ou avec yarn
yarn install
```

## 📋 Packages Principaux (Dependencies)

### 🏗️ Framework et Core

| Package | Version | Description |
|---------|---------|-------------|
| `next` | 15.5.2 | Framework React pour le développement full-stack |
| `react` | 19.1.0 | Bibliothèque UI principale |
| `react-dom` | 19.1.0 | Rendu React côté client |
| `@supabase/supabase-js` | ^2.56.1 | Client Supabase pour la base de données et l'auth |

### 🎨 UI/UX et Composants

| Package | Version | Description |
|---------|---------|-------------|
| `@headlessui/react` | ^1.7.18 | Composants UI accessibles et sans style |
| `@heroicons/react` | ^2.1.1 | Icônes SVG de haute qualité |
| `clsx` | ^2.1.0 | Utilitaire pour gérer les classes CSS conditionnelles |
| `framer-motion` | ^11.10.8 | Animations et transitions fluides |
| `react-hot-toast` | ^2.4.1 | Notifications toast élégantes |

### 📝 Formulaires et Validation

| Package | Version | Description |
|---------|---------|-------------|
| `react-hook-form` | ^7.51.0 | Gestion performante des formulaires |
| `@hookform/resolvers` | ^3.3.4 | Résolveurs pour react-hook-form |
| `zod` | ^3.23.8 | Validation de schémas TypeScript |
| `react-select` | ^5.8.0 | Composant select avancé |

### 📊 Données et API

| Package | Version | Description |
|---------|---------|-------------|
| `swr` | ^2.2.5 | Hooks pour la récupération de données |
| `react-query` | ^3.39.3 | Gestion d'état serveur et cache |
| `axios` | ^1.7.2 | Client HTTP pour les requêtes API |
| `recharts` | ^2.12.2 | Graphiques et visualisations |

### 🛠️ Utilitaires

| Package | Version | Description |
|---------|---------|-------------|
| `date-fns` | ^3.6.0 | Manipulation de dates légère |
| `uuid` | ^11.0.1 | Génération d'identifiants uniques |
| `validator` | ^13.11.0 | Validation de données côté client |

### 🔐 Sécurité et Authentification

| Package | Version | Description |
|---------|---------|-------------|
| `bcryptjs` | ^2.4.3 | Hachage de mots de passe |
| `helmet` | ^8.0.0 | Sécurité des headers HTTP |
| `cors` | ^2.8.5 | Gestion CORS |

### 📧 Communication

| Package | Version | Description |
|---------|---------|-------------|
| `nodemailer` | ^6.9.12 | Envoi d'emails |
| `dotenv` | ^16.4.5 | Variables d'environnement |

### 🖼️ Images et Fichiers

| Package | Version | Description |
|---------|---------|-------------|
| `multer` | ^1.4.5-lts.1 | Gestion des uploads de fichiers |
| `sharp` | ^0.33.2 | Optimisation et redimensionnement d'images |

### ✅ Validation Backend

| Package | Version | Description |
|---------|---------|-------------|
| `joi` | ^17.12.2 | Validation de schémas côté serveur |

## 🔧 Packages de Développement (DevDependencies)

### 🎯 TypeScript

| Package | Version | Description |
|---------|---------|-------------|
| `typescript` | ^5.7.2 | Support TypeScript |
| `@types/node` | ^22.10.2 | Types pour Node.js |
| `@types/react` | ^18.3.12 | Types pour React |
| `@types/react-dom` | ^18.3.1 | Types pour React DOM |

### 📝 Types pour les Packages

| Package | Version | Description |
|---------|---------|-------------|
| `@types/bcryptjs` | ^2.4.6 | Types pour bcryptjs |
| `@types/cors` | ^2.8.17 | Types pour cors |
| `@types/multer` | ^1.4.12 | Types pour multer |
| `@types/nodemailer` | ^6.4.14 | Types pour nodemailer |
| `@types/uuid` | ^10.0.0 | Types pour uuid |
| `@types/validator` | ^13.11.9 | Types pour validator |

### 🧹 Linting et Formatage

| Package | Version | Description |
|---------|---------|-------------|
| `eslint` | ^9.15.0 | Linter JavaScript/TypeScript |
| `eslint-config-next` | 15.5.2 | Configuration ESLint pour Next.js |
| `@typescript-eslint/eslint-plugin` | ^8.15.0 | Plugin ESLint pour TypeScript |
| `@typescript-eslint/parser` | ^8.15.0 | Parser ESLint pour TypeScript |
| `eslint-plugin-react` | ^7.34.1 | Plugin ESLint pour React |
| `eslint-plugin-react-hooks` | ^5.0.0 | Plugin ESLint pour React Hooks |
| `prettier` | ^3.3.3 | Formateur de code |
| `prettier-plugin-tailwindcss` | ^0.5.12 | Plugin Prettier pour Tailwind |

### 🧪 Tests

| Package | Version | Description |
|---------|---------|-------------|
| `jest` | ^29.7.0 | Framework de tests |
| `@testing-library/react` | ^16.1.0 | Utilitaires de test pour React |
| `@testing-library/jest-dom` | ^6.4.2 | Matchers Jest pour DOM |
| `@testing-library/user-event` | ^14.5.2 | Simulation d'événements utilisateur |
| `jest-environment-jsdom` | ^29.7.0 | Environnement Jest pour DOM |

### 🎨 Styling

| Package | Version | Description |
|---------|---------|-------------|
| `tailwindcss` | ^4 | Framework CSS utilitaire |
| `@tailwindcss/postcss` | ^4 | Plugin PostCSS pour Tailwind |

## 📜 Scripts NPM

```json
{
  "scripts": {
    "dev": "next dev",           // Démarrage en mode développement
    "build": "next build",       // Build de production
    "start": "next start",       // Démarrage en mode production
    "lint": "next lint",         // Vérification du code avec ESLint
    "type-check": "tsc --noEmit", // Vérification des types TypeScript
    "test": "jest",              // Exécution des tests
    "test:watch": "jest --watch", // Tests en mode watch
    "test:coverage": "jest --coverage" // Tests avec couverture
  }
}
```

## 🔧 Configuration Requise

### Versions Node.js et NPM

```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

## 📁 Structure des Imports

### Imports Courants

```javascript
// UI Components
import { Dialog } from '@headlessui/react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

// Forms
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Data Fetching
import useSWR from 'swr'
import { useQuery } from 'react-query'

// Utils
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'

// Supabase
import { supabase } from '@/lib/supabase'
```

## 🚀 Installation par Étapes

### 1. Installation Initiale

```bash
# Cloner le projet
git clone <repository-url>
cd digikaz

# Installer les dépendances
npm install
```

### 2. Configuration de l'Environnement

```bash
# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Vérification de l'Installation

```bash
# Vérifier les types TypeScript
npm run type-check

# Vérifier le linting
npm run lint

# Démarrer en mode développement
npm run dev
```

## 🔍 Utilisation des Packages

### Exemple d'Utilisation de React Hook Form avec Zod

```javascript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Connexion</button>
    </form>
  )
}
```

### Exemple d'Utilisation de SWR

```javascript
import useSWR from 'swr'

export function LogementsList() {
  const { data, error, isLoading } = useSWR('/api/logements', fetcher)

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur de chargement</div>

  return (
    <div>
      {data.map(logement => (
        <div key={logement.id}>{logement.titre}</div>
      ))}
    </div>
  )
}
```

## 🧪 Tests

### Configuration Jest

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
```

### Exemple de Test

```javascript
import { render, screen } from '@testing-library/react'
import { LoginForm } from './LoginForm'

test('affiche le formulaire de connexion', () => {
  render(<LoginForm />)
  expect(screen.getByText('Connexion')).toBeInTheDocument()
})
```

## 📚 Ressources Additionnelles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Supabase](https://supabase.com/docs)
- [Documentation React Hook Form](https://react-hook-form.com/)
- [Documentation SWR](https://swr.vercel.app/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

Cette configuration de packages vous permet de développer une plateforme complète et moderne pour la location de logements étudiants avec toutes les fonctionnalités nécessaires.

